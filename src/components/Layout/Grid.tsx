type Props = {
	children: React.ReactNode,
	cols?: number,
	colsXs?: number,
	colsSm?: number,
	colsMd?: number,
	colsLg?: number,
	colsXl?: number,
	gap?: number,
	className?: string,
}

const Grid: React.FC<Props> = ({ children, cols, colsXs, colsSm, colsMd, colsLg, colsXl, gap, className }) => {

	const classes = [
		"w-full grid",
		cols ? `grid-cols-${cols}` : "",
		colsXs ? `xs:grid-cols-${colsXs}` : "",
		colsSm ? `sm:grid-cols-${colsSm}` : "",
		colsMd ? `md:grid-cols-${colsMd}` : "",
		colsLg ? `lg:grid-cols-${colsLg}` : "",
		colsXl ? `xl:grid-cols-${colsXl}` : "",
		className ?? ""
	].join(" ");

	return (
		<div className={classes}>
			{children}
		</div>
	)
}

export default Grid