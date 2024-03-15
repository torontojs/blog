import { defineCollection } from 'astro:content';

import { authorsSchema } from '../schemas/authors.ts';
import { blogSchema } from '../schemas/blog.ts';

const blogCollection = defineCollection({
	type: 'content',
	schema: blogSchema
});

const authorsCollection = defineCollection({
	type: 'content',
	schema: authorsSchema
});

export const collections = {
	blog: blogCollection,
	authors: authorsCollection
};
