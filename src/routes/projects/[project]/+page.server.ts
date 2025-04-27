import { client } from '$lib/sanityClient';

export const prerender = true; // Enable SSG

export async function load() {
	const query = `*[_type == "project"] | order(_createdAt desc) {
    _id,
    coverImage,
    description,
    shortDescription,
    domain,
    stack,
    projectTitle,
    links,
    role,
    otherImages,
  }`;

	const projects = await client.fetch(query);

	return { projects };
}
