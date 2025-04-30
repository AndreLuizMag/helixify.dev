import type { ReactNode } from 'react'

const MainLayout = ({
	children,
}: Readonly<{
	children: ReactNode
}>) => {
	return <>{children}</>
}

export default MainLayout
