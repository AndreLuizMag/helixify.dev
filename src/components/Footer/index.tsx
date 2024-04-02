import Link from 'next/link'
import React from 'react'

export const Footer = () => {
	return (
		<footer className='width-100 p-block-4 theme-secondary'>
			<div className='container-md'>
				Made by{' '}
				<Link
					href='https://github.com/AndreLuizMag'
					target='_blank'
					rel='noopener noreferrer'
					className='all-unset cursor-pointer'>
					@AndreLuizMag
				</Link>
			</div>
		</footer>
	)
}
