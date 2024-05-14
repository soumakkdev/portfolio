import React from 'react'

export default function Header() {
	return (
		<header className="container flex items-center justify-between py-10">
			<p>soumak.</p>

			<nav>
				<ul className="flex items-center gap-10">
					<li>portfolio</li>
					<li>blog</li>
					<li>about me</li>
				</ul>
			</nav>
		</header>
	)
}
