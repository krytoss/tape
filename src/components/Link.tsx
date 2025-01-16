type Props = {
	to: string,
	fullSize?: boolean,
	children: React.ReactNode,
	center?: boolean,
}

const Link: React.FC<Props> = ({ to, fullSize = false, children, center }) => {

	return (
		<a href={to} className={`
			text-white text-2xl font-semibold uppercase
			${fullSize ? "w-full h-full" : ""}
			${center ? "flex items-center justify-center" : ""}
		`}>
			{children}
		</a>
	)

}

export default Link