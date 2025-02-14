import type { SVGProps } from 'react'
import MUI from '~/icons/MUI'
import Nextjs from '~/icons/Nextjs'
import Reactjs from '~/icons/Reactjs'
import Tailwind from '~/icons/Tailwind'
import TypeScript from '~/icons/TypeScript'
import Vite from '~/icons/Vite'

enum Tech {
	'React' = 'react',
	'Next' = 'next',
	'Tailwind' = 'tailwind',
	'MUI' = 'mui',
	'Vite' = 'vite',
	'TypeScript' = 'typescript',
}

export interface IProject {
	name: string
	description: string
	github?: string
	site?: string
	image?: string
	techstack: Tech[]
}

export const projects: IProject[] = [
	{
		name: 'PhoneDipo',
		description: 'An ecommerce platform to buy, sell and repair mobile phones',
		github: '',
		site: 'https://phonedipo.com/',
		image: '/images/phonedipo.png',
		techstack: [Tech.React, Tech.Next, Tech.TypeScript, Tech.MUI],
	},
	// {
	// 	name: 'Zylo',
	// 	description: 'Zylo is a task management application',
	// 	github: 'https://github.com/soumakkdev/zylo-app',
	// 	site: 'https://zylo-app.netlify.app/',
	// 	image: '/images/zylo.png',
	// 	techstack: [Tech.React, Tech.Next, Tech.TypeScript, Tech.Tailwind],
	// },
	{
		name: 'Nova Calendar',
		description: 'A simple calendar app to track events, inspired by Google calender',
		github: 'https://github.com/soumakkdev/calendar-app',
		site: 'https://nova-calendar.netlify.app/',
		image: '/images/nova.png',
		techstack: [Tech.React, Tech.Vite, Tech.TypeScript, Tech.Tailwind],
	},
	{
		name: 'Hue Picker',
		description: 'A simple color picker that shows a detailed color options',
		github: 'https://github.com/soumakkdev/color-picker',
		site: 'https://hue-picker.netlify.app/',
		image: '/images/hue.png',
		techstack: [Tech.React, Tech.Vite, Tech.TypeScript],
	},
]

export const techStackInfo: Record<
	Tech,
	{
		icon: React.FunctionComponent<SVGProps<SVGElement>>
		link: string
		title: string
	}
> = {
	[Tech.React]: {
		icon: Reactjs,
		link: 'https://react.dev/',
		title: 'React',
	},
	[Tech.Next]: {
		icon: Nextjs,
		link: 'https://nextjs.org/',
		title: 'Next.js',
	},
	[Tech.Tailwind]: {
		icon: Tailwind,
		link: 'https://tailwindcss.com/',
		title: 'Tailwind CSS',
	},
	[Tech.MUI]: {
		icon: MUI,
		link: 'https://mui.com/',
		title: 'Material UI',
	},
	[Tech.Vite]: {
		icon: Vite,
		link: 'https://vitejs.dev/',
		title: 'Vite',
	},
	[Tech.TypeScript]: {
		icon: TypeScript,
		link: 'https://www.typescriptlang.org/',
		title: 'TypeScript',
	},
}
