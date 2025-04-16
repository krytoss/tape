import { useEffect, useRef } from "react"
import Grid from "../components/Layout/Grid"
import Section from "../components/Layout/Section"
import Title from "../components/Layout/Title"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import PersonCard from "../components/Team/PersonCard"

gsap.registerPlugin(ScrollTrigger)

const Team: React.FC = () => {

	const leftRef = useRef(null)
	const quoteRef = useRef(null)

	useEffect(() => {
		const elLeft = leftRef.current;
		const elQuote = quoteRef.current;

		gsap.fromTo(elLeft, {
			opacity: 0,
			x: -100
		}, {
			opacity: 1,
			x: 0,
			duration: 1,
			scrollTrigger: {
				trigger: '#team',
				start: "top 50%",
				end: "bottom 1%",
				toggleActions: "play reverse play reverse",
				once: false,
			}
		})

		gsap.fromTo(elQuote, {
			opacity: 0,
			x: -200
		}, {
			opacity: 1,
			x: 0,
			duration: 0.5,
			scrollTrigger: {
				trigger: '#team',
				start: "top 95%",
				end: "bottom 5%",
				toggleActions: "play reverse play reverse",
				once: false,
			}
		})

		gsap.fromTo(".person-card",
			{
			  y: 100,
			  opacity: 0,
			},
			{
			  y: 0,
			  opacity: 1,
			  duration: 0.5,
			  stagger: 0.05,
			  scrollTrigger: {
				  trigger: '#team',
				  start: "top 80%",
				  end: "bottom 5%",
				  toggleActions: "play reverse play reverse",
				  once: false
			  }
			}
		);
	})


	return (
		<Section id="team" className="relative bg-white !h-auto min-h-screen">
			<img src="./hexagon.jpg" className="z-10 absolute right-0 bottom-0" />
			<div className="w-full min-h-screen bg-gray-300 bg-opacity-90 z-20 relative pb-20 2xl:pb-0 h-auto flex flex-col items-center justify-center">
				<Grid cols={1} colsMd={1} cols2Xl={3}>
					<div ref={leftRef} className="py-10 2xl:pl-40 2xl:pr-10 text-center justify-center items-center flex width-full flex-col">
						<Title color="dark">
							Team
						</Title>
						<p className="text-slate-700 font-semibold mt-10 text-md xl:text-xl">
							Spoznajte ľudí, ktorí budú s vami komunikovať
						</p>
					</div>
					<div className="col-span-3 2xl:col-span-2 py-10 2xl:pl-10 2xl:pr-28 justify-center items-center flex text-slate-700">
						<Grid cols={1} colsLg={3} gap={0} className="w-full flex justify-center items-center">
							<div className="p-6 xl:p-8 w-4/5 sm:w-3/5 md:w-1/2 2xl:w-full lg:w-full mx-auto h-full">
								<PersonCard
									img="./team/tana.png"
									name="Tatiana Reindlová"
									position="konateľ, strategický manažér"
									move={true}
								/>
							</div>
							<div className="p-6 xl:p-8 w-4/5 sm:w-3/5 md:w-1/2 2xl:w-full lg:w-full mx-auto h-full">
								<PersonCard
									img="./team/peter.png"
									name="Peter Reindl"
									position="konateľ, obchodný manažér"
								/>
							</div>
							<div className="p-6 xl:p-8 w-4/5 sm:w-3/5 md:w-1/2 2xl:w-full lg:w-full mx-auto h-full">
								<PersonCard
									img="./team/monika.png"
									name="Monika Šafárová"
									position="koordinátor predaja"
								/>
							</div>
						</Grid>
					</div>
				</Grid>
				<div ref={quoteRef} className="2xl:absolute bottom-10 right-0 left-0 w-full bg-gray-400/80 p-5 z-30 text-right px-20 text-3xl text-slate-700">
					<div className="relative inline-block">
						<span className="absolute -left-12 bottom-0 transform translate-y-[30px] text-8xl font-serif">
							„
						</span>
						Kvalita, rýchlosť a individuálny prístup k zákazníkom sú naším štandardom.
						<span className="absolute top-0 transform -translate-y-[40px] text-8xl font-serif">
							“
						</span>
					</div>
				</div>
			</div>
		</Section>
	)
}

export default Team