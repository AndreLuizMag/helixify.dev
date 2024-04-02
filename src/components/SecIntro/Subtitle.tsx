import React, { FC, HTMLAttributes, ReactNode } from 'react'

interface SubtitleProps
	extends HTMLAttributes<HTMLElement> {
	children: ReactNode
}

export const Subtitle: FC<SubtitleProps> = ({
	children,
}) => {
	return (
		<p className='text-align-center font-primary'>
			{children}
		</p>
	)
}
