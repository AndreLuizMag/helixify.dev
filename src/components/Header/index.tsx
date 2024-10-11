import React from 'react';
import './styles.scss';

export const Header = () => {
	return (
		<header className="header width-100 ps-fixed z-index-8">
			<div className="container-md">
				<nav className="ds-flex flow-row-nw justify-between align-center bg-primary">
					<div>Item 1</div>
					<div>Item 2</div>
					<div>Item 3</div>
					<div>
						<button type="button">Click</button>
					</div>
				</nav>
			</div>
		</header>
	);
};
