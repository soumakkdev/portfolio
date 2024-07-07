import clsx from 'clsx'
import React from 'react'
import { motion } from 'framer-motion'

export default function AnimatedButton(props: any) {
	return (
		<motion.a
			{...props}
			className={clsx('relative text-sm inline-flex items-center justify-center rounded-full fill-foreground bg-muted', props.className)}
		></motion.a>
	)
}
