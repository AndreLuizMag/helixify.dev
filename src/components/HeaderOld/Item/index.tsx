import Link from 'next/link';
import React, { type ReactNode } from 'react';

type ItemProps = {
	href: string;
	children: ReactNode;
	openInNewTab?: boolean;
	onClick?: () => void;
};

export const Item = ({
	href,
	children,
	openInNewTab = false,
	onClick,
}: ItemProps) => {
	const target = openInNewTab ? '_blank' : undefined;

	const rel = openInNewTab ? 'noopener noreferrer' : undefined;

	return (
		<Link
			href={href}
			target={target}
			rel={rel}
			onClick={onClick}
			className="item p-block-4 p-inline-6">
			{children}
		</Link>
	);
};
