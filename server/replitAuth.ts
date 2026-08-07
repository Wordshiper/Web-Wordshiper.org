import * as client from "openid-client";
import { Strategy, type VerifyFunction } from "openid-client/passport";

import passport from "passport";
import session from "express-session";
import type { Express, RequestHandler } from "express";
import memoize from "memoizee";
import connectPg from "connect-pg-simple";
import { storage } from "./storage";

// Replit-only auth. When REPLIT_DOMAINS is not set (local/Cursor/Cloudflare),
// auth is disabled gracefully so the server can still run for development.
const REPLIT_AUTH_ENABLED = Boolean(process.env.REPLIT_DOMAINS && process.env.REPL_ID);
if (!REPLIT_AUTH_ENABLED) {
  console.warn("[Auth] REPLIT_DOMAINS/REPL_ID not set — Replit auth disabled (portable mode).");
}

const getOidcConfig = memoize(
  async () => {
    const issuerUrl = process.env.ISSUER_URL || "https://replit.com/oidc";
    return await client.discovery(
      new URL(issuerUrl),
      process.env.REPL_ID!
    );
  },
  { maxAge: 3600 * 1000 }
);

export function getSession() {
  const sessionTtl = 7 * 24 * 60 * 60 * 1000; // 1 week
  const pgStore = connectPg(session);
  const sessionStore = new pgStore({
    conString: process.env.DATABASE_URL,
    createTableIfMissing: false,
    ttl: sessionTtl,
    tableName: "sessions",
  });
  return session({
    secret: process.env.SESSION_SECRET!,
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: true,
      maxAge: sessionTtl,
    },
  });
}

function updateUserSession(
  user: any,
  tokens: client.TokenEndpointResponse & client.TokenEndpointResponseHelpers
) {
  user.claims = tokens.claims();
  user.access_token = tokens.access_token;
  user.refresh_token = tokens.refresh_token;
  user.expires_at = user.claims?.exp;
}

async function upsertUser(
  claims: any,
) {
  await storage.upsertUser({
    id: claims["sub"],
    email: claims["email"],
    firstName: claims["first_name"],
    lastName: claims["last_name"],
    profileImageUrl: claims["profile_image_url"],
  });
}

export async function setupAuth(app: Express) {
  if (!REPLIT_AUTH_ENABLED) {
    // Portable mode: no session store, no OIDC. Auth endpoints simply report unavailable.
    app.get(["/api/login", "/api/callback", "/api/logout"], (_req, res) => {
      res.status(501).json({ error: "Authentication is not available in this environment." });
    });
    return;
  }
  app.set("trust proxy", 1);
  app.use(getSession());
  app.use(passport.initialize());
  app.use(passport.session());

  const config = await getOidcConfig();

  const verify: VerifyFunction = async (
    tokens: client.TokenEndpointResponse & client.TokenEndpointResponseHelpers,
    verified: passport.AuthenticateCallback
  ) => {
    const user = {};
    updateUserSession(user, tokens);
    await upsertUser(tokens.claims());
    verified(null, user);
  };

  // Development fallback for localhost
  const domains = process.env.REPLIT_DOMAINS?.split(",") || [];
  
  // Add localhost for development
  if (process.env.NODE_ENV === 'development') {
    domains.push('localhost:5000');
  }

  for (const domain of domains) {
    console.log(`[Auth] Registering strategy for domain: ${domain}`);
    const strategy = new Strategy(
      {
        name: `replitauth:${domain}`,
        config,
        scope: "openid email profile offline_access",
        callbackURL: domain.includes('localhost') 
          ? `http://${domain}/api/callback`
          : `https://${domain}/api/callback`,
      },
      verify,
    );
    passport.use(strategy);
  }

  passport.serializeUser((user: Express.User, cb) => cb(null, user));
  passport.deserializeUser((user: Express.User, cb) => cb(null, user));

  app.get("/api/login", (req, res, next) => {
    const hostname = req.hostname === 'localhost' ? `${req.hostname}:${req.app.get('port') || 5000}` : req.hostname;
    console.log(`[Auth] Login attempt for hostname: ${hostname}`);
    console.log(`[Auth] Available domains: ${process.env.REPLIT_DOMAINS}`);
    
    // In development, show message that auth is only available in production
    if (process.env.NODE_ENV === 'development' && req.hostname === 'localhost') {
      res.status(400).json({ 
        error: 'Authentication is only available in production environment. Deploy to Replit to test login functionality.' 
      });
      return;
    }
    
    passport.authenticate(`replitauth:${hostname}`, {
      prompt: "login consent",
      scope: ["openid", "email", "profile", "offline_access"],
    })(req, res, next);
  });

  app.get("/api/callback", (req, res, next) => {
    console.log(`[Auth] Callback for hostname: ${req.hostname}`);
    
    passport.authenticate(`replitauth:${req.hostname}`, {
      successReturnToOrRedirect: "/",
      failureRedirect: "/api/login",
    })(req, res, next);
  });

  app.get("/api/logout", (req, res) => {
    req.logout(() => {
      res.redirect(
        client.buildEndSessionUrl(config, {
          client_id: process.env.REPL_ID!,
          post_logout_redirect_uri: `${req.protocol}://${req.hostname}`,
        }).href
      );
    });
  });
}

export const isAuthenticated: RequestHandler = async (req, res, next) => {
  if (!REPLIT_AUTH_ENABLED) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const user = req.user as any;

  if (!req.isAuthenticated() || !user.expires_at) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const now = Math.floor(Date.now() / 1000);
  if (now <= user.expires_at) {
    return next();
  }

  const refreshToken = user.refresh_token;
  if (!refreshToken) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  try {
    const config = await getOidcConfig();
    const tokenResponse = await client.refreshTokenGrant(config, refreshToken);
    updateUserSession(user, tokenResponse);
    return next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
};