import React, { type ReactNode } from 'react';

type GroupProps = {
	children: ReactNode;
};

export const Group = ({ children }: GroupProps) => {
	return <div className="ds-flex-center flow-col-nw gap-md">{children}</div>;
};
