import { type SchemaContext, z as zod } from 'astro:content';

export const authorsSchema = ({ image }: SchemaContext) =>
	zod.object({
		name: zod.string().describe("The author's name."),
		pronouns: zod.string().optional().describe("The author's pronouns."),
		avatar: image().describe('The avatar image to use when displaying cards.'),
		avatarAlt: zod.string().describe('The avatar image alt text.'),
		email: zod.string().email().optional().describe("The author's email, if they want to share."),
		website: zod.string().url().optional().describe("The author's site, if they want to share."),
		socialMedia: zod.record(zod.string(), zod.string().url()).optional().describe(
			'The author social media links, if they want to share. Formatted as an object where the key is the name and the value the url.'
		)
	});
