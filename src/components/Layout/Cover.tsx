type Props = {
	children?: React.ReactNode,
	className?: string,
	center?: boolean,
}

const Cover: React.FC<Props> = ({ children, className, center = true }) => {
	return (
		<div className={`
			absolute left-0 top-0 right-0 bottom-0
			bg-stone-800 bg-opacity-80
			hover:bg-opacity-50
			transition-all duration-300
			${className ?? ""}
			${center ? "flex items-center justify-center" : ""}
		`}>
			{children}
		</div>
	)
}

export default Cover