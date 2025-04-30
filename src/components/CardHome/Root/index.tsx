import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { ChevronRight } from 'react-feather'
import './styles.css'
import { Brand } from '@/components/Brand'

type RootProps<E extends ElementType = 'div'> = {
	as?: E
	children: ReactNode
	elementId: number
	highlightColor: string
	className?: string
} & Omit<ComponentPropsWithoutRef<E>, 'as'>

export const Root = <E extends ElementType = 'a'>({
	as,
	children,
	elementId,
	highlightColor,
	className,
	...rest
}: RootProps<E>) => {
	const Component = as || 'a'
	const isLink = !as || as === 'a'

	return (
		<Component
			{...rest}
			className={`card-home ps-relative overflow-hidden width-100 height-100 p-inline-10 p-block-16 ds-flex flow-col-nw justify-center align-start gap-6 bg-helixify-dark ${isLink && 'text-decoration-none'} border-radius-2xl elevation-md ${className ?? ''}`}
		>
			{elementId === 1 ? (
				<Brand.HelixCSSMin
					height={16}
					classNameSufix={`color-${highlightColor}-lighten`}
				/>
			) : elementId === 2 ? (
				<Brand.HelixColorMin
					height={16}
					classNameSufix={`color-${highlightColor}-lighten`}
				/>
			) : (
				<Brand.HelixifyMin
					height={22}
					classNameText={`color-${highlightColor}-lighten`}
				/>
			)}
			{isLink ? (
				<>
					<div className="ds-flex flow-col-nw justify-center align-start gap-6 z-index-2">
						{children}

						<div
							className={`button font-family-roboto ds-flex-center p-block-4 pr-6 color-${highlightColor}-light`}
						>
							Get started
							<ChevronRight />
						</div>
					</div>
					<svg
						width="512"
						height="300"
						viewBox="0 0 512 300"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className={`highlight-svg ps-absolute left-0 top-0 color-${highlightColor}-dark`}
					>
						<title>Hightlight svg</title>
						<path
							opacity="0.32"
							d="M0 0L125.63 0L512 162.55H370.37V214.542L145.778 162.55L160 300L0 132.072V0Z"
							fill="currentColor"
						/>
					</svg>
				</>
			) : (
				children
			)}
		</Component>
	)
}
