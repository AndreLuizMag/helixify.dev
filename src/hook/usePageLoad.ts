import { useState, useEffect } from 'react';

const usePageLoaded = () => {
	const [isPageLoaded, setIsPageLoaded] = useState<boolean>(false);

	useEffect(() => {
		const handlePageLoad = () => {
			setIsPageLoaded(true);
		};

		if (document.readyState === 'complete') {
			setIsPageLoaded(true);
		} else {
			window.addEventListener('load', handlePageLoad);
		}

		return () => {
			window.removeEventListener('load', handlePageLoad);
		};
	}, []);

	return isPageLoaded;
};

export default usePageLoaded;
