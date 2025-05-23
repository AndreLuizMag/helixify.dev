import React from 'react'
import './styles.css'

export const BannerIntro = () => {
	return (
		<div className="banner-intro ps-relative overflow-hidden width-100 ds-flex flow-row-nw justify-start align-center bg-helixify-dark border-radius-2xl elevation-lg">
			<div className="content ds-flex flow-col-nw gap-md">
				<h1 className="md:heading-2 font-weight-400">
					An open-source platform for developers
				</h1>
				<p>
					Helixify is a hub of open-source tools that streamline front-end
					development. Everything you need, in one place.
				</p>
			</div>
			<svg
				width="512"
				height="512"
				viewBox="0 0 512 512"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="icon ps-absolute lg:ds-none z-index-negative"
			>
				<title>Helixify icon</title>
				<g filter="url(#filter0_ddii_810_11462)">
					<path
						d="M163.203 480C160.803 480 158.403 480 156.003 477.6C150.403 473.6 148.803 465.6 152.803 460C152.803 460 160.003 448.8 164.003 429.6C168.803 410.4 164.003 388.8 164.003 388.8C162.403 381.6 166.403 375.2 173.603 373.6C180.803 372 187.203 376 188.803 383.2C188.803 384 194.403 410.4 188.803 435.2C183.203 459.2 174.403 472.8 173.603 473.6C171.203 477.6 167.203 479.2 163.203 479.2V480ZM239.203 357.6C212.803 357.6 185.603 352 160.803 347.2C137.603 342.4 116.003 337.6 99.2031 339.2C71.2031 340.8 47.2031 354.4 46.4031 354.4C40.0031 357.6 32.8031 356 28.8031 349.6C25.6031 343.2 27.2031 336 33.6031 332C34.4031 332 63.2031 314.4 97.6031 312.8C117.603 312 140.803 316.8 165.603 321.6C208.803 330.4 253.603 340 289.603 320.8C343.203 292.8 333.603 224 332.803 220.8C332.003 213.6 336.803 207.2 343.203 206.4C350.403 205.6 356.803 210.4 357.603 216.8C357.603 220.8 371.203 306.4 300.803 343.2C280.803 353.6 259.203 357.6 237.603 357.6H239.203ZM158.403 300C152.003 300 147.203 295.2 145.603 289.6C145.603 285.6 132.003 200 202.403 163.2C247.203 140 298.403 150.4 344.003 160C367.203 164.8 388.803 168.8 405.603 168C434.403 166.4 457.603 152.8 457.603 152.8C464.003 148.8 471.203 151.2 475.203 157.6C479.203 164 476.803 171.2 470.403 175.2C469.603 175.2 440.803 192.8 406.403 194.4C386.403 195.2 363.203 190.4 338.403 185.6C295.203 176.8 250.403 167.2 214.403 186.4C160.803 214.4 170.403 283.2 171.203 285.6C172.003 292.8 167.203 299.2 160.803 300H159.203H158.403ZM329.603 133.6C324.003 133.6 318.403 129.6 316.803 124C316.803 123.2 311.203 96.7997 316.803 71.9997C322.403 47.9997 331.203 34.3997 332.003 33.5997C336.003 27.9997 344.003 26.3997 349.603 30.3997C355.203 34.3997 356.803 42.3997 352.803 47.9997C352.803 47.9997 345.603 59.1997 341.603 78.3997C336.803 97.5997 341.603 119.2 341.603 119.2C343.203 126.4 339.203 132.8 332.003 134.4C331.203 134.4 330.403 134.4 328.803 134.4L329.603 133.6Z"
						fill="#1F1F1F"
					/>
				</g>
				<defs>
					<filter
						id="filter0_ddii_810_11462"
						x="13.2031"
						y="16.1777"
						width="481.955"
						height="483.822"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dx="2" dy="4" />
						<feGaussianBlur stdDeviation="8" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.04 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_810_11462"
						/>
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dx="-2" dy="-2" />
						<feGaussianBlur stdDeviation="2" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
						/>
						<feBlend
							mode="normal"
							in2="effect1_dropShadow_810_11462"
							result="effect2_dropShadow_810_11462"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect2_dropShadow_810_11462"
							result="shape"
						/>
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dx="2" dy="4" />
						<feGaussianBlur stdDeviation="4" />
						<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
						/>
						<feBlend
							mode="normal"
							in2="shape"
							result="effect3_innerShadow_810_11462"
						/>
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy="-1" />
						<feGaussianBlur stdDeviation="2" />
						<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0"
						/>
						<feBlend
							mode="normal"
							in2="effect3_innerShadow_810_11462"
							result="effect4_innerShadow_810_11462"
						/>
					</filter>
				</defs>
			</svg>
		</div>
	)
}
