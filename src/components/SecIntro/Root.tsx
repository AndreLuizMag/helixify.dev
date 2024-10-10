import React, { type ReactNode } from 'react';
import styles from './Root.module.scss';
// import { Gradient } from './Gradient';

type RootProps = {
	children: ReactNode;
};

export const Root = ({ children }: RootProps) => {
	return (
		<div
			className={`${styles.secIntro} ds-flex-center flow-col-nw shadow-out radius-3xl theme-helixify`}>
			{/* <Gradient /> */}
			<div
				className={`${styles.container} container-sm  p-header-height ds-flex-center flow-col-nw gap-3xl`}>
				{children}
			</div>
		</div>
	);
};
