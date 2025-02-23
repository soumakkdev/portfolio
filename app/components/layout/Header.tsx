import React from 'react'
import LinkButton from '../ui/LinkButton'
import Nav from './Nav'

export default function Header() {
	return (
		<header className="max-w-6xl mx-auto px-6 flex items-center justify-between py-10">
			<a href="/">
				<p className="font-semibold text-lg">soumak.</p>
			</a>

			<Nav />
		</header>
	)
}
