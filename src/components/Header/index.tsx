import Link from 'next/link'
import React from 'react'
import styles from './Styles.module.scss'
import { Brand } from '../Brand'

export const Header = () => {
	return (
		<header>
			<div className='container-md'>
				<nav
					className={`${styles.nav} p-block-4 p-inline-6 ds-flex flow-row-nw justify-between align-center radius-md theme-primary`}>
					<div className='flex-bgs ds-flex flow-row-nw justify-start align-center'>
						<Link
							href='/'
							className='all-unset cursor-pointer'>
							<Brand.Helixify size={20} />
						</Link>
					</div>

					<ul className='p-0 list-style-none ds-inline-flex-center font-tertiary'>
						<li>
							<Link
								href='/'
								className='border-style-none p-block-4 p-inline-6 text-decoration-none font-tertiary'>
								Helixify
							</Link>
						</li>
						<li>
							<Link
								href='/helixcss'
								className='border-style-none p-block-4 p-inline-6 text-decoration-none font-tertiary'>
								HelixCSS
							</Link>
						</li>
						<li>
							<Link
								href='/helixcolor'
								className='border-style-none p-block-4 p-inline-6 text-decoration-none font-tertiary'>
								HelixColor
							</Link>
						</li>
					</ul>

					<div className='flex-bgs ds-flex flow-row-nw justify-end align-center'>
						<Link
							href='https://github.com/Helixify'
							target='_blank'
							rel='noopener noreferrer'
							className={`border-style-none p-4`}>
							<svg
								width='20'
								height='20'
								viewBox='0 0 20 20'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className=' font-secondary'>
								<path
									d='M7.49984 15.8557C3.33317 17.1057 3.33317 13.7723 1.6665 13.3557M13.3332 18.3557V15.1307C13.3644 14.7333 13.3107 14.3338 13.1757 13.9588C13.0406 13.5838 12.8273 13.2418 12.5498 12.9557C15.1665 12.664 17.9165 11.6723 17.9165 7.12232C17.9163 5.95885 17.4687 4.83999 16.6665 3.99732C17.0464 2.97941 17.0195 1.85428 16.5915 0.855656C16.5915 0.855656 15.6082 0.563989 13.3332 2.08899C11.4232 1.57134 9.40983 1.57134 7.49984 2.08899C5.22484 0.563989 4.2415 0.855656 4.2415 0.855656C3.81348 1.85428 3.78662 2.97941 4.1665 3.99732C3.35828 4.84624 2.91027 5.97521 2.9165 7.14732C2.9165 11.664 5.6665 12.6557 8.28317 12.9807C8.009 13.264 7.79756 13.6018 7.66259 13.9723C7.52763 14.3427 7.47218 14.7374 7.49984 15.1307V18.3557'
									stroke='currentColor'
									strokeWidth='1.66667'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</Link>
					</div>
				</nav>
			</div>
		</header>
	)
}
