import React from 'react'

export default function AboutMe() {
	return (
		<section className="max-w-6xl mx-auto px-4 my-60">
			<h2 className="text-3xl text-muted-foreground">about.</h2>

			<div className="grid grid-cols-2 gap-20 my-10">
				<article className="text-lg leading-normal space-y-5">
					<p>
						Hello, I&apos;m Soumak Dutta, a Frontend Developer with a passion for creating visually appealing websites that users loves to use. I
						have 3+ years of experience of building high quality enterprise applications, modern ecommerce platform. I work with React.js, Next.js,
						Tailwind CSS, TypeScript.
					</p>
					<p>
						I love building websites that are good looking and user feel great using it. I started building websites when I was in college. Since
						then I have worked with companies, startups helping them build their platform. I believe in simplicity.
					</p>

					<p>
						Beside coding I like to ride my bike. I have a Pulsar NS 160. Also I do boxing training. Eat healthy, workout, be happy, work life
						balance and family thats what life is all about to me.
					</p>
				</article>
				<figure className="px-20">
					<img src="/avatar.jpg" alt="Me" className="rounded-3xl" />
				</figure>
			</div>
		</section>
	)
}
