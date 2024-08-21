import {themes as prismThemes} from "prism-react-renderer";
import type {Config} from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
	title: "ACTUS Documentation",
	tagline: "Documentation and guides for the ACTUS standard",
	favicon: "img/favicon.ico",

	// Set the production url of your site here
	url: "https://your-docusaurus-site.example.com",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "actusfrf", // Usually your GitHub org/user name.
	projectName: "actus-documentation", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
					sidebarCollapsible: false,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		colorMode: {
			defaultMode: "light",
			disableSwitch: true,
			respectPrefersColorScheme: false,
		},
		// Replace with your project's social card
		image: "img/docusaurus-social-card.jpg",
		navbar: {
			// title: "My Site",
			logo: {
				alt: "Actus Logo",
				src: "img/logo.svg",
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "tutorialSidebar",
					position: "left",
					label: "Guides",
				},
				// {to: "/blog", label: "Blog", position: "left"},
				// {
				// 	href: "https://github.com/facebook/docusaurus",
				// 	label: "GitHub",
				// 	position: "right",
				// },
			],
		},
		footer: {
			style: "dark",
			links: [
				// {
				// 	title: "Docs",
				// 	items: [
				// 		{
				// 			label: "Tutorial",
				// 			to: "/docs/intro",
				// 		},
				// 	],
				// },
				{
					title: "Community",
					items: [
						{
							label: "X.com",
							href: "https://x.com/ActusResearch",
						},
						{
							label: "GitHub",
							href: "https://github.com/actusfrf",
						},
						{
							label: "LinkedIn",
							href: "https://www.linkedin.com/company/actus-research",
						},
					],
				},
				// {
				// 	title: "More",
				// 	items: [
				// 		{
				// 			label: "Blog",
				// 			to: "/blog",
				// 		},
				// 		{
				// 			label: "GitHub",
				// 			href: "https://github.com/facebook/docusaurus",
				// 		},
				// 	],
				// },
			],
			copyright: `Copyright © ${new Date().getFullYear()} Financial Research Foundation. Built with Docusaurus.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
