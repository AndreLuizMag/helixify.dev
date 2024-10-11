import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { inter } from '@/fonts/fonts';
import 'helix-css';
import 'helix-color';
import '@/styles/main.scss';

export const metadata: Metadata = {
	title: 'Helixify',
	description: 'Platform for provides open-source solutions',
};

const RootLayout = ({
	children,
}: Readonly<{
	children: ReactNode;
}>) => {
	return (
		<html lang="en" className={inter.className}>
			{children}
			<Analytics />
		</html>
	);
};

export default RootLayout;
