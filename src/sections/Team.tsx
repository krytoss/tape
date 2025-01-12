import { useEffect, useRef } from "react"
import Grid from "../components/Layout/Grid"
import Section from "../components/Layout/Section"
import Title from "../components/Layout/Title"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import PersonCard from "../components/PersonCard"

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
				trigger: elLeft,
				start: "top 50%",
				end: "bottom 50%",
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
				trigger: elQuote,
				start: "top 95%",
				end: "bottom 50%",
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
				  trigger: '.person-card',
				  start: "top 50%",
				  end: "bottom 50%",
				  toggleActions: "play reverse play reverse",
				  once: false
			  }
			}
		);
	})


	return (
		<Section className="relative bg-white">
			<img src="./hexagon.jpg" className="z-10 absolute right-0 bottom-0" />
			<Grid cols={3} className="h-full bg-gray-300 bg-opacity-90 relative z-20">
				<div ref={leftRef} className="py-10 pl-40 pr-10 text-center justify-center items-center flex width-full flex-col">
					<Title color="dark">
						Team
					</Title>
					<p className="text-slate-700 font-semibold mt-10 text-xl">
						Spoznajte ľudí, ktorí budú s vami komunikovať
					</p>
				</div>
				<div className="col-span-2 py-10 pl-10 pr-40 justify-center items-center flex text-slate-700">
					<Grid cols={3}>
						<div className="p-10">
							<PersonCard img="./person.png" name="Tatiana Reindlová" position="konateľ, strategický manažér" />
						</div>
						<div className="p-10">
							<PersonCard img="./person.png" name="Peter Reindl" position="konateľ, obchodný manažér" />
						</div>
						<div className="p-10">
							<PersonCard img="./person.png" name="Monika Šafárová" position="koordinátor predaja" />
						</div>
					</Grid>
				</div>
			</Grid>
			<div ref={quoteRef} className="absolute bottom-20 right-0 left-0 bg-gray-400/80 p-5 pr-20 z-30 text-right text-3xl text-slate-700">
				<span className="absolute left-20 bottom-0 transform translate-y-[15px] text-8xl font-serif">
					„
				</span>
				<span className="absolute right-10 top-0 transform -translate-y-[20px] text-8xl font-serif">
				“
				</span>
				Kvalita, rýchlosť a individuálny prístup k zákazníkom sú naším štandardom.
			</div>
		</Section>
	)
}

export default Team