import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

export default function Projects() {
	return (
		<section className="container my-28">
			<h2 className="text-4xl">projects.</h2>

			<div className="my-8">
				<Accordion type="multiple">
					<ProjectItem id="1" />
					<ProjectItem id="2" />
					<ProjectItem id="3" />
				</Accordion>
			</div>
		</section>
	)
}

function ProjectItem({ id }: { id: string }) {
	return (
		<AccordionItem value={id}>
			<AccordionTrigger className="py-3 px-2">
				<div className="flex flex-col items-start">
					<p className="text-xl mb-2">Phone Dipo</p>
					<div className="flex gap-2 items-center">
						<Badge variant="outline">Next.js</Badge>
						<Badge variant="outline">Tailwind CSS</Badge>
					</div>
				</div>
			</AccordionTrigger>
			<AccordionContent>
				<p>It is a ground breaking e-commerce platform with multi million dollar products.</p>
				<div className="flex items-center gap-2 mt-4">
					<Button variant="outline">GitHub</Button>
					<Button variant="outline">Visit Site</Button>
				</div>
			</AccordionContent>
		</AccordionItem>
	)
}
