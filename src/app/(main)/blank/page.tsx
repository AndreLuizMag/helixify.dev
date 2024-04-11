import { Brand } from '@/components/Brand'
import React from 'react'

const Blank = () => {
	return (
		<main>
			<section>
				<Brand.Helixify />
				<Brand.HelixCSS />
				<Brand.HelixColor />
				<Brand.Icon />
			</section>
			<section>
				<Brand.Helixify
					classNameText='color-blue-normal'
					size={128}
				/>
				<Brand.HelixCSS
					classNameSufix='color-red-normal'
					size={48}
				/>
				<Brand.HelixColor
					classNameSufix='color-green-normal'
					size={32}
				/>
				<Brand.Icon className='color-purple-normal' />
			</section>
		</main>
	)
}

export default Blank
