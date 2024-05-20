import React, { ReactNode } from 'react'
import X from './icons/X'
import GitHub from './icons/GitHub'
import LinkedIn from './icons/LinkedIn'

export default function HeroSection() {
	return (
		<div className="container">
			<div className="max-w-4xl space-y-6 my-12">
				<h1 className="text-[5rem] leading-tight font-bold">Frontend Developer crafting digital experiences</h1>
				<p className="text-xl leading-relaxed">
					I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop
					technologies that empower regular people to explore space on their own terms.
				</p>

				<div className="flex gap-4">
					<SocialBtn>
						<X />
					</SocialBtn>
					<SocialBtn>
						<GitHub />
					</SocialBtn>
					<SocialBtn>
						<LinkedIn />
					</SocialBtn>
				</div>
			</div>
		</div>
	)
}

function SocialBtn({ children }: { children: ReactNode }) {
	return <button className="h-12 w-12 border rounded-full border-foreground fill-foreground grid place-content-center">{children}</button>
}
