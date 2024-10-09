import type { ImageMetadata } from 'astro';
import { getImage } from 'astro:assets';
import { type CollectionEntry, getCollection, getEntry } from 'astro:content';

type AuthorEntry = Omit<CollectionEntry<'authors'>, 'data'> & { data: Omit<CollectionEntry<'authors'>['data'], 'avatar'>, avatar: ImageMetadata };

async function fetchAuthorAvatar(avatar?: ImageMetadata | string) {
	if (typeof avatar === 'string') {
		if (avatar?.startsWith('./')) {
			const avatarFileName = avatar.replace('./', '');
			const [, { default: avatarFile }] = Object.entries(import.meta.glob<{ default: ImageMetadata }>('../content/authors/assets/*.*', { eager: true })).find(([originalPath]) => originalPath.includes(avatarFileName)) ?? [undefined, {}];

			return avatarFile;
		}

		return (await getImage({ src: avatar, inferSize: true })).options as ImageMetadata;
	}

	return avatar;
}

export async function listAllAuthors() {
	const authorEntries = await getCollection('authors');
	const authors = await Promise.all(authorEntries
		.sort((first, second) => first.data.name.localeCompare(second.data.name, 'en-US', { usage: 'sort' }))
		.map(async (author) => {
			if (author?.data.avatar) {
				// @ts-expect-error
				author.data.avatar = await fetchAuthorAvatar(author.data.avatar);
			}

			return author as unknown as AuthorEntry;
		}));

	return authors;
}

export async function getAuthor(authorId: string) {
	const author = await getEntry('authors', authorId);

	if (author?.data.avatar) {
		// @ts-expect-error
		author.data.avatar = await fetchAuthorAvatar(author.data.avatar);
	}

	return author as unknown as AuthorEntry;
}
