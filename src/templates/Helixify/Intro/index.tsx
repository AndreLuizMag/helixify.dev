import React from 'react'
import styles from './styles.module.scss'

import { motion } from 'framer-motion'

export const Intro = () => {
	return (
		<section
			className={`${styles.intro} width-100 ps-relative ds-flex-center pt-16 bg-primary`}>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.32 }}
				className={`${styles.gradient} ps-absolute inset-0`}
			/>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.48 }}
				className={`${styles.texture} ps-absolute inset-0`}
			/>
			<div className='container-sm '>
				<div className='row'>
					<div className='col ds-flex-start flow-col-nw gap-xl'>
						<h1
							className={`${styles.title} color-helixify`}>
							A platform open-source for everyone
						</h1>
						<p className='color-tertiary'>
							Helixify is a centralized platform that
							provides open-source solutions for web
							developers, simplifying the development
							process by offering essential tools all in one
							place.
						</p>
					</div>
					<div className='col is-2'></div>
				</div>
			</div>
		</section>
	)
}
