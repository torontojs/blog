// Function to remove any unwanted characters or spacing for the route, all will be the same from now on with this function! slugify's url to make it reusable!

export function slugify(text: unknown) {
	return text?.toString()
		.toLowerCase()
		.replace(/\s+/gu, '-')
		.replace(/[^\w-]+/gu, '')
		.replace(/--+/gu, '-')
		.replace(/^-+/u, '')
		.replace(/-+$/u, '');
}

export function formatDate(date: string) {
	// If timeZone prop isnt declared then when the blogs are posted, the date will always be from the date before
	return new Date(date).toLocaleDateString('en-US', {
		timeZone: 'UTC'
	});
}
