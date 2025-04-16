type Props = {
	children: React.ReactNode,
	color?: "light" | "dark",
	className?: string,
	size?: string,
	sizeMd?: string,
	sizeLg?: string,
	sizeXl?: string,
	size2Xl?: string,
}

const Title: React.FC<Props> = ({ children, color = "dark", className, size = "8xl", sizeMd, sizeLg, sizeXl, size2Xl }) => {

	const colorClass = color === "light" ? "text-slate-200" : "text-slate-700";
	
	const mdClass = sizeMd ? `md:text-${sizeMd}` : "";
	const lgClass = sizeLg ? `lg:text-${sizeLg}` : "";
	const xlClass = sizeXl ? `xl:text-${sizeXl}` : "";
	const xxlClass = size2Xl ? `2xl:text-${size2Xl}` : "";

	return (
		<h3 className={`text-${size} ${mdClass} ${lgClass} ${xlClass} ${xxlClass} uppercase font-semibold block max-w-full ${className ?? ""} ${colorClass ?? ""}`}>
			{ children }
		</h3>
	)
}

export default Title