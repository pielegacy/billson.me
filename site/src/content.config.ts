import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const ramblingsCollection = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/ramblings" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			publishedDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			tags: z.array(z.string()).optional(),
			draft: z.boolean().default(false),
			heroImage: image().optional(),
		}),
});

export const collections = {
	ramblings: ramblingsCollection,
};
