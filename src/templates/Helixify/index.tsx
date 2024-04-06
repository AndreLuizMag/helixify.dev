'use client'
import { LayoutGroup } from 'framer-motion'
import { Wrapper } from '@/components/Wrapper'

import { SecIntro } from '@/components/SecIntro'

export const HelixifyWrapped = () => {
	const contentList = [
		<SecIntro.Root key='intro'>
			<SecIntro.Title>Welcome to Helixify</SecIntro.Title>
			<SecIntro.Subtitle>
				Start your projects with ease and efficiency using
				the powerful open-source tools provided by Helixify.
				Here, you&apos;ll find the foundation you need to
				bring your ideas to life quickly and optimally.
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
