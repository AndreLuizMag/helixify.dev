import React, { FC, HTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'
import { CaretRight } from '@phosphor-icons/react'

interface ButtonProps extends HTMLAttributes<HTMLElement> {
	href: string
	children: ReactNode
}

export const Button: FC<ButtonProps> = ({
	href,
	children,
}) => {
	return (
		<Link
			href={href}
			className='ds-inline-flex flow-row-nw align-end gap-sm text-decoration-none font-tertiary'>
			<span>{children}</span>
			<CaretRight size={16} className='mb-1' />
		</Link>
	)
}
