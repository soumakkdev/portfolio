import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { ThemeProvider } from '@/lib/theme'

const HKGroteskWide = localFont({
	src: [
		{
			path: '../fonts/HKGroteskWide-Regular.otf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../fonts/HKGroteskWide-Medium.otf',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../fonts/HKGroteskWide-SemiBold.otf',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../fonts/HKGroteskWide-Bold.otf',
			weight: '700',
			style: 'normal',
		},
	],
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
		<html lang="en">
			<body className={`${HKGroteskWide.className}`}>
				<ThemeProvider defaultTheme="dark" storageKey="theme">
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
