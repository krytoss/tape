type Props = {
	color?: "light" | "dark";
}

const ArrowDown: React.FC<Props> = ({ color }) => {
	return (
		<div className={`w-6 h-6 absolute bottom-[7rem] left-1/2 -translate-x-1/2 animate-bounce`}>
			<div
				className={`
					absolute rotate-45
					w-6 h-6
					border-b-2 border-r-2
					${color === "light" ? "border-white" : "border-slate-800"}
					inline-block}
				`}
			>
			</div>
		</div>
	)
}

export default ArrowDown