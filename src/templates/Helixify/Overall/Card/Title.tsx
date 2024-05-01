import React, {
	FC,
	HTMLAttributes,
	ReactNode,
	useContext,
} from 'react'
import { VariantContext } from './Root'

interface TitleProps
	extends HTMLAttributes<HTMLHeadingElement> {
	as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	children: ReactNode
}

export const Title: FC<TitleProps> = ({
	as: Component,
	children,
}) => {
	const variantContext = useContext(VariantContext)
	return (
		<Component
			className={`title-${
				variantContext === 'max' ? 'max' : 'min'
			} font-weight-400`}>
			{children}
		</Component>
	)
}
