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
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={poppins.className}>
				<ThemeProvider attribute="class" defaultTheme="dark" storageKey="theme" disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
