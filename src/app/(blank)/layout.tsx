import { inter } from '@/fonts/fonts';
import type { ReactNode } from 'react';
import '@/styles/test-main.scss';

const BlankLayout = ({
	children,
}: Readonly<{
	children: ReactNode;
}>) => {
	return (
		<body
			className={`${inter.className} main-body theme-helixify color-helixify`}>
			{children}
		</body>
	);
};

export default BlankLayout;
