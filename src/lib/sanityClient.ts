import { createClient } from '@sanity/client';

export const client = createClient({
	projectId: 'bd9pdyzz',
	dataset: 'production',
	apiVersion: '2023-01-01',
	useCdn: true
});
