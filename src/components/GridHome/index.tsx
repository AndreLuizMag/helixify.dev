import { Brand } from '@component/Brand'
import React from 'react'
import './styles.css'
import { CardHome } from '../CardHome'

type ContentType = {
	id: number
	href: string
	highlightColor: string
	title: string
	description: string
	area: string
}

const content: ContentType[] = [
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

export const GridHome = () => {
	return (
		<div className="grid-home ds-grid gap-10 md:gap-6">
			{content.map((e: ContentType) => {
				const isLink = e.href !== ''
				return (
					<div
						key={e.id}
						className="container-card"
						style={{ gridArea: e.area }}
					>
						<CardHome.Root
							as={isLink ? 'a' : 'div'}
							{...(isLink ? { href: e.href } : {})}
							elementId={e.id}
							highlightColor={e.highlightColor}
							className={`${e.id === 1 && 'highlight'}`}
						>
							<CardHome.Content
								as={e.id === 1 ? 'h2' : e.id === 2 ? 'h3' : 'span'}
								title={e.title}
							>
								{e.description}
							</CardHome.Content>
						</CardHome.Root>
					</div>
				)
			})}
		</div>
	)
}
