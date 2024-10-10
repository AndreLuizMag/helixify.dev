'use client'
import { LayoutGroup } from 'framer-motion'
import { Wrapper } from '@/components/Wrapper'

import { Intro } from './Intro'
import { Overall } from './Overall'

export const HelixifyWrapped = () => {
	const contentList = [
		<Intro key='intro' />,
		<Overall key='overall' />,
		// <Intro key='intro2' />,
	]

	return (
		<LayoutGroup>
			{contentList.map((content, index) => (
				<Wrapper key={index} content={content} />
			))}
		</LayoutGroup>
	)
}
