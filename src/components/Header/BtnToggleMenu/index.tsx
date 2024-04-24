'use client'
import React, { useState } from 'react'
import './index.scss'
import { CaretDown, CaretUp } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

export const BtnToggleMenu = () => {
	const [isHovered, setIsHovered] = useState(false)
	const [isClicked, setIsClicked] = useState(false)

	return (
		<>
			<button
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				onClick={() => setIsClicked(!isClicked)}
				type='button'
				title='Toggle menu'
				className='item btn-toggle
          p-block-4 
          p-inline-6 
          ds-flex
          flow-row-nw
          align-end
          text-decoration-none 
          font-tertiary 
          hover:font-primary
          border-style-none
          overflow-hidden
          radius-xs
          duration-normal 
          property-colors
          ease-in-out'
				data-state={isClicked ? 'open' : 'closed'}>
				<motion.div
					className='ds-flex flow-col-nw gap-md'
					animate={{
						translateY:
							!isClicked && !isHovered
								? 0
								: !isClicked && isHovered
								? 4
								: isClicked && isHovered
								? 28
								: 32,
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
// isHovered ? 4 : 0
// isClicked ? 32 : 0,
