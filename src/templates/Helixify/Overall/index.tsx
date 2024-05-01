import React from 'react'
import { Card } from './Card'
import { Brand } from '@/components/Brand'

export const Overall = () => {
	return (
		<section className='p-block-16'>
			<div className='container-md'>
				<div className='row align-stretch'>
					<div className='col ds-flex justify-center align-stretch'>
						<Card.Root variant='max'>
							<div className='ds-flex flow-col-nw gap-md'>
								<Brand.HelixCSS size={20} />
								<div className='ds-flex flow-col-nw gap-xs'>
									<Card.Title as='h2'>Heading</Card.Title>
									<Card.Description>
										Description
									</Card.Description>
								</div>
							</div>
							<Card.Button href='#'>Button</Card.Button>
						</Card.Root>
					</div>
					<div className='col ds-flex flow-col-nw align-stretch gap-md'>
						<Card.Root variant='min'>
							<div className='ds-flex flow-col-nw gap-md'>
								<Brand.HelixColor size={20} />
								<div className='ds-flex flow-col-nw gap-xs'>
									<Card.Title as='h2'>Heading</Card.Title>
									<Card.Description>
										Description
									</Card.Description>
								</div>
							</div>
							<Card.Button href='#'>Button</Card.Button>
						</Card.Root>
						<Card.Root variant='min'>
							<div className='ds-flex flow-col-nw gap-xs'>
								<Card.Title as='h2'>Heading</Card.Title>
								<Card.Description>
									Description
								</Card.Description>
							</div>
							<Card.Button href='#'>Button</Card.Button>
						</Card.Root>
					</div>
				</div>
			</div>
		</section>
	)
}
