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

				<div className="max-w-7xl mx-auto px-6 py-32">
					<h1 className="text-[5rem] uppercase text-center font-bold text-blue-700 mix-blend-luminosity">
						<span className="text-white">Soumak</span> Dutta
					</h1>
					<h2 className="text-6xl text-center text-blue-700 mix-blend-luminosity font-semibold uppercase">
						Frontend <span className="text-white">Developer</span> crafting stunning <span className="text-white">digital</span> experiences with{' '}
						<span className="text-white">code</span>
					</h2>
				</div>

				<AboutMe />
				<Projects />
				<Work />

				<Footer />
			</main>
		</>
	)
}
