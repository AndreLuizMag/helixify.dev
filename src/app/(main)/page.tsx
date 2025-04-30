import { BannerIntro } from '@/components/BannerIntro'
import { GridHome } from '@/components/GridHome'
import React from 'react'

const HomePage = () => {
	return (
		<main className="p-block-16">
			<div className="hx-container-md ds-flex flow-col-nw gap-16">
				<section>
					<BannerIntro />
				</section>
				<section>
					<GridHome />
				</section>
			</div>
		</main>
	)
}

export default HomePage
