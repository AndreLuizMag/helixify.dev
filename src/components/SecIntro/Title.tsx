import React, { FC, HTMLAttributes, ReactNode } from 'react'

interface TitleProps extends HTMLAttributes<HTMLElement> {
	children: ReactNode
}

export const Title: FC<TitleProps> = ({ children }) => {
	return <h1 className='text-align-center'>{children}</h1>
}
