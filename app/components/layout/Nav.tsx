import React from 'react'
import LinkButton from '../ui/LinkButton'

export default function Nav() {
	return (
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
				<li>
					<LinkButton text="About" hideArrow href="#about"></LinkButton>
				</li>
			</ul>
		</nav>
	)
}
