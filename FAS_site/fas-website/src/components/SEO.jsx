import { useEffect } from 'react';

const SITE_URL = process.env.REACT_APP_SITE_URL || 'https://forpostaeroservice.kz';
const DEFAULT_IMAGE = `${SITE_URL}/ForpostLogo.jpg`;

/**
 * SEO component: sets document title, meta description, Open Graph and Twitter Card tags.
 * Use on every page with page-specific title and description.
 */
export default function SEO({
  title,
  description,
  image = DEFAULT_IMAGE,
  path = '',
  noindex = false,
}) {
  const url = path ? `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}` : SITE_URL;
  const fullTitle = title ? `${title} | Forpost Aero Service` : 'Forpost Aero Service — UAV & Aviation Solutions, Kazakhstan';

  useEffect(() => {
    const prevTitle = document.title;
    document.title = fullTitle;

    const setMeta = (name, content, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content || '');
    };

    setMeta('description', description);
    setMeta('og:title', fullTitle, true);
    setMeta('og:description', description, true);
    setMeta('og:image', image, true);
    setMeta('og:url', url, true);
    setMeta('og:type', 'website', true);
    setMeta('og:site_name', 'Forpost Aero Service', true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
    setMeta('twitter:image', image);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    setMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow');

    return () => {
      document.title = prevTitle;
    };
  }, [fullTitle, description, image, url, noindex]);

  return null;
}
