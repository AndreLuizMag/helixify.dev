import React, { FC } from 'react'
import { CaretDown, CaretUp } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import './index.scss'

interface BtnToggleMenuProps {
	onClick: () => void
	isClicked: boolean
}

export const BtnToggleMenu: FC<BtnToggleMenuProps> = ({
	onClick,
	isClicked,
}) => {
	const handleClick = () => {
		onClick()
	}

	return (
		<button
			onClick={handleClick}
			type='button'
			title='Toggle menu'
			className='btn-toggle p-block-4 p-inline-6 ds-flex flow-row-nw align-end text-decoration-none color-tertiary border-style-none overflow-hidden radius-xs duration-normal property-colors ease-in-out'
			data-state={isClicked ? 'open' : 'closed'}>
			<motion.div
				className='ds-flex flow-col-nw gap-md'
				animate={{
					translateY: isClicked ? 32 : 0,
				}}
				transition={{
					type: 'spring',
					duration: 0.4,
					bounce: 0.4,
				}}>
				<CaretUp size={16} weight='bold' />
				<CaretDown size={16} weight='bold' />
			</motion.div>
		</button>
	)
}
