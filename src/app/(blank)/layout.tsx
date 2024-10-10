const BlankLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return <body>{children}</body>;
};

export default BlankLayout;
