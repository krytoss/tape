type Props = {
	children: React.ReactNode,
	cols: number,
	gap?: number,
	className?: string,
}

const Grid: React.FC<Props> = ({ children, cols, gap, className }) => {
	return (
		<div className={`w-full grid grid-cols-${cols} ${className ?? ""}`}>
			{children}
		</div>
	)
}

export default Grid