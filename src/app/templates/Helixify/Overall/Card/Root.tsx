import React, {
	FC,
	HTMLAttributes,
	ReactNode,
	createContext,
} from 'react'
const VariantContext = createContext('')

interface RootProps extends HTMLAttributes<HTMLDivElement> {
	variant: 'max' | 'min'
	children: ReactNode
}

const Root: FC<RootProps> = ({ variant, children }) => {
	return (
		<VariantContext.Provider value={variant}>
			<div
				className={`overall-card ds-flex flow-col-nw justify-center align-start flex-bgs gap-lg p-${
					variant === 'max' ? '16' : '10'
				} lg:p-10 radius-md theme-secondary`}>
				{children}
			</div>
		</VariantContext.Provider>
	)
}

export { Root, VariantContext }
