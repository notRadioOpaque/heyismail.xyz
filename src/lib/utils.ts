// util fns

// Format a date (useful for blog posts, projects, etc.)
export function formatDate(dateStr: string, locale = 'en-US') {
	return new Date(dateStr).toLocaleDateString(locale, {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}

// Copy text to clipboard (useful for copying emails, links, etc.)
export async function copyToClipboard(text: string) {
	try {
		await navigator.clipboard.writeText(text);
		return true; // Success
	} catch (err) {
		console.error('Failed to copy:', err);
		return false; // Failed
	}
}

// Get a random item from an array (useful for random testimonials, quotes, etc.)
export function getRandomItem<T>(items: T[]): T {
	return items[Math.floor(Math.random() * items.length)];
}

// Truncate text (useful for displaying previews of blog posts or project descriptions)
export function truncateText(text: string, length: number) {
	return text.length > length ? text.slice(0, length) + '...' : text;
}

// Generate a slug from a string (useful for project URLs or blog post slugs)
export function generateSlug(text: string) {
	return text
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[^\w-]+/g, '');
}

// Open a new tab with a given URL (useful for external links)
export function openInNewTab(url: string) {
	window.open(url, '_blank', 'noopener,noreferrer');
}

// Check if a URL is external (useful for distinguishing between internal and external links)
export function isExternalUrl(url: string) {
	return /^(https?:|mailto:|tel:)/.test(url);
}

export function getPlaceholder(url: string): string {
	if (typeof url !== 'string' || url.trim() === '') {
		throw new Error('getPlaceholder expects a non-empty string URL.');
	}

	const uploadKeyword = '/upload/';

	if (!url.includes(uploadKeyword)) {
		console.warn('URL does not appear to be a Cloudinary URL. Returning original URL.');
		return url;
	}

	return url.replace(uploadKeyword, `${uploadKeyword}w_20,e_blur:500,q_10/`);
}
