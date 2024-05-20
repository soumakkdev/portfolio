import React from 'react'

export default function AboutMe() {
	return (
		<section className="container my-40">
			<h2 className="text-3xl text-muted-foreground">about.</h2>

			<div className="grid grid-cols-2 gap-20 my-10">
				<article className="text-lg leading-normal space-y-5">
					<p>
						I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop
						technologies that empower regular people to explore space on their own terms.
					</p>
					<p>
						I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop
						technologies that empower regular people to explore space on their own terms.
					</p>
					<p>
						I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop
						technologies that empower regular people to explore space on their own terms.
					</p>
				</article>
				<figure className="px-20">
					<img src="/avatar.jpg" alt="Me" className="rounded-3xl" />
				</figure>
			</div>
		</section>
	)
}
