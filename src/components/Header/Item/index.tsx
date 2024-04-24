import Link from 'next/link'
import React, { FC, HTMLAttributes, ReactNode } from 'react'

interface ItemProps
	extends HTMLAttributes<HTMLAnchorElement> {
	href: string
	children: ReactNode
}

export const Item: FC<ItemProps> = ({ href, children }) => {
	return (
		<Link
			href={href}
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
