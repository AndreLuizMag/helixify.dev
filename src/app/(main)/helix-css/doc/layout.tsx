import type { ReactNode } from 'react'

const DocLayout = ({
	children,
}: Readonly<{
	children: ReactNode
}>) => {
	return <>
	<header><span>doc header</span></header>
	{children}
	</>
}

export default DocLayout
