import { ArrowUpRight } from 'lucide-react'
import LinkButton from '../../components/ui/LinkButton'
import Section from '../../components/ui/Section'

interface IProject {
	name: string
	description: string
	github?: string
	site?: string
}

const projects: IProject[] = [
	{
		name: 'PhoneDipo',
		description: 'An ecommerce platform to buy, sell and repair mobile phones',
		github: '',
		site: 'https://phonedipo.com/',
	},
	{
		name: 'Zylo',
		description: 'Zylo is a all in one app for task management, notes and todo list.',
		github: 'https://github.com/soumakkdev/zylo-app',
		site: 'https://zylo-app.netlify.app/',
	},
	{
		name: 'Nova Calendar',
		description: 'A simple calendar app to track events, inspired by Google and Notion calender',
		github: 'https://github.com/soumakkdev/calendar-app',
		site: 'https://nova-calendar.netlify.app/',
	},
	{
		name: 'Hue Picker',
		description: 'A simple color picker that shows a detailed color options',
		github: 'https://github.com/soumakkdev/color-picker',
		site: 'https://hue-picker.netlify.app/',
	},
]

export default function Projects() {
	return (
		<Section title="projects" description="some of my hand picked projects">
			<div className="my-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:-mx-8">
				{projects?.map((project, idx) => (
					<ProjectItem key={idx} project={project} />
				))}
			</div>
		</Section>
	)
}

function ProjectItem({ project }: { project: IProject }) {
	return (
		<div className="bg-card p-8 rounded-3xl flex flex-col">
			{/* <img src="https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ" className="rounded-2xl mb-6" /> */}

			<p className="text-2xl font-medium mb-2">{project.name}</p>
			<p className="mb-4 text-muted-foreground">{project.description}</p>

			<div className="flex items-end gap-6 mt-6 flex-1">
				{project.github ? (
					<LinkButton href={project.github} target="_blank" rel="noreferrer">
						<span>GitHub</span>
						<ArrowUpRight className="h-5 w-5 ml-2" />
					</LinkButton>
				) : null}

				{project.site ? (
					<LinkButton href={project.site} target="_blank" rel="noreferrer">
						<span>Visit site</span>
						<ArrowUpRight className="h-5 w-5 ml-2" />
					</LinkButton>
				) : null}
			</div>
		</div>
	)
}
