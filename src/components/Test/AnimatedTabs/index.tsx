'use client';
import { color, motion } from 'framer-motion';
import { useState } from 'react';
import './styles.scss';

const tabs = [
	{ id: 'helixify', label: 'Helixify', path: '', color: 'purple' },
	{ id: 'about', label: 'About', path: '', color: 'red' },
	{ id: 'css', label: 'Helix CSS', path: '', color: 'blue' },
	{ id: 'color', label: 'Helix Color', path: '', color: 'green' },
];

export const AnimatedTabs = () => {
	const [activeTab, setActiveTab] = useState(tabs[0].id);

	return (
		<div className="animate-tab ds-flex flow-row-nw gap-sm p-10">
			{tabs.map((tab) => (
				<button
					key={tab.id}
					type="button"
					onClick={() => setActiveTab(tab.id)}
					className="item all-unset ps-relative radius-md p-block-4 p-inline-6 cursor-pointer color-tertiary bg-transparent">
					{activeTab === tab.id && (
						<motion.span
							layoutId="bubble"
							className={`line ps-absolute bg-${tab.color}-lighten width-100 bottom-0 left-0`}
							style={{ borderRadius: 9999 }}
							transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
						/>
					)}
					<span
						className={`${
							activeTab === tab.id
								? `color-${tab.color}-regular`
								: `hover:color-${tab.color}-light`
						} font-weight-600 duration-normal propety-colors ease-in-out`}>
						{tab.label}
					</span>
				</button>
			))}
		</div>
	);
};
