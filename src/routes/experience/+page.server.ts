import { client } from '$lib/sanityClient';

export const prerender = true; // Enable SSG

export async function load() {
	const query = `*[_type == "experience"] | order(_createdAt desc) {
    company,
    role,
    startDate,
    endDate,
    description,
    tech,
    icon
  }`;

	const experiences = await client.fetch(query);

	return { experiences };
}
