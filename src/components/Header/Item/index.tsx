import Link from 'next/link'
import React, { FC, HTMLAttributes, ReactNode } from 'react'

interface ItemProps
	extends HTMLAttributes<HTMLAnchorElement> {
	href: string
	children: ReactNode
	openInNewTab?: boolean
	onClick?: () => void
}

export const Item: FC<ItemProps> = ({
	href,
	children,
	openInNewTab = false,
	onClick,
}) => {
	const target = openInNewTab ? '_blank' : undefined

	const rel = openInNewTab
		? 'noopener noreferrer'
		: undefined

	return (
		<Link
			href={href}
			target={target}
			rel={rel}
			onClick={onClick}
			className='item p-block-4 p-inline-6'>
			{children}
		</Link>
	)
}
