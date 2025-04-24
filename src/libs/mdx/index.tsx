import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'

const docsDirectory = path.join(process.cwd(), 'src/docs/helix-css')

export interface DocMetadata {
	title: string
	description?: string
	date?: string
}

export interface Doc {
	slug: string
	content: string
	metadata: DocMetadata
}

export async function getDocBySlug(slug: string): Promise<Doc | null> {
	try {
		const filePath = path.join(docsDirectory, `${slug}.mdx`)
		const fileContents = await fs.readFile(filePath, 'utf8')

		const { data, content } = matter(fileContents)

		return {
			slug,
			content,
			metadata: data as DocMetadata,
		}
	} catch (error) {
		return null
	}
}

export async function getAllDocs(): Promise<Doc[]> {
	const fileNames = await fs.readdir(docsDirectory)

	const allDocs = await Promise.all(
		fileNames
			.filter((fileName) => fileName.endsWith('.mdx'))
			.map(async (fileName) => {
				const slug = fileName.replace(/\.mdx$/, '')
				const doc = await getDocBySlug(slug)
				return doc
			}),
	)

	// Filtrar documentos nulos e ordenar por data (se existir)
	return allDocs
		.filter((doc): doc is Doc => doc !== null)
		.sort((a, b) => {
			if (a.metadata.date && b.metadata.date) {
				return (
					new Date(b.metadata.date).getTime() -
					new Date(a.metadata.date).getTime()
				)
			}
			return 0
		})
}
