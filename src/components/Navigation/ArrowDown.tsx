type Props = {
	color?: "light" | "dark";
}

const ArrowDown: React.FC<Props> = ({ color }) => {
	return (
		<div className={`w-6 h-6 absolute bottom-[2rem] left-1/2 transform -translate-x-1/2`}>
			<div className='w-6 h-6 absolute left-0 top-0 animate-bounce'>
				<div
					className={`
						absolute rotate-45
						w-6 h-6
						border-b-2 border-r-2
						${color === "light" ? "border-white" : "border-slate-800"}
					`}
				/>
			</div>
		</div>
	)
}

export default ArrowDown