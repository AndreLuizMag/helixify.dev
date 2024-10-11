import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
});

export const polly_rounded = localFont({
	src: [
		{
			path: './PollyRounded/polly-rounded-thin.otf',
			weight: '100',
			style: 'normal',
		},
		{
			path: './PollyRounded/polly-rounded-light.otf',
			weight: '200',
			style: 'normal',
		},
		{
			path: './PollyRounded/polly-rounded-regular.otf',
			weight: '400',
			style: 'normal',
		},
		{
			path: './PollyRounded/polly-rounded-bold.otf',
			weight: '700',
			style: 'normal',
		},
	],
	display: 'swap',
});
