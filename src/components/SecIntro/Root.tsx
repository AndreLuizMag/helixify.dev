import React, { FC, HTMLAttributes, ReactNode } from 'react'
import styles from './Root.module.scss'
import { Gradient } from './Gradient'

interface RootProps extends HTMLAttributes<HTMLElement> {
	children: ReactNode
}

export const Root: FC<RootProps> = ({ children }) => {
	return (
		<section
			className={`${styles.secIntro} ds-flex-center flow-col-nw`}>
			<Gradient />
			<div
				className={`${styles.container} container-sm  p-header-height ds-flex-center flow-col-nw gap-3xl`}>
				{children}
			</div>
		</section>
	)
}
