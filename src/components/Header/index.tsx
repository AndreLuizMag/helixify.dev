'use client';
import './index.scss';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { Brand } from '../Brand';
import { Item } from './Item';
import { usePathname } from 'next/navigation';
import { BtnToggleMenu } from './BtnToggleMenu';
import { AnimatePresence, motion } from 'framer-motion';
import UseWindowSize from '@/hook/UseWindowSize';
import { MadeBy } from '../MadeBy';
import { GitHub } from 'react-feather';
import { headerNav } from '@/utils/header-nav';

export const Header = () => {
	const pathname = usePathname();
	const { width, height } = UseWindowSize();
	const [isMobile, setIsMobile] = useState(width < 720);
	const [toggleMenu, setToggleMenu] = useState(false);
	const [contentHeight, setContentHeight] = useState(height);

	const handleToggleMenu = () => {
		setToggleMenu((prev) => !prev);
		setContentHeight(height);
	};

	useEffect(() => {
		setIsMobile(width < 720);
	}, [width]);

	const contentVariant = {
		open: { height: contentHeight - 32 },
		closed: { height: 48 },
	};

	const baseVariant = {
		open: {
			transform: 'translate(-0.5rem, -1rem)',
			width: 'calc(100% + 1rem)',
		},
		closed: {
			transform: 'translate(0, 0)',
			width: '100%',
		},
	};

	return (
		<header className="width-100 ps-fixed pt-10 top-0 z-index-7">
			<div className="container-md ">
				<motion.div
					className="base width-100"
					animate={toggleMenu ? 'open' : 'closed'}
					variants={baseVariant}
					transition={{
						type: 'tween',
						duration: 0.2,
						bounce: 0.4,
					}}>
					<motion.div
						className="content width-100 p-block-4 p-inline-6 ds-flex flow-col-nw justify-center md:justify-between align-center radius-md"
						animate={toggleMenu ? 'open' : 'closed'}
						variants={contentVariant}
						transition={{
							type: 'spring',
							duration: 0.6,
							bounce: 0.2,
						}}>
						<nav className="nav-main width-100 ds-flex flow-row-nw justify-between align-center">
							<div className="flex-bgs ds-flex flow-row-nw justify-start align-center">
								<Link href="/" className="all-unset cursor-pointer">
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
								<div className="ds-inline-flex-center gap-sm font-tertiary">
									{headerNav.map((item, index) => (
										<Item key={`${item.path}-${index}`} href={item.path}>
											{item.name}
										</Item>
									))}
								</div>
							)}

							{isMobile && (
								<BtnToggleMenu
									onClick={handleToggleMenu}
									isClicked={toggleMenu}
								/>
							)}

							{!isMobile && (
								<div className="flex-bgs ds-flex flow-row-nw justify-end align-center">
									<Link
										href="https://github.com/Helixify"
										target="_blank"
										rel="noopener noreferrer"
										className="item p-3 ds-flex-center">
										<GitHub size={20} />
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
										className="nav-mobile width-100 ds-flex flow-col-nw justify-start align-end gap-lg p-block-4">
										<div className="ds-inline-flex flow-col-nw align-end gap-sm font-tertiary">
											{headerNav.map((item, index) => (
												<Item
													key={`${item.path}-${index}`}
													href={item.path}
													onClick={handleToggleMenu}>
													{item.name}
												</Item>
											))}
											<Item href="https://github.com/Helixify" openInNewTab>
												Github
											</Item>
										</div>
										<div className="made-by-content width-100 ds-flex flow-row-nw justify-start align-center">
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
	);
};
