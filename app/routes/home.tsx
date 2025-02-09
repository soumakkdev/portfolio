import Header from '~/components/layout/Header'
import type { Route } from './+types/home'
import HeroSection from '~/components/home/HeroSection'
import Projects from '~/components/home/Projects'
import AboutMe from '~/components/home/About'
import Footer from '~/components/layout/Footer'

export function meta({}: Route.MetaArgs) {
	return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to React Router!' }]
}

export default function Home() {
	return (
		<>
			<Header />

			<HeroSection />

			<Projects />

			<AboutMe />

			<Footer />
		</>
	)
}
