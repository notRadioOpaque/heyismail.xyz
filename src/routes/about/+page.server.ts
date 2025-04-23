import { client } from '$lib/sanityClient';

export const prerender = true; // Enable SSG

export async function load() {
	const query = `*[_type == "about"] | order(_createdAt desc) {
    _id,
    image,
  }`;

	const about = await client.fetch(query);

	return { about };
}
