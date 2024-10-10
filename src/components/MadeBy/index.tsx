import React from 'react';
import { Brand } from '../Brand';
import Link from 'next/link';

export const MadeBy = () => {
	return (
		<div className="ds-flex flow-col-nw gap-xs font-size-sm">
			<Brand.Text size={18} />
			<span>
				Made by{' '}
				<Link
					href="https://github.com/AndreLuizMag"
					target="_blank"
					rel="noopener noreferrer"
					className="all-unset cursor-pointer">
					@AndreLuizMag
				</Link>
			</span>
		</div>
	);
};
