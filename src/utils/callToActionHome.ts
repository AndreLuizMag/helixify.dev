export type ContentType = {
	id: number
	href: string
	highlightColor: string
	title: string
	description: string
	area: string
}

export const content: ContentType[] = [
	{
		id: 1,
		href: 'https://github.com/Helixify/helix-css/tree/main',
		highlightColor: 'blue',
		title: 'A simple and powerful CSS framework',
		description:
			'Helix-css is the perfect foundation for your project, offering essential utilities for all layouts and needs.',
		area: 'one',
	},
	{
		id: 2,
		href: 'https://github.com/Helixify/helix-color',
		highlightColor: 'green',
		title: 'A color system made for consistency',
		description: '',
		area: 'two',
	},
	{
		id: 3,
		href: '',
		highlightColor: 'orange',
		title: 'Open-source tools made for your workflow',
		description: '',
		area: 'three',
	},
]
