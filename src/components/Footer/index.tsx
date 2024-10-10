import Link from 'next/link';
import React from 'react';
import { Brand } from '../Brand';
import { MadeBy } from '../MadeBy';
import { GitHub } from 'react-feather';

export const Footer = () => {
	return (
		<footer className="width-100">
			<div className="container-lg">
				<hr />
				<div className="widty-100 p-block-10 ds-flex flow-row-nw justify-between align-center">
					<MadeBy />
					<Link
						href="https://github.com/Helixify"
						target="_blank"
						rel="noopener noreferrer"
						className="all-unset p-4 cursor-pointer">
						<GitHub />
					</Link>
				</div>
			</div>
		</footer>
	);
};
