import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

interface ILinkButton extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	className?: string
	children: ReactNode
}

export default function LinkButton(props: ILinkButton) {
	const { children, className, ...rest } = props
	return (
		<a {...rest} className={cn('inline-flex text-sm items-center ', className)}>
			{children}
		</a>
	)
}
