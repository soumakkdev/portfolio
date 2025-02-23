import React from 'react'
import Section from '../layout/Section'
import GitHub from '~/icons/GitHub'
import LinkedIn from '~/icons/LinkedIn'
import X from '~/icons/X'
import Mail from '~/icons/Mail'
import { Link } from 'react-router'
import { SocialLinks } from '../layout/Footer'

export default function AboutMe() {
	return (
		<Section title="about me">
			<div id="#about" className="grid grid-cols-1 lg:grid-cols-2 gap-12 my-10">
				<article className="leading-relaxed space-y-5 text-base lg:text-lg">
					<p>
						Hello, I&apos;m Soumak Dutta, a seasoned Frontend Developer with over 4 years of experience in
						creating visually appealing and user-friendly websites. I specialize in building high-quality
						enterprise applications and modern e-commerce platforms using React.js, Next.js, Tailwind CSS,
						and TypeScript.
					</p>
					<p>
						My journey in web development began in college. I am passionate about crafting websites that are
						not only aesthetically pleasing but also offer a seamless user experience, with a strong belief
						in the power of simplicity.
					</p>

					<p>
						Outside of my professional life, I enjoy riding my bike and practicing boxing. Maintaining a
						healthy lifestyle, working out, and achieving a balanced work-life are essential to me.
					</p>

					<ul className="space-y-5 mt-12 text-base">
						<li>
							<Link
								to={SocialLinks.Github}
								target="_blank"
								className="flex items-center gap-3 fill-white hover:text-primary"
							>
								<GitHub />
								<span>Checkout my GitHub</span>
							</Link>
						</li>
						<li>
							<Link
								to={SocialLinks.LinkedIn}
								target="_blank"
								className="flex items-center gap-3 fill-white hover:text-primary"
							>
								<LinkedIn />
								<span>Connect on LinkedIn</span>
							</Link>
						</li>
						<li>
							<Link
								to={SocialLinks.X}
								target="_blank"
								className="flex items-center gap-3 fill-white hover:text-primary"
							>
								<X />
								<span>Follow on X</span>
							</Link>
						</li>
						<li>
							<a
								href="mailto:soumakkdutta@gmail.com"
								className="flex items-center gap-3 hover:text-primary"
							>
								<Mail />
								<span>Send me a mail</span>
							</a>
						</li>
					</ul>
				</article>
				<figure className="px-10 lg:px-16 col-start-1 row-start-1 lg:col-start-auto lg:row-start-auto">
					<img src="/images/avatar.jpg" alt="me" className="rounded-3xl" />
				</figure>
			</div>
		</Section>
	)
}
