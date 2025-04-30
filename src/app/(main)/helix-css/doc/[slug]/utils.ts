export type RoutesType = {
	id: number
	path: string
	title: string
	metaDescription: string
}

export const routes: RoutesType[] = [
	{
		id: 0,
		path: 'getting-started',
		title: 'Getting Started',
		metaDescription: 'Metadata getting started',
	},
	{
		id: 1,
		path: 'installation',
		title: 'Installation',
		metaDescription: 'Metadata installation',
	},
	{
		id: 2,
		path: 'variables',
		title: 'Variables',
		metaDescription: 'Metadata variables',
	},
]
