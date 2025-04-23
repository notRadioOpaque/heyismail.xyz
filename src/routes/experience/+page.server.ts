import { client } from '$lib/sanityClient';

export const prerender = true; // Enable SSG

export async function load() {
	const query = `*[_type == "experience"] | order(_createdAt desc) {
    _id,
    company,
    position,
    startDate,
    endDate,
    summary,
    tech
  }`;

	const experiences = await client.fetch(query);

	return { experiences };
}
