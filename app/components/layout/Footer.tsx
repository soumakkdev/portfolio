import LinkButton from '../ui/LinkButton'
import Nav from './Nav'

export const SocialLinks = {
	Github: 'https://github.com/soumakkdev',
	LinkedIn: 'https://www.linkedin.com/in/soumakkdutta/',
	X: 'https://x.com/soumakkdev',
}

export default function Footer() {
	return (
		<section className="max-w-6xl mx-auto px-6 mt-20 mb-8 border-t border-border pt-8">
			<div className="flex justify-between flex-col gap-5 lg:flex-row">
				<Nav />
				{/* <div className="flex gap-8">
					<LinkButton hideArrow href={SocialLinks.Github} target="_blank" rel="noreferrer" text="Github" />
					<LinkButton
						hideArrow
						href={SocialLinks.LinkedIn}
						target="_blank"
						rel="noreferrer"
						text="LinkedIn"
					/>
					<LinkButton hideArrow href="/resume.pdf" target="_blank" rel="noreferrer" text="Resume" />
					<LinkButton hideArrow href="mailto:soumakkdutta@gmail.com" text="Email me" />
				</div> */}

				<p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Soumak Dutta</p>
			</div>
		</section>
	)
}
