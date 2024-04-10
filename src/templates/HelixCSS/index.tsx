'use client'
import { LayoutGroup } from 'framer-motion'
import { Wrapper } from '@/components/Wrapper'

import { SecIntro } from '@/components/SecIntro'

export const HelixCSSWrapped = () => {
	const contentList = [
		<SecIntro.Root key='intro'>
			<SecIntro.Group>
				<SecIntro.Title>Helix CSS</SecIntro.Title>
				<SecIntro.Subtitle>
					Explore our robust CSS framework, designed to
					streamline front-end development without
					compromising flexibility or performance. With just
					a few lines of code, you can build responsive and
					visually stunning interfaces that adapt to any
					device.
				</SecIntro.Subtitle>
			</SecIntro.Group>
		</SecIntro.Root>,
	]

	return (
		<LayoutGroup>
			{contentList.map((content, index) => (
				<Wrapper key={index} content={content} />
			))}
		</LayoutGroup>
	)
}
