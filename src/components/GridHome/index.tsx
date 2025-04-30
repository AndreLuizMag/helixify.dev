import React from 'react'
import './styles.css'
import { type ContentType, content } from '@util/callToActionHome'
import { CardHome } from '../CardHome'

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
