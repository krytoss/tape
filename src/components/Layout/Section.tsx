type Props = {
	className?: string,
	children: React.ReactNode,
	fullHeight?: boolean,
	id?: string,
	ref?: React.Ref<HTMLDivElement>,
}

const Section: React.FC<Props> = ({ id, className, children, ref, fullHeight = true }) => {

	return (
		/* <section className={`h-screen w-screen overflow-hidden fixed top-0 opacity-0 ${className}`}>
			<div className="outer overflow-hidden relative h-screen w-screen">
				<div className="inner overflow-hidden relative h-screen w-screen">
					<div className="h-screen w-screen bg-stone-800 shadow-inner">
						{children}
					</div>
				</div>
			</div>
		</section>
		 shadow-[0_-5px_20px_0px_rgba(0,0,0,0.3)]
		*/
		<section ref={ref} id={id} className={`${fullHeight && 'min-h-screen'} w-screen relative overflow-hidden flex flex-col ${className}`}>
			{children}
		</section>
	)

}

export default Section