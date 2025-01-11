type Props = {
	className?: string,
	children: React.ReactNode,
}

const Section: React.FC<Props> = ({ className, children }) => {

	return (
		<section className={`h-screen w-screen ${className}`}>
			{children}
		</section>
	)

}

export default Section