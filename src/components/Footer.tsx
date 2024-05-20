import React from 'react'

export default function Footer() {
	return (
		<section className="container mt-40 mb-5">
			<h2 className="text-3xl text-muted-foreground mb-8">stay in touch.</h2>

			<div className="flex justify-between mb-10">
				<div>
					<p>LinkedIn</p>
					<p>Github</p>
				</div>
				<p>soumakkdutta@gmail.com</p>
			</div>

			<p className="text-center text-xs text-muted-foreground">@ {new Date().getFullYear()} Soumak Dutta</p>
		</section>
	)
}
