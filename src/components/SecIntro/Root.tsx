import React, { FC, HTMLAttributes, ReactNode } from 'react'

interface RootProps extends HTMLAttributes<HTMLElement> {
	children: ReactNode
}

export const Root: FC<RootProps> = ({ children }) => {
	return (
		<section className='pt-16'>
			<div className='container-sm ds-flex flow-col-nw gap-3xl'>
				{children}
			</div>
		</section>
	)
}
