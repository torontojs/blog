import type { APIRoute, MarkdownInstance } from 'astro';

import rss, { type RSSFeedItem } from '@astrojs/rss';
import { getImage } from 'astro:assets';

import { listAllPosts } from '../utils/post';

import defaultImage from '../assets/icons/logo.png';

export const GET: APIRoute = async (context) => {
	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	const ONE_WEEK_IN_MINUTES = 60 * 24 * 7;

	const blogImage = await getImage({ src: defaultImage, format: 'png', width: 512, height: 512 });

	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const BLOG_URL = new URL(context.site!).href;

	const allPosts = await listAllPosts();

	// INFO: hack to parse markdown
	const postFiles = import.meta.glob<MarkdownInstance<{}>>('../content/blog/**/*.md', { eager: true });

	return rss({
		title: 'TorontoJS Blog',
		description: 'The blog is about the TorontoJS community and news about JavaScript, web development, and programming in the Greater Toronto Area.',
		site: BLOG_URL,
		xmlns: {
			atom: 'http://www.w3.org/2005/Atom',
			media: 'http://search.yahoo.com/mrss/',
			dc: 'http://purl.org/dc/elements/1.1/',
			content: 'http://purl.org/rss/1.0/modules/content/'
		},
		customData: `
			<language>en-us</language>
			<atom:link href="${new URL(blogImage.src, BLOG_URL).toString()}" rel="self" type="application/rss+xml" />
			<image>
				<url>${new URL(blogImage.src, BLOG_URL).toString()}</url>
				<title>TorontoJS Blog</title>
				<description>Logo for TorontoJS, consisting of a red square with the letters &quot;JS&quot; in black on the left, and a sillouette of the CN Tower seen from the ground up on the right.</description>
				<link>${BLOG_URL}</link>
				<width>142</width>
				<height>116</height>
			</image>
			<pubDate>${new Date(allPosts[0]?.data.createdAt ?? new Date()).toUTCString()}</pubDate>
			<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
			<ttl>${ONE_WEEK_IN_MINUTES}</ttl>
			<generator>Astro</generator>
			<dc:creator>TorontoJS Community</dc:creator>
		`,
		items: await Promise.all(allPosts.map(async (post) => {
			let image;

			if (post.data.image) {
				image = await getImage({ src: post.data.image, format: 'png' });
			}

			// INFO: hack to parse markdown
			const [, postMarkdown] = Object.entries(postFiles).find(([filePath]) => filePath.includes(post.url)) ?? [];

			const content = (postMarkdown?.compiledContent() ?? '') || '&nbsp;';

			const item: RSSFeedItem = {
				title: post.data.title,
				description: post.data.summary,
				pubDate: post.data.createdAt,
				categories: post.data.tags,
				link: `${BLOG_URL}${post.url}`,
				content,
				...(image && {
					enclosure: {
						url: new URL(image.src, BLOG_URL).toString(),
						type: 'image/png',
						length: 0
					},
					customData: `
						<media:content
							url="${new URL(image.src, BLOG_URL).toString()}"
							type="image/png"
							medium="image"
							height="${image.options.height ?? '512'}"
							width="${image.options.width ?? '512'}"
						/>
						<media:description type="plain">${post.data.imageAlt ?? ''}</media:description>
					`
				})
			};

			return item;
		}))
	});
};
