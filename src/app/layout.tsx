import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import '@/styles/main.scss'

export const metadata: Metadata = {
	title: 'Helixify',
	description:
		'Platform for provides open-source solutions',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className='theme-primary ds-flex flow-col-nw justify-between'>
				{children}
				<Analytics />
			</body>
		</html>
	)
}
