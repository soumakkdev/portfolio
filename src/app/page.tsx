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
			<main className="relative overflow-x-hidden">
				<div className="-z-10 absolute blur-[200px] rounded-full -top-[500px] -left-[100px] h-[200px] w-[1200px] rotate-[40deg] origin-left bg-[#298ccf]"></div>

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
