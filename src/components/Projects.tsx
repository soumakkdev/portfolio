import React from 'react'

export default function Projects() {
	return (
		<section className="container my-28">
			<h2 className="text-4xl">projects</h2>

			<div className="my-8">
				<ProjectItem />
				<ProjectItem />
			</div>
		</section>
	)
}

function ProjectItem() {
	return (
		<div className="border-b flex items-center justify-between px-4 py-3 group">
			<div className="space-y-1.5">
				<p className="text-xl">Phone Dipo</p>
				<div className="flex gap-2 items-center">
					<div className="border rounded-full text-sm px-1">Next.js</div>
					<div className="border rounded-full text-sm px-1">Tailwind CSS</div>
				</div>
			</div>

			<svg
				className="-rotate-45 group-hover:rotate-0 transition-transform duration-300"
				xmlns="http://www.w3.org/2000/svg"
				height="32px"
				viewBox="0 -960 960 960"
				width="32px"
				fill="#e8eaed"
			>
				<path d="m600-200-57-56 184-184H80v-80h647L544-704l56-56 280 280-280 280Z" />
			</svg>
		</div>
	)
}
