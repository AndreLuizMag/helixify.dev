'use client';
import React, { use } from 'react';
import './styles.scss';
import {
	AnimatePresence,
	motion,
	type Transition,
	useAnimation,
	type Variants,
} from 'framer-motion';
import { useScrollDirection } from '@/hook/useScrollDirection';
import usePageLoaded from '@/hook/usePageLoad';

// const fadeInHeader = {
// 	initial: { opacity: 0, y: -64 },
// 	animate: {
// 		opacity: 1,
// 		y: 0,
// 		transition: {
// 			type: 'tween',
// 			duration: 0.2,
// 			bounce: 0.4,
// 		},
// 	},
// 	exit: { opacity: 0, y: -64 },
// };

const cubicBezier = [0.6, 0.01, -0.05, 0.95];

export const fadeInHeader: Variants = {
	hidden: { y: -64 },
	visible: { y: 0 },
};

export const fadeInHeaderTransition: Transition = {
	type: 'spring',
	duration: 0.4,
	bounce: 0.4,
};

export const Header = () => {
	const control = useAnimation();
	const {
		isScrollingTop,
		isScrollingBottom,
		isScrollingDown,
		isScrollingUp,
		scrollY,
	} = useScrollDirection();

	return (
		<motion.header
			initial="hidden"
			animate="visible"
			variants={fadeInHeader}
			transition={fadeInHeaderTransition}
			className="header width-100 ps-fixed z-index-8">
			<div className="container-md">
				<nav className="ds-flex flow-row-nw justify-between align-center bg-primary">
					<div>Item 1</div>
					<div>Item 2</div>
					<div>Item 3</div>
					<div>
						<button type="button">Click</button>
					</div>
				</nav>
			</div>
		</motion.header>
	);
};
