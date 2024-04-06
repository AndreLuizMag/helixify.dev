import React from 'react'
import styles from './styles.module.scss'

export const Intro = () => {
	return (
		<section
			className={`${styles.intro} width-100 ds-flex-center pb-16`}>
			<div className='container-sm '>
				<div className='row'>
					<div className='col ds-flex-start flow-col-nw gap-md'>
						<h1
							className={`${styles.title} color-helixify`}>
							A platform open-source for everyone
						</h1>
						<p className='font-tertiary'>
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
