'use client';
import { type ReactNode, useEffect, useRef } from 'react';
import { LayoutGroup, motion, useAnimation, useInView } from 'framer-motion';

import { appFadeInUp } from '@/lib/framer-motion/framerMotion';

export const Wrapper = ({
	content,
}: {
	content: ReactNode;
}) => {
	const control = useAnimation();
	const ref = useRef(null);
	const inView = useInView(ref);

	useEffect(() => {
		if (inView) {
			control.start('visible');
		} else {
			control.start('hidden');
		}
	}, [control, inView]);

	return (
		<motion.div
			ref={ref}
			variants={appFadeInUp}
			initial="hidden"
			animate={control}
			exit="exit"
			className="article-wrapper">
			{content}
		</motion.div>
	);
};
