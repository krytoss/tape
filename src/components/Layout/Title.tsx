type Props = {
	children: React.ReactNode,
	color?: "light" | "dark",
	className?: string,
	size?: string,
	sizeLg?: string
}

const Title: React.FC<Props> = ({ children, color = "dark", className, size = "8xl", sizeLg }) => {

	const colorClass = color === "light" ? "text-slate-200" : "text-slate-700";
	
	const sizeClass = sizeLg ? `lg:text-${sizeLg}` : "";

	return (
		<h3 className={`text-${size} ${sizeClass} uppercase font-semibold block max-w-full ${className ?? ""} ${colorClass ?? ""}`}>
			{ children }
		</h3>
	)
}

export default Title