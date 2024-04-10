import type { Metadata } from 'next'
import '@/styles/helixify.scss'
import { HelixifyWrapped } from '@/templates/Helixify'

export const metadata: Metadata = {
	title: 'Helixify',
	description:
		'platform for provides open-source solutions',
}

const Home = () => {
	return (
		<main>
			<HelixifyWrapped />
		</main>
	)
}
export default Home
