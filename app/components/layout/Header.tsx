import React from 'react'
import LinkButton from '../ui/LinkButton'

export default function Header() {
	return (
		<header className="max-w-6xl mx-auto px-6 flex items-center justify-between py-10">
			<a href="/">
				<p className="font-semibold text-lg">soumak.</p>
			</a>

			<nav>
				<ul className="flex items-center gap-10 text-sm">
					<li>
						<LinkButton text="Home" hideArrow href="/"></LinkButton>
					</li>
					<li>
						<LinkButton text="Projects" hideArrow href="#projects"></LinkButton>
					</li>
					<li>
						<LinkButton text="Blogs" hideArrow href="/blogs"></LinkButton>
					</li>
				</ul>
			</nav>
		</header>
	)
}
