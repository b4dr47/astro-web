import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { metaData } from '../lib/config';

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: metaData.title,
    description: metaData.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.publishedAt),
      description: post.data.summary,
      link: `/blog/${post.slug}/`,
    })),
  });
}
