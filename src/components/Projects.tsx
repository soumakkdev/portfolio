import { Link } from 'lucide-react'
import GitHub from './icons/GitHub'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

export default function Projects() {
	return (
		<section className="max-w-6xl mx-auto px-4 my-60">
			<h2 className="text-3xl text-muted-foreground">projects.</h2>

			<div className="my-8 grid grid-cols-2 gap-10">
				<ProjectItem id="1" />
				<ProjectItem id="2" />
				<ProjectItem id="3" />
			</div>
		</section>
	)
}

function ProjectItem({ id }: { id: string }) {
	return (
		<div className="bg-card p-8 rounded-3xl border">
			<p className="text-xl font-medium mb-2">Phone Dipo</p>
			<p className="my-4 text-sm text-muted-foreground">It is a ground breaking e-commerce platform with multi million dollar products.</p>
			<div className="flex gap-2 items-center">
				<Badge variant="default">Next.js</Badge>
				<Badge variant="default">Tailwind CSS</Badge>
			</div>

			<div className="flex items-center justify-end gap-2 mt-4">
				<Button variant="ghost" className="fill-primary pl-3 pr-3.5">
					<GitHub size="24" className="mr-2" />
					GitHub
				</Button>
				<Button variant="ghost" className="pl-3 pr-3.5">
					<Link className="h-4 w-4 mr-2" />
					Visit Site
				</Button>
			</div>
		</div>
	)
}
