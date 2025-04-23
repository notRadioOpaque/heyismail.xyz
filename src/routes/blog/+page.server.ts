import { client } from '$lib/sanityClient';

export const prerender = true; // Enable SSG

export async function load() {
	const query = `*[_type == "blogPost"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    coverImage,
    excerpt,
    body
  }`;

	const blogPosts = await client.fetch(query);

	return { blogPosts };
}
