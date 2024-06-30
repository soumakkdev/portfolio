import clsx from 'clsx'
import React from 'react'

export default function AnimatedButton(props: any) {
	return <a {...props} className={clsx('relative inline-flex items-center justify-center rounded-2xl fill-foreground bg-card', props.className)}></a>
}
