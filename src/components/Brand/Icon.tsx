import React, { FC, HTMLAttributes } from 'react'

interface IconProps extends HTMLAttributes<HTMLElement> {
	size?: number
	className?: string
}

export const Icon: FC<IconProps> = ({
	size = 64,
	className,
}) => {
	return (
		<>
			<svg
				width={`${size}px`}
				height={`${size}px`}
				viewBox='0 0 64 64'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				aria-labelledby='catTitle catDesc'
				className={className}>
				<title id='catTitle'>Helixify</title>
				<desc id='catDesc'>A platform open-source</desc>
				<path
					d='M5 43.5781C5 43.5781 8.28763 41.6228 12.2824 41.4161C18.8822 41.0747 29.1231 46.309 36.9745 42.2127C44.8259 38.1163 43.2328 28.1029 43.2328 28.1029M58 21.0748C58 21.0748 54.7124 23.0302 50.7176 23.2368C44.1178 23.5783 33.8769 18.3439 26.0255 22.4403C18.1741 26.5367 19.7672 36.55 19.7672 36.55M42.8606 5.68652C42.8606 5.68652 41.8598 7.16573 41.1862 10.0104C40.5127 12.8551 41.1863 15.8198 41.1863 15.8198M20.4049 59.0593C20.4049 59.0593 21.4057 57.5801 22.0792 54.7354C22.7528 51.8907 22.0792 48.9261 22.0792 48.9261'
					stroke='currentColor'
					stroke-width='3.18607'
					stroke-linecap='round'
				/>
			</svg>
		</>
	)
}
