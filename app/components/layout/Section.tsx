import type { ReactNode } from 'react'

export default function Section(props: { title: string; description?: string; children: ReactNode }) {
	const { children, title, description } = props
	return (
		<section className="max-w-6xl mx-auto px-6 my-20 lg:my-60">
			<h2 className="text-4xl text-primary">{title}</h2>
			{description ? <p className="mt-4 mb-12 text-muted-foreground">{description}</p> : null}

			{children}
		</section>
	)
}
