import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { routes } from './utils'

type Props = {
	params: Promise<{ slug: string }>
	searchParams: Promise<{ [slug: string]: string | string[] | undefined }>
}

const generateStaticParams = async ({ params }: Props): Promise<Metadata> => {
	const { slug } = await params

	const route = routes.find((r) => r.path === slug)

	if (!route) {
		notFound()
	}

	return {
		title: route.title,
		description: route.metaDescription,
	}
}

const Page = async ({ params }: Props) => {
	const { slug } = await params

	const route = routes.find((r) => r.path === slug)

	if (!route) {
		notFound()
	}

	const Content = (await import(`@doc/helix-css/${route.path}.mdx`)).default

	return (
		<div>
			<h1>{route.title}</h1>
			<Content />
		</div>
	)
}

export default Page
