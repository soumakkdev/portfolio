'use client'
import AboutMe from '@/components/About'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'

export default function Home() {
	return (
		<>
			<main className="">
				<Header />

				<HeroSection />

				<AboutMe />

				<Footer />
			</main>
		</>
	)
}
