import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const MainLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<body className="main-body theme-helixify color-helixify">
			<Header />
			{children}
			<Footer />
		</body>
	);
};

export default MainLayout;
