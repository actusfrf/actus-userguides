import type {SidebarsConfig} from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
	// Explicit sidebar structure to ensure proper content display with headings
	tutorialSidebar: [
		'intro',
		{
			type: 'category',
			label: 'Introduction to ACTUS',
			collapsed: false,
			link: {
				type: 'generated-index',
				description: 'The ACTUS Framework for Financial Contracts.'
			},
			items: [
				'Introduction/Overview',
				'Introduction/core_activities',
				'Introduction/Understanding-Financial-Contracts-and-Systems',
				'Introduction/Model-for-analytics',
				'Introduction/Benefits of ACTUS',
			],
		},
		'quickstart',
		{
			type: 'category',
			label: 'Quickstart Extension for ACTUS Risk Factors',
			collapsed: false,
			items: [
				{type: 'autogenerated', dirName: 'RiskFactors'},
			],
		},
		{
			type: 'category',
			label: 'Demos and Guides',
			collapsed: false,
			items: [
				{type: 'autogenerated', dirName: 'actus-demo'},
				{type: 'autogenerated', dirName: 'dadfir3-demo'},
			],
		},
		'competition',
		'license',
	],

	// Backup: Keep auto-generation as fallback if needed
	// autoSidebar: [{type: "autogenerated", dirName: "."}],
};

export default sidebars;
