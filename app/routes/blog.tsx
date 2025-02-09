import Markdoc from '@markdoc/markdoc'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { redirect, useLoaderData } from 'react-router'
import Header from '~/components/layout/Header'
import type { Route } from './+types/blog'

export async function loader({ params }: Route.LoaderArgs) {
	try {
		const fileSource = await fs.readFileSync(path.resolve('./blogs', `${params.slug}.md`), { encoding: 'utf-8' })

		const ast = Markdoc.parse(fileSource)

		const frontmatter = matter(fileSource)
		const metadata = frontmatter.data

		const content = Markdoc.transform(ast, {
			variables: {
				author: 'Soumak',
			},
		})

		const html = Markdoc.renderers.html(content)

		return { html, metadata }
	} catch (error) {
		return redirect('/404')
	}
}

export default function BlogPage() {
	const { html, metadata } = useLoaderData()
	return (
		<div>
			<Header />

			<div className="max-w-6xl mx-auto px-6 ">
				<h1 className="text-2xl">{metadata?.title}</h1>

				<section
					dangerouslySetInnerHTML={{
						__html: html,
					}}
				></section>
			</div>
		</div>
	)
}
