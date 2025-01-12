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
				start: "top 50%",
				end: "bottom 50%",
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
				start: "top 50%",
				end: "bottom 50%",
				toggleActions: "play reverse play reverse",
				once: false
			}
		})
	})

	return (
		<Section>
			<Grid cols={2} className="h-full">
				<div ref={leftRef} className="py-10 pl-40 pr-10 text-center justify-center items-center flex width-full">
					<Title color="light">
						O nás
					</Title>
				</div>
				<div ref={rightRef} className="py-10 pl-10 pr-40 justify-center items-center flex bg-gray-300 text-slate-700">
					<p>
						<span className="text-2xl block mb-10">
							Spoločnosť <span className="text-3xl text-tape font-bold mx-1">TAPE</span>, s.r.o. pôsobí na trhu identifikácie osôb 20 rokov v rôznych formách.
							<br />Momentálne je čas vydať sa opäť svojou cestou.
						</span>
						Venujeme sa zvyšovaniu bezpečnosti v nemocniciach.<br />
						Sme dodávateľom identifikačných náramkov pre pacientov, etikiet a ďalších produktov.<br />
						Ďalšou oblasťou je identifikácia zamestnancov, návštevníkov koncertov, festivalov, konferencií a rôznych podujatí.<br />
						Dodávame plastové karty, šnúrky na krk, puzdra, látkové a silikónové náramky.
					</p>
				</div>
			</Grid>
		</Section>
	)
}

export default About