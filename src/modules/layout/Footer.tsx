import { SocialLinks } from '@/lib/const'

export default function Footer() {
	return (
		<section className="max-w-6xl mx-auto px-4 mt-20 mb-12">
			<div className="flex justify-between flex-col gap-5 lg:flex-row">
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
					<a href="mailto:soumakkdutta@gmail.com" className="hover:underline">
						Email me
					</a>
				</div>

				<p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Soumak Dutta</p>
			</div>
		</section>
	)
}
