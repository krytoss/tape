import { Link } from "react-router";

type Props = {
	to: string,
	fullSize?: boolean,
	children: React.ReactNode,
	center?: boolean,
	color?: string,
	className?: string,
	uppercase?: boolean
}

const TapeLink: React.FC<Props> = ({ to, color = "white", fullSize = false, children, center, uppercase = true, className }) => {

	const colorClass = `text-${color}`;

	return (
		<Link to={to} className={`
			${colorClass} text-2xl font-semibold ${ uppercase ? "uppercase" : "" }
			${fullSize ? "w-full h-full" : ""}
			${center ? "flex items-center justify-center" : ""}
			${className}
		`}>
			{children}
		</Link>
	)

}

export default TapeLink