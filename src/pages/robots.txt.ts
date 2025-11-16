import type { APIRoute } from 'astro';
import { metaData } from '../lib/config';

export const GET: APIRoute = () => {
  return new Response(`
User-agent: *
Allow: /

Sitemap: ${new URL('sitemap-index.xml', metaData.baseUrl).href}
`.trim(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
