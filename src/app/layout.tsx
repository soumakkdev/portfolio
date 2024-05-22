import { ThemeProvider } from 'next-themes'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
	title: 'Soumak Dutta',
	description: 'Frontend Developer trying to build the web',
	keywords: [
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
	],
	authors: [{ name: 'soumakkdev', url: 'https://github.com/soumakkdev' }],
	openGraph: {
		title: 'Soumak Dutta',
		description: 'Frontend Developer crafting web experiences',
		url: 'https://soumak.dev',
		type: 'website',
	},
	robots: 'index, follow',
	manifest: '/manifest.json',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="canonical" href="https://soumak.dev" />
			</head>
			<body className={poppins.className}>
				<ThemeProvider attribute="class" defaultTheme="dark" storageKey="theme" disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
