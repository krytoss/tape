type Props = {
	to: string,
	fullSize?: boolean,
	children: React.ReactNode,
	center?: boolean,
	color?: string,
	className?: string,
	uppercase?: boolean
}

const Link: React.FC<Props> = ({ to, color = "white", fullSize = false, children, center, uppercase = true, className }) => {

	const colorClass = `text-${color}`;

	return (
		<a href={to} className={`
			${colorClass} text-2xl font-semibold ${ uppercase ? "uppercase" : "" }
			${fullSize ? "w-full h-full" : ""}
			${center ? "flex items-center justify-center" : ""}
			${className}
		`}>
			{children}
		</a>
	)

}

export default Link