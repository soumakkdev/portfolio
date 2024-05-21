import React from 'react'

export default function Footer() {
	return (
		<section className="max-w-6xl mx-auto px-4 mt-40 mb-10">
			<h2 className="text-3xl text-muted-foreground mb-8">stay in touch.</h2>

			<div className="flex justify-between  mt-5 mb-12">
				<p>
					Drop a mail at{' '}
					<a href="mailto:soumakkdutta@gmail.com" className="underline">
						soumakkdutta@gmail.com
					</a>
				</p>

				<div className="flex gap-8">
					<p>Github</p>
					<p>LinkedIn</p>
					<p>Resume</p>
				</div>
			</div>

			<p className="text-center text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Soumak Dutta</p>
		</section>
	)
}
