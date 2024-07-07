import { cn } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'
import React, { ReactNode } from 'react'

interface ILinkButton extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	className?: string
	text: string
	hideArrow?: boolean
}

export default function LinkButton(props: ILinkButton) {
	const { children, className, hideArrow, text, ...rest } = props
	return (
		<a {...rest} className={cn('inline-flex text-sm items-center relative group', className)}>
			<span>{text}</span>
			{!hideArrow && <ArrowUpRight className="h-5 w-5 ml-2 transition-transform duration-300 rotate-45 group-hover:rotate-0" />}
			<div className="bg-foreground h-[1px] w-full absolute left-0 top-[110%] scale-x-0 transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left origin-right"></div>
		</a>
	)
}
