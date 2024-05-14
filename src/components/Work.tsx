import React from 'react'

export default function Work() {
	return (
		<section className="container my-28">
			<h2 className="text-4xl">work</h2>

			<div className="my-8">
				<WorkItem />
				<WorkItem />
			</div>
		</section>
	)
}

function WorkItem() {
	return (
		<div className="border-b flex items-center justify-between px-4 py-3 group">
			<div className="space-y-1.5">
				<p className="text-xl">Wit/Bit</p>
			</div>

			<span>2020-2024</span>
		</div>
	)
}
