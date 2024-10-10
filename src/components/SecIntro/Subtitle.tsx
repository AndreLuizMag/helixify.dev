import React, { type ReactNode } from 'react';

type SubtitleProps = {
	children: ReactNode;
};

export const Subtitle = ({ children }: SubtitleProps) => {
	return <p className="text-align-center font-primary">{children}</p>;
};
