'use client'
import React, { FC, useState } from 'react'
import './index.scss'
import { CaretDown, CaretUp } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

interface BtnToggleMenuProps {
	onClick: () => void
}

export const BtnToggleMenu: FC<BtnToggleMenuProps> = ({
	onClick,
}) => {
	const [isClicked, setIsClicked] = useState(false)

	const handleClick = () => {
		onClick()
		setIsClicked((prev) => !prev)
	}

	return (
		<>
			<button
				onClick={handleClick}
				type='button'
				title='Toggle menu'
				className='btn-toggle p-block-4 p-inline-6 ds-flex flow-row-nw align-end text-decoration-none font-tertiary border-style-none overflow-hidden radius-xs duration-normal property-colors ease-in-out'
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
		</>
	)
}

// !isClicked && !isHovered
// ? 0
// : !isClicked && isHovered
// ? 4
// : isClicked && isHovered
// ? 28
// : 32,
