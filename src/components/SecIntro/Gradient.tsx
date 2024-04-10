import React, { FC, HTMLAttributes } from 'react'
import styles from './Gradient.module.scss'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export const Gradient = () => {
	const pathname = usePathname()
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.32 }}
			className={`${styles.gradient} width-100 ps-absolute top-0 left-0`}>
			<div className='container-md ps-relative'>
				<svg
					width='595'
					height='265'
					viewBox='0 0 595 265'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className={`${styles.element} ${
						pathname === '/helixcss'
							? styles.helixCSS
							: pathname === '/helixcolor'
							? styles.helixColor
							: null
					}`}>
					<g filter='url(#filter0_f_377_8159)'>
						<path
							d='M117 -1H356.23C356.23 -1 285.051 18.8242 272.415 52.9892C259.78 87.1542 467 135.238 467 135.238C467 135.238 240.406 143.674 183.546 105.713C129.705 69.7667 117 -1 117 -1Z'
							fill='currentColor'
						/>
					</g>
					<defs>
						<filter
							id='filter0_f_377_8159'
							x='-11'
							y='-129'
							width='606'
							height='393.037'
							filterUnits='userSpaceOnUse'
							color-interpolation-filters='sRGB'>
							<feFlood
								flood-opacity='0'
								result='BackgroundImageFix'
							/>
							<feBlend
								mode='normal'
								in='SourceGraphic'
								in2='BackgroundImageFix'
								result='shape'
							/>
							<feGaussianBlur
								stdDeviation='64'
								result='effect1_foregroundBlur_377_8159'
							/>
						</filter>
					</defs>
				</svg>
			</div>
		</motion.div>
	)
}
