type Props = {
	children: React.ReactNode,
	cols: number,
	gap?: number,
	className?: string,
}

const Grid: React.FC<Props> = ({ children, cols, gap, className }) => {
	return (
		<div className={`grid grid-cols-${cols} gap-${gap ?? "4"} ${className}`}>
			{children}
		</div>
	)
}

export default Grid