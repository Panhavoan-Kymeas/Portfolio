import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { withBase } from '../utils/paths';

export async function GET(context) {
  const posts = (await getCollection('posts'))
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: 'Kymeas Panhavoan — Writing',
    description: 'Notes on software, tools, and the process of learning in public.',
    site: new URL(import.meta.env.BASE_URL, context.site).toString(),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      categories: post.data.tags,
      link: withBase(`/writing/${post.id}/`),
    })),
  });
}
