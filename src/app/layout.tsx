import type { Metadata } from 'next'
import { Roboto, Roboto_Serif } from 'next/font/google'
import localFont from 'next/font/local'
import type { ReactNode } from 'react'
import 'helix-css'
import '../styles/main.css'
import { BgNoise } from '@/components/BgNoise'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const pollyRounded = localFont({
	variable: '--font-polly-rounded',
	src: [
		{
			path: '../../public/fonts/polly-rounded/polly-rounded-thin.otf',
			weight: '100',
			style: 'normal',
		},
		{
			path: '../../public/fonts/polly-rounded/polly-rounded-light.otf',
			weight: '200',
			style: 'normal',
		},
		{
			path: '../../public/fonts/polly-rounded/polly-rounded-regular.otf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/polly-rounded/polly-rounded-bold.otf',
			weight: '700',
			style: 'normal',
		},
	],
	display: 'swap',
})

const robotoSans = Roboto({
	variable: '--font-roboto',
	subsets: ['latin'],
	display: 'swap',
})

const robotoSerif = Roboto_Serif({
	variable: '--font-roboto-serif',
	subsets: ['latin'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'Helixify',
	description: 'Platform for provides open-source solutions',
}

const RootLayout = ({
	children,
}: Readonly<{
	children: ReactNode
}>) => {
	return (
		<html
			lang="en"
			className={`${pollyRounded.variable} ${robotoSans.variable} ${robotoSerif.variable}`}
		>
			<body>
				<BgNoise />
				{children}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	)
}

export default RootLayout
