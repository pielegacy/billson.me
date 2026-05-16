import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { getRssString } from "@astrojs/rss";
import { siteConfig } from "../site.config.ts";

export const GET: APIRoute = async (context) => {
	const ramblings = await getCollection("ramblings");

	const publishedRamblings = ramblings
		.filter((post) => !post.data.draft)
		.sort(
			(a, b) =>
				b.data.publishedDate.valueOf() - a.data.publishedDate.valueOf(),
			);

	const rssItems = publishedRamblings.map((post) => {
		return {
			title: post.data.title,
			description: post.data.description,
			link: `/ramblings/${post.id}/`,
			pubDate: post.data.publishedDate,
			content: post.body,
		};
	});

	const rssString = await getRssString({
		title: `${siteConfig.name} - Ramblings`,
		description: "Fulfilling the Software Engineer requirement of having a blog.",
		site: context.site ?? siteConfig.url,
		items: rssItems,
		customData: [
			`<language>en-au</language>`,
			`<copyright>© ${new Date().getFullYear()} ${siteConfig.author.name}</copyright>`,
			`<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>`,
			`<generator>Astro v${context.generator}</generator>`,
		].join(""),
	});

	return new Response(rssString, {
		headers: {
			"Content-Type": "application/xml",
			"X-Content-Type-Options": "nosniff",
		},
	});
};
