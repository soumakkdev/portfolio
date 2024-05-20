import { Link } from 'lucide-react'
import GitHub from './icons/GitHub'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

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
		description: 'It is a ground breaking e-commerce platform with multi million dollar products.',
		tags: ['Next.js', 'MUI'],
		github: '',
		site: '',
	},
]

export default function Projects() {
	return (
		<section className="max-w-6xl mx-auto px-4 my-60">
			<h2 className="text-3xl text-muted-foreground">projects.</h2>

			<div className="my-8 grid grid-cols-2 gap-10">
				{projects?.map((project, idx) => (
					<ProjectItem key={idx} project={project} />
				))}
			</div>
		</section>
	)
}

function ProjectItem({ project }: { project: IProject }) {
	return (
		<div className="bg-card p-8 rounded-3xl border">
			<p className="text-xl font-medium mb-2">{project.name}</p>
			<p className="my-4 text-sm text-muted-foreground">{project.description}</p>
			<div className="flex gap-2 items-center">
				{project.tags?.map((tag, idx) => (
					<Badge key={idx} variant="default">
						{tag}
					</Badge>
				))}
			</div>

			<div className="flex items-center justify-end gap-2 mt-4">
				{project.github ? (
					<Button variant="ghost" className="fill-primary pl-3 pr-3.5">
						<GitHub size="24" className="mr-2" />
						GitHub
					</Button>
				) : null}

				{project.site ? (
					<Button variant="ghost" className="pl-3 pr-3.5">
						<Link className="h-4 w-4 mr-2" />
						Visit Site
					</Button>
				) : null}
			</div>
		</div>
	)
}
