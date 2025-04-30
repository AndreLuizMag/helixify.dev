import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import './styles.css'

type ContentProps<E extends ElementType> = {
	as?: E
	title: string
	children?: ReactNode
} & Omit<ComponentPropsWithoutRef<E>, 'as'>

export const Content = <E extends ElementType = 'h2'>({
	as,
	title,
	children,
}: ContentProps<E>) => {
	const Component = as || 'h2'
	return (
		<div className="ds-flex flow-col-nw gap-4">
			<Component className="title heading-2 md:heading-3 font-weight-400 line-height-none color-1">
				{title}
			</Component>
			{children && <p className="color-3 line-height-default">{children}</p>}
		</div>
	)
}
