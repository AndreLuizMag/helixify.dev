import React, { FC, HTMLAttributes, ReactNode } from 'react'

interface GroupProps extends HTMLAttributes<HTMLElement> {
	children: ReactNode
}

export const Group: FC<GroupProps> = ({ children }) => {
	return (
		<div className='ds-flex-center flow-col-nw gap-md'>
			{children}
		</div>
	)
}
