type Props = {
	children: React.ReactNode,
	cols?: number,
	colsXs?: number,
	colsSm?: number,
	colsMd?: number,
	colsLg?: number,
	colsXl?: number,
	cols2Xl?: number,
	gap?: number,
	className?: string,
}

const Grid: React.FC<Props> = ({ children, cols, colsXs, colsSm, colsMd, colsLg, colsXl, cols2Xl, gap, className }) => {

	const classes = [
		"w-full grid",
		cols ? `grid-cols-${cols}` : "",
		colsXs ? `xs:grid-cols-${colsXs}` : "",
		colsSm ? `sm:grid-cols-${colsSm}` : "",
		colsMd ? `md:grid-cols-${colsMd}` : "",
		colsLg ? `lg:grid-cols-${colsLg}` : "",
		colsXl ? `xl:grid-cols-${colsXl}` : "",
		cols2Xl ? `2xl:grid-cols-${cols2Xl}` : "",
		gap ? `gap-${gap}` : "",
		className ?? ""
	].join(" ");

	return (
		<div className={classes}>
			{children}
		</div>
	)
}

export default Grid