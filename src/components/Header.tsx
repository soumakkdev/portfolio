import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import React from 'react'

export default function Header() {
	const { setTheme, theme } = useTheme()

	function toggleTheme() {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}
	return (
		<header className="container flex items-center justify-between py-10">
			<p className="font-semibold text-lg">soumak.</p>

			<button className="h-10 w-10 rounded-full border grid place-content-center hover:bg-muted" onClick={toggleTheme}>
				{theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
			</button>
		</header>
	)
}
