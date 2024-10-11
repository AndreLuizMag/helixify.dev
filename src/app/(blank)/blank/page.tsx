import { Header } from '@/components/Header';
import { AnimatedTabs } from '@/components/Test/AnimatedTabs';
import React from 'react';

const Blank = () => {
	return (
		<main>
			<Header />
			<section className="test-sec-height" />
			<section className="test-sec-height" />
		</main>
	);
};

export default Blank;
