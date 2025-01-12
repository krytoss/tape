type Props = {
	className?: string,
	children: React.ReactNode,
}

const Section: React.FC<Props> = ({ className, children }) => {

	return (
		/* <section className={`h-screen w-screen overflow-hidden fixed top-0 opacity-0 ${className}`}>
			<div className="outer overflow-hidden relative h-screen w-screen">
				<div className="inner overflow-hidden relative h-screen w-screen">
					<div className="h-screen w-screen bg-stone-800 shadow-inner">
						{children}
					</div>
				</div>
			</div>
		</section> */
		<section className={`h-screen w-screen relative overflow-hidden shadow-[0_-5px_20px_0px_rgba(0,0,0,0.3)] ${className}`}>
			{children}
		</section>
	)

}

export default Section