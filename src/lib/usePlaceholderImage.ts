import { getPlaceholder } from './utils';

export function usePlaceholderImage(url: string) {
	if (typeof url !== 'string' || url.trim() === '') {
		throw new Error('usePlaceholderImage expects a non-empty string URL.');
	}

	return {
		src: url,
		placeholder: getPlaceholder(url)
	};
}
