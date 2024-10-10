import React, { FC, HTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'

interface ButtonProps extends HTMLAttributes<HTMLElement> {
	href: string
	children: ReactNode
}

export const Button: FC<ButtonProps> = ({
	href,
	children,
}) => {
	return <Link href={href}>{children}</Link>
}
