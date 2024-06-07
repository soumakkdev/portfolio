import clsx from 'clsx'
import React from 'react'

export default function AnimatedButton(props) {
	return (
		<a
			{...props}
			className={clsx(
				'relative inline-flex items-center justify-center rounded-full border fill-foreground border-blue-100/20 bg-blue-200/10 outline-none ring-amber-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-amber-100 after:bg-opacity-10 after:blur-md hover:border-amber-200/40 hover:text-amber-300 hover:fill-amber-300 after:hover:bg-opacity-15 focus:ring-2',
				props.className
			)}
		></a>
	)
}
