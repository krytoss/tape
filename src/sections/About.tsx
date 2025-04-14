import gsap from "gsap"
import Grid from "../components/Layout/Grid"
import Section from "../components/Layout/Section"
import Title from "../components/Layout/Title"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

const About: React.FC = () => {

	const leftRef = useRef(null)
	const rightRef = useRef(null)

	useEffect(() => {
		const elLeft = leftRef.current;
		const elRight = rightRef.current;
		gsap.fromTo(elLeft, {
			opacity: 0,
			x: -100
		}, {
			opacity: 1,
			x: 0,
			duration: 1,
			scrollTrigger: {
				trigger: elLeft,
				start: "top 90%",
				end: "bottom 10%",
				toggleActions: "play reverse play reverse",
				once: false,
			}
		})
		gsap.fromTo(elRight, {
			opacity: 0,
			x: 100
		}, {
			opacity: 1,
			x: 0,
			duration: 1,
			scrollTrigger: {
				trigger: elRight,
				start: "top 90%",
				end: "bottom 10%",
				toggleActions: "play reverse play reverse",
				once: false
			}
		})
	})

	return (
		<Section id="about">
			<Grid cols={1} colsLg={2} className="h-full">
				<div ref={leftRef} className="py-10 lg:pl-40 lg:pr-10 text-center justify-center items-center flex width-full">
					<Title sizeLg="8xl" size="6xl" color="dark">
						O nás
					</Title>
				</div>
				<div ref={rightRef} className="md:col-span-2 lg:col-span-1 py-10 px-20 lg:pl-10 lg:pr-40 justify-center items-center flex bg-gray-300 text-slate-700">
					<p>
						<span className="text-2xl block">
							Spoločnosť <span className="text-3xl text-tape font-bold mx-1">TAPE</span>, s.r.o. pôsobí na trhu identifikácie osôb 20 rokov v rôznych formách.
						</span>
						<p className="mt-3 mb-10 text-xl">
							Venujeme sa zvyšovaniu bezpečnosti v nemocniciach. Sme dodávateľom identifikačných náramkov pre pacientov, etikiet a ďalších produktov.
							Ďalšou oblasťou je identifikácia zamestnancov, návštevníkov koncertov, festivalov, konferencií a rôznych podujatí.
						</p>
						<h3 className="text-xl font-semibold">
							Prečo si vybrať nás?
						</h3>
						<p>
							„Každý zákazník je pre nás dôležitý. Preto ponúkame individuálne riešenia na mieru.“
						</p>
						<h3 className="text-xl mt-5 font-semibold">
							Rýchle dodanie
						</h3>
						<p>
							„Zabezpečujeme rýchlu výrobu a dodanie, aby ste mali svoje produkty včas.“
						</p>
						<h3 className="text-xl mt-5 font-semibold">
							Skúsenosti a profesionalita
						</h3>
						<p>
							„Máme dlhoročné skúsenosti a množstvo spokojných zákazníkov.“
						</p>
					</p>
				</div>
			</Grid>
		</Section>
	)
}

export default About