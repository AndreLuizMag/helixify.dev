import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import '@/styles/main.scss'
import 'helix-color'
// import localFont from 'next/font/local'

// const PollyRounded = localFont({
// 	src: [
// 		{
// 			path: '../fonts/PollyRounded/polly-rounded-thin.otf',
// 			weight: '100',
// 			style: 'normal',
// 		},
// 		{
// 			path: '../fonts/PollyRounded/polly-rounded-light.otf',
// 			weight: '200',
// 			style: 'normal',
// 		},
// 		{
// 			path: '../fonts/PollyRounded/polly-rounded-regular.otf',
// 			weight: '400',
// 			style: 'normal',
// 		},
// 		{
// 			path: '../fonts/PollyRounded/polly-rounded-bold.otf',
// 			weight: '700',
// 			style: 'normal',
// 		},
// 	],
// 	display: 'swap',
// })

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
			<body className='ds-flex flow-col-nw justify-between'>
				{children}
				<Analytics />
			</body>
		</html>
	)
}
