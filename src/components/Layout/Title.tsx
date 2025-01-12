type Props = {
	children: React.ReactNode,
	color: "light" | "dark",
}

const Title: React.FC<Props> = ({ children, color }) => {

	const className = color === "light" ? "text-white" : "text-slate-700";

	return (
		<h3 className={`text-8xl uppercase font-semibold block ${className}`}>
			{ children }
		</h3>
	)
}

export default Title