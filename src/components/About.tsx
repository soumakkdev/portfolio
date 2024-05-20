import React from 'react'

export default function AboutMe() {
	return (
		<section className="max-w-6xl mx-auto px-4 my-60">
			<h2 className="text-3xl text-muted-foreground">about.</h2>

			<div className="grid grid-cols-2 gap-20 my-10">
				<article className="text-lg leading-normal space-y-5">
					<p>I&apos;m Soumak Dutta.</p>
				</article>
				<figure className="px-20">
					<img src="/avatar.jpg" alt="Me" className="rounded-3xl" />
				</figure>
			</div>
		</section>
	)
}
