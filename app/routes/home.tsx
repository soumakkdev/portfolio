import Header from '~/components/layout/Header'
import type { Route } from './+types/home'
import HeroSection from '~/components/home/HeroSection'
import Projects from '~/components/home/Projects'
import AboutMe from '~/components/home/About'
import Footer from '~/components/layout/Footer'

const keywords = [
	'Soumak',
	'Dutta',
	'Soumak Dutta',
	'soumak dev',
	'soumakkdev',
	'soumak.dev',
	'frontend',
	'developer',
	'frontend developer',
	'react.js',
	'next.js',
	'javascript',
	'typescript',
	'css',
	'tailwind.css',
]

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Soumak Dutta' },
		{ name: 'description', content: 'Frontend Developer trying to build the web' },
		{ name: 'keywords', content: keywords.join(',') },
	]
}

const metadata = {
	title: 'Soumak Dutta',
	description: 'Frontend Developer trying to build the web',
	authors: [{ name: 'soumakkdev', url: 'https://github.com/soumakkdev' }],
	openGraph: {
		title: 'Soumak Dutta | Frontend Developer Portfolio',
		description:
			'Portfolio of Soumak Dutta, an experienced web developer specializing in creating visually appealing and highly functional web experiences',
		url: 'https://soumak.dev',
		type: 'website',
	},
	robots: 'index, follow',
	manifest: '/manifest.json',
}

export default function Home() {
	return (
		<div className="relative">
			<canvas id="hero-canvas" className="absolute top-0 left-0 right-0 h-screen overflow-hidden w-full"></canvas>

			<Header />

			<HeroSection />

			<Projects />

			<AboutMe />

			<Footer />
		</div>
	)
}
