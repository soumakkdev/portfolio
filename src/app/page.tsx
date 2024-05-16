'use client'
import AboutMe from '@/components/About'
import Background from '@/components/Background'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Projects from '@/components/Projects'
import Work from '@/components/Work'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

export default function Home() {
	return (
		<>
			<main className="">
				<Canvas className="!absolute -z-10 h-screen" camera={{ position: [2, -3, 10] }}>
					<OrbitControls />
					<ambientLight intensity={Math.PI / 2} />
					<Background />
				</Canvas>
				<Header />

				<div className="max-w-6xl mx-auto px-6">
					<h1 className="text-7xl text-center py-32 font-semibold">
						I’M A FRONTEND DEVELOPER BASED ON INDIA. I MAKE BEAUTIFUL USER INTERFACES FOR DIGITAL PEOPLE
					</h1>
				</div>

				<AboutMe />
				<Projects />
				<Work />

				<Footer />
			</main>
		</>
	)
}
