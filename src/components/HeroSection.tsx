import { SocialLinks } from '@/lib/const'
import { FileText } from 'lucide-react'
import { ReactNode } from 'react'
import GitHub from './icons/GitHub'
import LinkedIn from './icons/LinkedIn'

export default function HeroSection() {
	return (
		<div className="max-w-6xl mx-auto px-4">
			<div className="max-w-4xl  my-20">
				<h1 className="text-5xl lg:text-[4.2rem] leading-tight font-bold mb-6">Frontend Developer crafting web experiences</h1>

				<p className="lg:text-xl leading-relaxed mb-12">
					I’m Soumak, a frontend developer based in India, specializing in creating visually appealing and highly functional web experiences. With a
					keen eye for design, I bring both creativity and precision to every project.
				</p>

				<div className="flex gap-4">
					<a
						href={SocialLinks.Github}
						target="_blank"
						rel="noreferrer"
						className="h-12 w-12 border rounded-full border-primary hover:bg-accent fill-foreground grid place-content-center"
					>
						<GitHub />
					</a>

					<a
						href={SocialLinks.LinkedIn}
						target="_blank"
						rel="noreferrer"
						className="h-12 w-12 border rounded-full border-primary hover:bg-accent fill-foreground grid place-content-center"
					>
						<LinkedIn />
					</a>

					<a
						href="/resume.pdf"
						target="_blank"
						rel="noreferrer"
						className="h-12 px-5 border rounded-full border-primary hover:bg-accent inline-flex items-center"
					>
						<FileText className="h-5 w-5 mr-2 -ml-0.5" />
						Resume
					</a>
				</div>
			</div>
		</div>
	)
}
