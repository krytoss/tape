type Props = {
	children: React.ReactNode,
	color: "light" | "dark",
	className?: string,
	size?: string
}

const Title: React.FC<Props> = ({ children, color, className, size = "8xl" }) => {

	const colorClass = color === "light" ? "text-white" : "text-slate-700";

	return (
		<h3 className={`text-${size} uppercase font-semibold block max-w-full ${className ?? ""} ${colorClass ?? ""}`}>
			{ children }
		</h3>
	)
}

export default Title