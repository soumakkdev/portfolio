'use client'
import AboutMe from '@/modules/home/About'
import Footer from '@/modules/layout/Footer'
import Header from '@/modules/layout/Header'
import HeroSection from '@/modules/home/HeroSection'
import Projects from '@/modules/home/Projects'
import Work from '@/modules/home/Work'

export default function Home() {
	return (
		<>
			<main>
				<Header />

				<HeroSection />

				<Projects />

				<Work />

				<AboutMe />

				<Footer />
			</main>
		</>
	)
}
