import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import '@/styles/globals.scss'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

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
