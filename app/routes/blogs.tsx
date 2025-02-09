import React from 'react'
import Footer from '~/components/layout/Footer'
import Header from '~/components/layout/Header'
import Section from '~/components/layout/Section'

export default function BlogsPage() {
	return (
		<div>
			<Header />

			<section className="max-w-6xl mx-auto px-6 my-20">
				<h2 className="text-4xl text-muted-foreground">Blogs</h2>
			</section>

			{/* <Footer /> */}
		</div>
	)
}
