import { Link } from 'lucide-react'
import GitHub from './icons/GitHub'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import AnimatedButton from './ui/AnimatedButton'

interface IProject {
	name: string
	description: string
	tags: string[]
	github?: string
	site?: string
}

const projects: IProject[] = [
	{
		name: 'PhoneDipo',
		description: 'An ecommerce platform to buy, sell and repair mobile phones. Its made with Next.js and MUI',
		tags: ['Next.js', 'MUI'],
		github: '',
		site: 'https://phonedipo.com/',
	},
	{
		name: 'Note Tree',
		description: 'It is a simple note taking app built with Next and Tailwind',
		tags: ['Next.js', 'Tailwind CSS', 'shadcn/ui'],
		github: 'https://github.com/soumakkdev/notes-app',
		site: 'https://note-tree.netlify.app/',
	},
	{
		name: 'Nova Calendar',
		description: 'A simple calendar app to track events, inspired by Google and Notion calender',
		tags: ['Vite', 'React', 'Tailwind CSS'],
		github: 'https://github.com/soumakkdev/calendar-app',
		site: 'https://nova-calendar.netlify.app/',
	},
	{
		name: 'Hue Picker',
		description: 'A simple color picker that shows a detailed color options',
		tags: ['Vite', 'React', 'Tailwind CSS'],
		github: 'https://github.com/soumakkdev/color-picker',
		site: 'https://hue-picker.netlify.app/',
	},
]

export default function Projects() {
	return (
		<section className="max-w-6xl mx-auto px-4 my-20 lg:my-60">
			<h2 className="text-3xl text-muted-foreground">projects.</h2>

			<div className="my-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
				{projects?.map((project, idx) => (
					<ProjectItem key={idx} project={project} />
				))}
			</div>
		</section>
	)
}

function ProjectItem({ project }: { project: IProject }) {
	return (
		<div className="bg-card p-8 rounded-3xl border flex flex-col">
			<p className="text-xl font-medium mb-2">{project.name}</p>
			<p className="my-4 text-sm text-muted-foreground">{project.description}</p>
			{/* <div className="flex gap-2 items-center">
				{project.tags?.map((tag, idx) => (
					<Badge key={idx} variant="default">
						{tag}
					</Badge>
				))}
			</div> */}

			<div className="flex items-end justify-end gap-2 mt-6 flex-1">
				{project.github ? (
					<AnimatedButton href={project.github} target="_blank" rel="noreferrer" className="h-10 pl-3 pr-3.5">
						<GitHub size="24" className="mr-2" />
						<span className="text-sm">GitHub</span>
					</AnimatedButton>
				) : null}

				{project.site ? (
					<AnimatedButton href={project.site} target="_blank" rel="noreferrer" className="h-10 pl-3 pr-3.5">
						<Link className="h-4 w-4 mr-2" />
						<span className="text-sm">Visit Site</span>
					</AnimatedButton>
				) : null}
			</div>
		</div>
	)
}
