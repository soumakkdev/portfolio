import { SocialLinks } from '@/lib/const'
import { FileText } from 'lucide-react'
import { ReactNode } from 'react'
import GitHub from './icons/GitHub'
import LinkedIn from './icons/LinkedIn'

export default function HeroSection() {
	return (
		<div className="max-w-6xl mx-auto px-4">
			<div className="max-w-4xl space-y-6 my-20">
				<h1 className="text-[4.2rem] leading-tight font-bold">Frontend Developer crafting web experiences</h1>
				<p className="text-xl leading-relaxed">
					I’m Soumak, a passionate frontend developer based in India. I create visually appealing and highly functional web experiences with a keen
					eye for design.
				</p>

				<div className="flex gap-4">
					<a href={SocialLinks.Github} target="_blank" rel="noreferrer">
						<SocialBtn>
							<GitHub />
						</SocialBtn>
					</a>

					<a href={SocialLinks.LinkedIn} target="_blank" rel="noreferrer">
						<SocialBtn>
							<LinkedIn />
						</SocialBtn>
					</a>

					<a href="/resume.pdf" target="_blank" rel="noreferrer">
						<button className="h-12 px-5 border rounded-full border-primary hover:bg-accent inline-flex items-center">
							<FileText className="h-5 w-5 mr-2 -ml-0.5" />
							Resume
						</button>
					</a>
				</div>
			</div>
		</div>
	)
}

function SocialBtn({ children }: { children: ReactNode }) {
	return <button className="h-12 w-12 border rounded-full border-primary hover:bg-accent fill-foreground grid place-content-center">{children}</button>
}
