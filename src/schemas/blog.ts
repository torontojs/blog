import { type SchemaContext, z as zod } from 'astro:content';

export const blogSchema = ({ image }: SchemaContext) => zod.object({
	title: zod.string().describe('The post title that will be displayed as the top of the post page or as the heading on lists.'),
	summary: zod.string().describe('A summary for the post that will show in list pages. Should be a short paragraph on what the post is about. Accepts markdown.'),

	createdAt: zod.date().describe('The post\'s creation date. As a parseable date string, without quotes. Examples: "2024-01-01", "2024-01-01 00:00:00", "2024-01-01T00:00:00-04:00", "2024-01-01T00:00:00Z".'),
	updatedAt: zod.date().optional().describe('The post\'s last update date. As a parseable date string, without quotes. Examples: "2024-01-01", "2024-01-01 00:00:00", "2024-01-01T00:00:00-04:00", "2024-01-01T00:00:00Z".'),

	author: zod.string().describe('The slug for the author of this post from the "authors" collection.'),

	draft: zod.boolean().optional().describe('Whether the post is a draft or not. Draft posts will not be added to the list of posts.'),

	image: image().optional().describe('Post\'s Main "hero" image path, relative to the post markdown file.'),
	imageAlt: zod.string().optional().describe('Main image alt text.'),

	tags: zod.array(zod.string()).optional().describe('A list of simple strings to use as tags for this post. May contain spaces.'),
	relatedPosts: zod.array(zod.string()).optional().describe('Slugs for other posts related to this one.'),

	updates: zod.array(zod.object({
		date: zod.date().describe('The date of the update. As a parseable date string, without quotes. Examples: "2024-01-01", "2024-01-01 00:00:00", "2024-01-01T00:00:00-04:00", "2024-01-01T00:00:00Z".'),
		changes: zod.string().describe('A summary of the changes in this update.')
	})).optional().describe('The list of updates this post had. It is a list of objects with the keys "date" and "changes".')
});
