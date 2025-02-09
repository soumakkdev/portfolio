import React from 'react'
import Section from '../../components/ui/Section'

export default function Work() {
	return (
		<Section title="work experience">
			<div className="my-8 space-y-4 lg:-mx-8">
				<WorkItem />
			</div>
		</Section>
	)
}

function WorkItem() {
	return (
		<div className="flex items-center justify-between p-8 group bg-card rounded-3xl">
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
				<span className="text-xl text-muted-foreground">2020-Now</span>

				<div className="space-y-1.5 col-span-2">
					<p className="text-2xl">Front end Developer at Wit/Bit</p>
					<p className="text-sm text-muted-foreground">
						Worked on a range of projects from enterprise Saas applications to E-Commerce websites. Worked on a range of projects from
						enterprise Saas applications to E-Commerce websites.
					</p>
				</div>
			</div>
		</div>
	)
}
