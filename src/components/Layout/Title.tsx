type Props = {
	children: React.ReactNode,
	color?: "light" | "dark",
	className?: string,
	size?: string,
	sizeLg?: string,
	sizeXl?: string
}

const Title: React.FC<Props> = ({ children, color = "dark", className, size = "8xl", sizeLg, sizeXl }) => {

	const colorClass = color === "light" ? "text-slate-200" : "text-slate-700";
	
	const lgClass = sizeLg ? `lg:text-${sizeLg}` : "";
	const xlClass = sizeXl ? `xl:text-${sizeXl}` : "";

	return (
		<h3 className={`text-${size} ${lgClass} ${xlClass} uppercase font-semibold block max-w-full ${className ?? ""} ${colorClass ?? ""}`}>
			{ children }
		</h3>
	)
}

export default Title