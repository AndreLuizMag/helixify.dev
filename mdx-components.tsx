import React, { type ComponentPropsWithoutRef } from 'react'
import Link from 'next/link'
import '@/styles/mdx-main.css'

type HeadingProps = ComponentPropsWithoutRef<'h1'>
type ParagraphProps = ComponentPropsWithoutRef<'p'>
type ListProps = ComponentPropsWithoutRef<'ul'>
type ListItemProps = ComponentPropsWithoutRef<'li'>
type AnchorProps = ComponentPropsWithoutRef<'a'>
type BlockquoteProps = ComponentPropsWithoutRef<'blockquote'>

const components = {
	h1: (props: HeadingProps) => <h1 className="mdx-h1" {...props} />,
	h2: (props: HeadingProps) => <h2 className="mdx-h2" {...props} />,
	h3: (props: HeadingProps) => <h3 className="mdx-h3" {...props} />,
	h4: (props: HeadingProps) => <h4 className="mdx-h4" {...props} />,
	p: (props: ParagraphProps) => <p className="mdx-p" {...props} />,
	ol: (props: ListProps) => <ol {...props} />,
	ul: (props: ListProps) => <ul {...props} />,
	li: (props: ListItemProps) => <li {...props} />,
	em: (props: ComponentPropsWithoutRef<'em'>) => <em {...props} />,
	strong: (props: ComponentPropsWithoutRef<'strong'>) => <strong {...props} />,
	a: ({ href, children, ...props }: AnchorProps) => {
		const className = ''
		if (href?.startsWith('/')) {
			return (
				<Link href={href} className={className} {...props}>
					{children}
				</Link>
			)
		}
		if (href?.startsWith('#')) {
			return (
				<a href={href} className={className} {...props}>
					{children}
				</a>
			)
		}
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className={className}
				{...props}
			>
				{children}
			</a>
		)
	},

	code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
		return <code {...props}>{children}</code>
	},
	Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
		<table>
			<thead>
				<tr>
					{data.headers.map((header, index) => (
						<th key={`${index}-${header}`}>{header}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.rows.map((row, index) => (
					<tr key={`${index}-${row}`}>
						{row.map((cell, cellIndex) => (
							<td key={`${cellIndex}-${cell}`}>{cell}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	),
	blockquote: (props: BlockquoteProps) => <blockquote {...props} />,
}

declare global {
	type MDXProvidedComponents = typeof components
}

export function useMDXComponents(): MDXProvidedComponents {
	return components
}
