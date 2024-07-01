import { SocialLinks } from '@/lib/const'
import { FileText } from 'lucide-react'
import GitHub from '../../components/icons/GitHub'
import LinkedIn from '../../components/icons/LinkedIn'
import AnimatedButton from '../../components/ui/AnimatedButton'

export default function HeroSection() {
	return (
		<div className="max-w-6xl mx-auto px-4 relative">
			<div className="-z-10 absolute blur-[200px] rounded-full -top-[500px] -left-[100px] h-[200px] w-[1200px] rotate-[30deg] origin-left bg-[#298ccf]"></div>

			<div className="max-w-4xl  my-20">
				<h1 className="text-5xl lg:text-[4.2rem] leading-tight font-bold mb-6">Frontend Developer crafting web experiences</h1>

				<p className="lg:text-xl leading-relaxed mb-12 text-muted-foreground">
					I’m Soumak, a frontend developer based in India, specializing in creating visually appealing and highly functional web experiences. With a
					keen eye for design, I bring both creativity and precision to every project.
				</p>

				<div className="flex gap-4">
					<AnimatedButton href={SocialLinks.Github} target="_blank" rel="noreferrer" className="h-12 w-12">
						<GitHub />
					</AnimatedButton>

					<AnimatedButton href={SocialLinks.LinkedIn} target="_blank" rel="noreferrer" className="h-12 w-12">
						<LinkedIn />
					</AnimatedButton>

					<AnimatedButton href="/resume.pdf" target="_blank" rel="noreferrer" className="h-12 px-4">
						<FileText className="h-5 w-5 mr-2 -ml-0.5" />
						Resume
					</AnimatedButton>
				</div>
			</div>
		</div>
	)
}
