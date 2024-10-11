import type { ReactNode } from 'react';
import { HeaderOld } from '@/components/HeaderOld';
import { Footer } from '@/components/Footer';

const MainLayout = ({
	children,
}: Readonly<{
	children: ReactNode;
}>) => {
	return (
		<body className="main-body theme-helixify color-helixify">
			<HeaderOld />
			{children}
			<Footer />
		</body>
	);
};

export default MainLayout;
