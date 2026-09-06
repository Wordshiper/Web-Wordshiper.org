import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/hooks/use-language';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function SEO({ 
  title = 'Wordshiper - Bible Memorization Platform',
  description = 'Memorize Scripture. 15 Minutes a Day. A Life Transformed! Experience daily transformation with AI-powered Bible memorization in 25 languages.',
  image = 'https://www.wordshiper.org/og-image.png',
  url = 'https://www.wordshiper.org',
  type = 'website'
}: SEOProps) {
  const { currentLanguage } = useLanguage();
  
  const fullTitle = title.includes('Wordshiper') ? title : `${title} | Wordshiper`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang={currentLanguage} />
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Wordshiper" />
      <meta property="og:locale" content={currentLanguage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content={currentLanguage} />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Wordshiper Ministry" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
}
