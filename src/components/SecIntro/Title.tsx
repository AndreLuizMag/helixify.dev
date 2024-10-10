import React, { type ReactNode } from 'react';

type TitleProps = {
	children: ReactNode;
};

export const Title = ({ children }: TitleProps) => {
	return <h1 className="text-align-center">{children}</h1>;
};
