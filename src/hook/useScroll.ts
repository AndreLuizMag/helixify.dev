import { useState, useEffect } from 'react';

type ScrollInfo = {
	isScrollingDown: boolean;
	isScrollingUp: boolean;
	scrollY: number;
};

export const useScroll = () => {
	const [scrollInfo, setScrollInfo] = useState<ScrollInfo>({
		isScrollingDown: false,
		isScrollingUp: false,
		scrollY: 0,
	});

	useEffect(() => {
		let lastScrollY = window.pageYOffset;

		const updateScrollDirection = () => {
			const scrollY = window.pageYOffset;
			const isScrollingDown = scrollY > lastScrollY;
			const isScrollingUp = scrollY < lastScrollY;
			setScrollInfo({ isScrollingDown, isScrollingUp, scrollY });
			lastScrollY = scrollY > 0 ? scrollY : 0;
		};

		const onScroll = () => {
			window.requestAnimationFrame(updateScrollDirection);
		};

		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return scrollInfo;
};
