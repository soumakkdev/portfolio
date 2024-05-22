import { SocialLinks } from '@/lib/const'
import React from 'react'

export default function Footer() {
	return (
		<section className="max-w-6xl mx-auto px-4 mt-20 lg:mt-40 mb-10">
			<h2 className="text-3xl text-muted-foreground mb-8">stay in touch.</h2>

			<div className="flex justify-between flex-col gap-5 lg:flex-row mt-5 mb-16">
				<p>
					Drop a mail at{' '}
					<a href="mailto:soumakkdutta@gmail.com" className="underline">
						soumakkdutta@gmail.com
					</a>
				</p>

				<div className="flex gap-8">
					<a href={SocialLinks.Github} className="hover:underline" target="_blank" rel="noreferrer">
						<p>Github</p>
					</a>
					<a href={SocialLinks.LinkedIn} className="hover:underline" target="_blank" rel="noreferrer">
						<p>LinkedIn</p>
					</a>
					<a href="/resume.pdf" className="hover:underline" target="_blank" rel="noreferrer">
						<p>Resume</p>
					</a>
				</div>
			</div>

			<p className="text-center text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Soumak Dutta</p>
		</section>
	)
}
