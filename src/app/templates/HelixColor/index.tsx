'use client'
import { LayoutGroup } from 'framer-motion'
import { Wrapper } from '@/components/Wrapper'

import { SecIntro } from '@/components/SecIntro'

export const HelixColorWrapped = () => {
	const contentList = [
		<SecIntro.Root key='intro'>
			<SecIntro.Title>Helix Color</SecIntro.Title>
			<SecIntro.Subtitle>
				Immerse yourself in our extensive palette of
				carefully curated colors. From the elegance of
				minimalism to the vibrancy of maximalism, we offer a
				variety of options to express your creativity and
				convey the right message to your audience.
			</SecIntro.Subtitle>
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
