import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<div className='width-100 ds-flex flow-col-nw'>
				<Header />
				{children}
			</div>
			<Footer />
		</>
	)
}
