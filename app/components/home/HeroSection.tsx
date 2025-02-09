export default function HeroSection() {
	return (
		<div className="max-w-6xl mx-auto px-6 relative">
			<div className="max-w-4xl  my-20">
				<h1 className="text-5xl lg:text-6xl leading-tight font-semibold mb-6">
					Frontend Developer crafting web experiences
				</h1>

				<p className="lg:text-xl leading-normal mb-12 text-gray-400">
					I’m Soumak, a frontend developer based in India, specializing in creating visually appealing and
					highly functional web experiences. With a keen eye for design, I bring both creativity and precision
					to every project.
				</p>

				{/* <div className="flex gap-2">
					<AnimatedButton href={SocialLinks.Github} target="_blank" rel="noreferrer" className="h-12 w-12">
						<GitHub size={24} />
					</AnimatedButton>

					<AnimatedButton href={SocialLinks.LinkedIn} target="_blank" rel="noreferrer" className="h-12 w-12">
						<LinkedIn size={24} />
					</AnimatedButton>

					<AnimatedButton href="/resume.pdf" target="_blank" rel="noreferrer" className="h-12 px-6">
						<FileText className="h-5 w-5 mr-2 -ml-0.5" />
						Resume
					</AnimatedButton>
				</div> */}
			</div>
		</div>
	)
}
