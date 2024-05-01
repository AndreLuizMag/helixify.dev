import Link from 'next/link'
import React, { FC, HTMLAttributes, ReactNode } from 'react'

interface ItemProps
	extends HTMLAttributes<HTMLAnchorElement> {
	href: string
	children: ReactNode
	openInNewTab?: boolean
}

export const Item: FC<ItemProps> = ({
	href,
	children,
	openInNewTab = false,
	...props
}) => {
	const target = openInNewTab ? '_blank' : undefined

	const rel = openInNewTab
		? 'noopener noreferrer'
		: undefined

	return (
		<Link
			href={href}
			{...props}
			target={target}
			rel={rel}
			className='item 
            p-block-4 
            p-inline-6 
            text-decoration-none 
            font-tertiary 
            duration-normal 
            property-colors
            ease-in-out
            hover:font-primary
            border-style-none
            radius-xs'>
			{children}
		</Link>
	)
}
