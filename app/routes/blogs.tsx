import React from 'react'
import Footer from '~/components/layout/Footer'
import Header from '~/components/layout/Header'
import Section from '~/components/layout/Section'
import type { Route } from './+types/blogs'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { Link } from 'react-router'

interface IBlogsListMetadata {
	title: string
	slug: string
}

export async function loader(props: Route.LoaderArgs) {
	const blogsDir = path.join(process.cwd(), 'blogs')
	const files = fs.readdirSync(blogsDir)?.filter((file) => file?.endsWith('md'))

	const blogsMetadata = files?.map((file) => {
		const fileSource = fs.readFileSync(path.resolve(blogsDir, file), { encoding: 'utf-8' })
		const frontmatter = matter(fileSource)
		return {
			...frontmatter.data,
			slug: file?.split('.md')[0],
		} as IBlogsListMetadata
	})

	console.log(blogsMetadata)

	return { blogsMetadata }
}

export default function BlogsPage({ loaderData }: Route.ComponentProps) {
	const { blogsMetadata } = loaderData
	return (
		<div className="">
			<Header />

			<section className="max-w-6xl mx-auto px-6 my-20">
				<h2 className="text-4xl text-muted-foreground">Blogs</h2>

				{blogsMetadata?.map((blog) => (
					<Link to={`/blogs/${blog.slug}`}>
						<div className="p-4">{blog.title}</div>
					</Link>
				))}
			</section>

			<Footer />
		</div>
	)
}
