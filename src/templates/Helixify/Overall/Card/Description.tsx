import React, { FC, HTMLAttributes, ReactNode } from 'react'

interface DescriptionProps
	extends HTMLAttributes<HTMLParagraphElement> {
	children: ReactNode
}

export const Description: FC<DescriptionProps> = ({
	children,
}) => {
	return <p className='font-tertiary'>{children}</p>
}
