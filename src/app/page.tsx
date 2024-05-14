import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Projects from '@/components/Projects'
import Work from '@/components/Work'

export default function Home() {
	return (
		<main>
			<Header />

			<div className="max-w-6xl mx-auto px-6">
				<h1 className="text-7xl text-center py-32 font-semibold">
					I’M A FRONTEND DEVELOPER BASED ON INDIA. I MAKE BEAUTIFUL USER INTERFACES FOR DIGITAL PEOPLE
				</h1>
			</div>

			<Projects />
			<Work />

			<Footer />
		</main>
	)
}
