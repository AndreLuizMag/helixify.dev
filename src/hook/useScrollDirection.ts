import { useEffect, useState } from 'react';

interface ScrollData {
	isScrollingDown: boolean;
	isScrollingUp: boolean;
	isScrollingTop: boolean;
	isScrollingBottom: boolean;
	scrollY: number;
}

export const useScrollDirection = (): ScrollData => {
	const [scrollData, setScrollData] = useState<ScrollData>({
		isScrollingDown: false,
		isScrollingUp: false,
		isScrollingTop: true,
		isScrollingBottom: false,
		scrollY: 0,
	});

	useEffect(() => {
		if (typeof window === 'undefined') {
			return;
		}

		let lastScrollY = window.scrollY;

		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			const maxScrollY =
				document.documentElement.scrollHeight - window.innerHeight;

			setScrollData({
				isScrollingDown: currentScrollY > lastScrollY,
				isScrollingUp: currentScrollY < lastScrollY,
				isScrollingTop: currentScrollY === 0,
				isScrollingBottom: currentScrollY >= maxScrollY,
				scrollY: currentScrollY,
			});

			lastScrollY = currentScrollY;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return scrollData;
};
