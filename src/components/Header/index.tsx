'use client'
import './index.scss'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { Brand } from '../Brand'
import { Item } from './Item'
import { usePathname } from 'next/navigation'
import { BtnToggleMenu } from './BtnToggleMenu'
import { AnimatePresence, motion } from 'framer-motion'
import UseWindowSize from '@/hook/UseWindowSize'
import { MadeBy } from '../MadeBy'
import { transform } from 'next/dist/build/swc'

const items = [
	{
		id: 1,
		name: 'Helixify',
		path: '/',
	},
	{
		id: 2,
		name: 'HelixCSS',
		path: '/helixcss',
	},
	{
		id: 3,
		name: 'HelixColor',
		path: '/helixcolor',
	},
]

export const Header = () => {
	const pathname = usePathname()
	const { width, height } = UseWindowSize()
	const [isMobile, setIsMobile] = useState(width < 720)
	const [toggleMenu, setToggleMenu] = useState(false)
	const [contentHeight, setContentHeight] = useState(height)

	const handleToggleMenu = () => {
		setToggleMenu((prev) => !prev)
		setContentHeight(height)
	}

	useEffect(() => {
		setIsMobile(width < 720)
	}, [width])

	const contentVariant = {
		open: { height: contentHeight - 32 },
		closed: { height: 48 },
	}

	const baseVariant = {
		open: {
			transform: 'translate(-0.5rem, -1rem)',
			width: 'calc(100% + 1rem)',
		},
		closed: {
			transform: 'translate(0, 0)',
			width: '100%',
		},
	}

	return (
		<header className='width-100 ps-fixed pt-10 z-index-07'>
			<div className='container-md'>
				<motion.div
					className='base'
					animate={toggleMenu ? 'open' : 'closed'}
					variants={baseVariant}
					transition={{
						type: 'tween',
						duration: 0.3,
						bounce: 0.4,
					}}>
					<motion.div
						className='content width-100 p-block-4 p-inline-6 ds-flex flow-col-nw justify-between radius-md'
						animate={toggleMenu ? 'open' : 'closed'}
						variants={contentVariant}
						transition={{
							type: 'spring',
							duration: 0.8,
							bounce: 0.2,
						}}>
						<nav className='nav-main ds-flex flow-row-nw justify-between align-center'>
							<div className='flex-bgs ds-flex flow-row-nw justify-start align-center'>
								<Link
									href='/'
									className='all-unset cursor-pointer'>
									{pathname === '/helixcss' ? (
										<Brand.HelixCSS size={20} />
									) : pathname === '/helixcolor' ? (
										<Brand.HelixColor size={20} />
									) : (
										<Brand.Helixify size={20} />
									)}
								</Link>
							</div>

							{!isMobile && (
								<ul className='p-0 list-style-none ds-inline-flex-center gap-sm font-tertiary'>
									{items.map((item, index) => (
										<Item key={index} href={item.path}>
											{item.name}
										</Item>
									))}
								</ul>
							)}

							{isMobile && (
								<BtnToggleMenu
									onClick={handleToggleMenu}
									isClicked={toggleMenu}
								/>
							)}

							{!isMobile && (
								<div className='flex-bgs ds-flex flow-row-nw justify-end align-center'>
									<Link
										href='https://github.com/Helixify'
										target='_blank'
										rel='noopener noreferrer'
										className={`
								p-4
								duration-normal 
								property-colors
								ease-in-out
								hover:theme-secondary
								border-style-none`}>
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
							)}
						</nav>

						{isMobile && (
							<AnimatePresence>
								{toggleMenu && (
									<motion.nav
										initial={{ opacity: 0 }}
										animate={{
											opacity: 1,
										}}
										exit={{ opacity: 0 }}
										transition={{
											opacity: {
												duration: 0.2,
											},
										}}
										className='nav-mobile width-100 ds-flex flow-col-nw justify-start align-end gap-lg p-block-4'>
										<ul className='p-0 list-style-none ds-inline-flex flow-col-nw align-end gap-sm font-tertiary'>
											{items.map((item, index) => (
												<Item key={index} href={item.path}>
													{item.name}
												</Item>
											))}
											<Item
												href='https://github.com/Helixify'
												openInNewTab>
												Github
											</Item>
										</ul>
										<div className='made-by-content width-100 ds-flex flow-row-nw justify-start align-center'>
											<MadeBy />
										</div>
									</motion.nav>
								)}
							</AnimatePresence>
						)}
					</motion.div>
				</motion.div>
			</div>
		</header>
	)
}
{
	/* {items.map((item, index) => (
							<li key={index}>
							<Item href={item.path}>{item.name}</Item>
							</li>
						))} */
}
