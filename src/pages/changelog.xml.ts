import type { APIRoute } from 'astro';

import rss, { type RSSFeedItem } from '@astrojs/rss';
import { getImage } from 'astro:assets';
import { getCollection } from 'astro:content';

import { parseMarkdown } from '../utils/markdown';

import defaultImage from '../assets/icons/logo.png';

export const GET: APIRoute = async (context) => {
	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	const ONE_WEEK_IN_MINUTES = 60 * 24 * 7;

	const siteImage = await getImage({ src: defaultImage, format: 'png', width: 512, height: 512 });

	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const BLOG_URL = new URL(context.site!).href;

	return rss({
		title: 'Toronto JS Blog Changelog',
		description: 'Changelog (Version History) for Toronto JS Blog, containing all recent changes.',
		site: BLOG_URL,
		items: await Promise.all((await getCollection('changelog')).map(async (changelog) => {
			const versionNumber = changelog.id.replace('.md', '');
			const { versionName } = changelog.data;
			const content = await parseMarkdown(changelog.body);

			const item: RSSFeedItem = {
				// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
				title: `${versionNumber}${versionName ? ` (${versionName})` : ''}`,
				description: content,
				content,
				pubDate: changelog.data.date,
				link: new URL(`changelog.xml#${versionNumber}`, BLOG_URL).toString()
			};

			return item;
		})),
		customData: `
		<language>en-us</language>
		<image>
			<url>${new URL(siteImage.src, BLOG_URL).toString()}</url>
			<title>Toronto JS Blog Changelog</title>
			<description>Logo for Toronto JS, consisting of a red square with the letters &quot;JS&quot; in black on the left, and a sillouette of the CN Tower seen from the ground up on the right.</description>
			<link>${BLOG_URL}changelog.xml</link>
			<width>142</width>
			<height>116</height>
		</image>
		<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
		<ttl>${ONE_WEEK_IN_MINUTES}</ttl>
	`
	});
};
