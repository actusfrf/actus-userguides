import {themes as prismThemes} from "prism-react-renderer";
import type {Config} from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
	title: "ACTUS Documentation",
	tagline: "Documentation and guides for the ACTUS standard",
	favicon: "img/favicon.ico",

	url: "https://your-docusaurus-site.example.com",
	baseUrl: "/",

	organizationName: "actusfrf",
	projectName: "actus-documentation",

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Client modules for navigation fixes
	clientModules: [
		"./src/client-modules/stableNavigation.js",
	],

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
					editUrl:
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				blog: {
					showReadingTime: true,
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
		image: "img/docusaurus-social-card.jpg",
		navbar: {
			logo: {
				alt: "Actus Logo",
				src: "img/ActusLogoRGB.jpg",
				href: "/", // clicking logo goes to home
			},
			items: [
				{
					href: "https://www.actusfrf.org/dictionary",
					position: "left",
					label: "Dictionary",
				},
				{
					href: "https://www.actusfrf.org/taxonomy",
					label: "Taxonomy",
					position: "left",
				},
				{
					href: "https://github.com/actusfrf",
					label: "GitHub",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
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
