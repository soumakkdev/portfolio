import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import { cn } from '~/lib/utils'

interface ILinkButton extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	className?: string
	text: string
	hideArrow?: boolean
}

export default function LinkButton(props: ILinkButton) {
	const { children, className, hideArrow, text, href, ...rest } = props
	return (
		<Link
			to={href ?? '#'}
			{...rest}
			className={cn('inline-flex text-sm items-center relative group/link', className)}
		>
			<span>{text}</span>
			{!hideArrow && (
				<ArrowUpRight className="h-5 w-5 ml-2 transition-transform duration-300 rotate-45 group-hover/link:rotate-0" />
			)}
			<div className="bg-white h-[1px] w-full absolute left-0 top-[110%] scale-x-0 transition-transform duration-500 group-hover/link:scale-x-100 group-hover/link:origin-left origin-right"></div>
		</Link>
	)
}
