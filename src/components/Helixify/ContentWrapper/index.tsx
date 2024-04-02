'use client'
import { ReactNode, useEffect, useRef } from 'react'
import {
	LayoutGroup,
	motion,
	useAnimation,
	useInView,
} from 'framer-motion'

import { appFadeInUp } from '@/utils/framerMotion'

import { SecIntro } from '@/components/SecIntro'

const Wrapper = ({ content }: { content: ReactNode }) => {
	const control = useAnimation()
	const ref = useRef(null)
	const inView = useInView(ref)

	useEffect(() => {
		if (inView) {
			control.start('visible')
		} else {
			control.start('hidden')
		}
	}, [control, inView])

	return (
		<motion.div
			ref={ref}
			variants={appFadeInUp}
			initial='hidden'
			animate={control}
			exit='exit'
			className='article-wrapper'>
			{content}
		</motion.div>
	)
}

export const ContentWrapper = () => {
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
