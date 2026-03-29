// @ts-check
/**
 * Site configuration for SEO and site-wide metadata
 */
export const siteConfig = {
	/**
	 * Site URL - used for canonical URLs, sitemap, and Open Graph
	 */
	url: "https://billson.me",

	/**
	 * Site name - used in Open Graph and other meta tags
	 */
	name: "Alex Billson",

	/**
	 * Site title template
	 */
	title: "Alex Billson - Technical Team Lead & Full Stack Developer",

	/**
	 * Site description - primary meta description
	 */
	description:
		"Technical Team Lead based in Melbourne specialising in Full Stack Development (.NET, TypeScript, AI, Solutions Architecture). Experienced in leading teams of various sizes, public speaking, and building people-oriented engineering cultures.",

	/**
	 * Author information
	 */
	author: {
		name: "Alex Billson",
		email: "alex_billson@outlook.com",
	},

	/**
	 * Location information
	 */
	location: {
		city: "Melbourne",
		country: "Australia",
	},

	/**
	 * Job title
	 */
	jobTitle: "Technical Team Lead",

	/**
	 * Professional expertise areas
	 */
	expertise: [
		"Full Stack Development",
		".NET",
		"TypeScript",
		"AI",
		"Databases",
		"Team Leadership",
		"Public Speaking",
	],

	/**
	 * Technical skills
	 */
	skills: [
		".NET",
		"TypeScript",
		"JavaScript",
		"C#",
		"AI",
		"Machine Learning",
		"Databases",
		"SQL",
		"PostgreSQL",
		"Team Leadership",
		"Engineering Management",
		"Public Speaking",
		"Technical Architecture",
		"Agile",
		"Scrum",
	],

	/**
	 * Social profiles
	 */
	social: {
		linkedin: "https://www.linkedin.com/in/alex-billson-69a0ba13b",
		github: "https://github.com/pielegacy",
		email: "mailto:alex_billson@outlook.com",
	},

	/**
	 * Default Open Graph image (should be at least 1200x630)
	 */
	ogImage: "/og-image.jpg",

	/**
	 * Twitter handle (without @)
	 */
	twitterHandle: "",

	/**
	 * Site language
	 */
	lang: "en",

	/**
	 * Site locale for Open Graph
	 */
	locale: "en_AU",
};

/**
 * Type exports for TypeScript consumers
 */
export type SiteConfig = typeof siteConfig;
