# Wordshiper - AI-Powered Bible Memorization Platform

## Overview

Wordshiper is a full-stack web application designed around the concept "아침·점심·저녁 5분, 말씀으로 변화되는 삶" (Morning, Lunch, Evening 5 minutes each - Life transformed by the Word). The platform serves families seeking sustainable Bible memorization through a simple daily routine: 2 minutes prayer + 3 minutes Scripture memorization, three times a day. Targeting busy believers who struggle with Scripture memory, those seeking daily connection with God, people needing emotional restoration through the Word, and families dreaming of a missional life where memorized verses become life-changing ministry. The application combines AI-powered TTS technology across 95 languages with a vision where "one memorized verse can save someone's life."

## User Preferences

- Preferred communication style: Simple, everyday language.
- Korean main slogan: "15분, 성경 암송의 혁명"
- Korean subtitle: "매일 15분, 말씀 안에 머무세요. 당신의 삶이 변하기 시작합니다."
- English slogan: "Memorize Scripture. 15 Minutes a Day. A Life Transformed!"

## Recent Changes (October 2025)

### Branding Update (Latest)
- **Multilingual Logo System**: Logos now automatically switch based on selected language
  - English: "Wordshiper" logo (all languages except Korean)
  - Korean: "워드쉽퍼" logo (when Korean is selected)
- **Multi-Size Optimization**: Using 450px for header/footer, 900px for About page hero
- **Dynamic Logo Switching**: Uses `currentLanguage` from useLanguage hook to select appropriate logo
- **Files Updated**: Navigation, About page, Footer components all support bilingual logos
- **Visual Consistency**: All pages display synchronized logo updates when language changes

### Language Support Enhancements
- **About Page Translations**: Added comprehensive translations for About page in 12 languages (en, ko, es, fr, de, ja, zh, ar, hi, pt, ru, it)
- **Unified Translation System**: About page now uses t() function from useLanguage hook instead of hardcoded English/Korean
- **Removed Local Language Toggle**: Eliminated About page-specific language toggle button
- **Global Language Switcher**: All pages now consistently use the global language switcher in navigation
- **28+ New Translation Keys**: Added complete About page content translations (mission, leadership, contact info, etc.)

### SEO Optimization
- **SEO Component**: Added react-helmet-async for dynamic meta tags
- **Open Graph Tags**: Implemented for Facebook and LinkedIn sharing
- **Twitter Card Tags**: Added for Twitter sharing (partial implementation)
- **Per-Page SEO**: Each page (Home, About) has unique title and description

### Accessibility Improvements
- **ARIA Labels**: Added to all interactive navigation buttons
- **Keyboard Navigation**: Enhanced focus styles for keyboard users
- **Focus Visible**: Global focus outline styles for WCAG 2.1 compliance
- **Semantic HTML**: Added role attributes to sections

### Performance Optimizations
- **Lazy Loading**: Images optimized with lazy loading attribute
- **Component Efficiency**: Reduced unnecessary re-renders

### Theme Updates
- **Dark Mode Removed**: User requested removal of dark mode implementation
- **Light Theme Only**: Application now uses light theme exclusively
- **Removed Components**: ThemeProvider and ThemeToggle components deleted

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful API with typed routes
- **Middleware**: Custom logging, JSON parsing, and error handling
- **Development**: Hot module replacement with Vite integration

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM
- **Connection**: Neon Database serverless PostgreSQL
- **Schema Management**: Drizzle Kit for migrations and schema management
- **In-Memory Fallback**: MemStorage class for development/testing without database

## Key Components

### Core Features
1. **TTS Demo System**: Google Cloud Text-to-Speech integration for Scripture audio generation
2. **Donation Platform**: Stripe-ready donation system with multiple amount tiers
3. **Volunteer Management**: Registration system for ministry volunteers
4. **Newsletter Subscription**: Email collection for community updates
5. **Multi-language Support**: Full UI translations in 12 languages (en, ko, es, fr, de, ja, zh, ar, hi, pt, ru, it) with TTS voices in 96 languages

### Database Schema
- **Users**: Basic authentication structure (prepared for future use)
- **Volunteers**: Contact information and interests tracking
- **Newsletter Subscribers**: Email subscription management
- **Donations**: Financial contribution tracking with Stripe integration

### UI Components
- **Navigation**: Fixed header with smooth scrolling navigation
- **Hero Section**: Landing area with call-to-action buttons
- **Features Showcase**: Card-based feature presentation
- **Interactive Demo**: Scripture selection with TTS playback
- **Forms**: Donation, volunteer, and newsletter subscription forms

## Data Flow

### Client-Server Communication
1. **API Requests**: Centralized through `apiRequest` utility with error handling
2. **Query Management**: TanStack Query handles caching, background updates, and loading states
3. **Form Submission**: React Hook Form + Zod validation before API calls
4. **Real-time Updates**: Toast notifications for user feedback

### TTS Integration Flow
1. User selects Scripture verse and voice language
2. Frontend sends request to `/api/tts/synthesize` endpoint
3. Server proxies request to Google Cloud TTS API
4. Audio response converted to playable blob URL
5. Audio automatically plays with loading/error states

### Data Persistence
1. Form submissions validated on client and server
2. Data stored in PostgreSQL via Drizzle ORM
3. Fallback to in-memory storage for development
4. Error handling with user-friendly messages

## External Dependencies

### Third-Party Services
- **Google Cloud TTS**: Scripture audio generation with 50+ language support
- **Stripe**: Payment processing for donations (integration ready)
- **Neon Database**: Serverless PostgreSQL hosting
- **Mailchimp/Google Forms**: Newsletter subscription management (planned)

### Key Libraries
- **UI**: Radix UI primitives, Lucide React icons, Embla Carousel
- **Validation**: Zod for runtime type checking and form validation
- **Database**: Drizzle ORM with PostgreSQL driver
- **Development**: tsx for TypeScript execution, esbuild for production builds

## Deployment Strategy

### Development Environment
- **Platform**: Replit-optimized development setup
- **Hot Reload**: Vite dev server with HMR support
- **Process Management**: tsx for TypeScript execution without compilation step
- **Environment Variables**: Google Cloud TTS API key, Database URL

### Production Build
- **Frontend**: Vite builds React app to static files
- **Backend**: esbuild bundles Express server as ESM module
- **Deployment**: Single command builds both frontend and backend
- **Hosting**: Prepared for Replit deployment or Firebase Hosting integration

### Configuration Management
- **Database**: Drizzle config with automatic SSL for production
- **Build Tools**: Separate development and production configurations
- **Asset Management**: Vite handles static assets with proper caching headers
- **Error Handling**: Development-specific error overlays and logging

The application follows a traditional full-stack architecture optimized for rapid development and easy deployment, with particular attention to the spiritual mission of connecting believers through Scripture memorization technology.