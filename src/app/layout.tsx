import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

import '../styles/globals.scss'

export const metadata: Metadata = {
	title: 'Helixify',
	description:
		'Platform for provides open-source solutions',
	icons: {
		icon: '/images/favicon.ico',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<head>
				<link rel='icon' href='/favicon.ico' sizes='any' />
				{/* <link
					rel='stylesheet'
					href='https://cdn.jsdelivr.net/gh/Helixify/HelixCSS@latest/dist/compressed/main.css'
				/>
				<link
					rel='stylesheet'
					href='https://cdn.jsdelivr.net/gh/Helixify/HelixColor@latest/dist/compressed/color-scheme.css'
				/> */}
			</head>
			<body className='theme-primary ds-flex flow-col-nw justify-between'>
				<div className='width-100 ds-flex flow-col-nw'>
					<Header />
					{children}
				</div>
				<Footer />
				<Analytics />
			</body>
		</html>
	)
}
