import gsap from "gsap"
import Grid from "../components/Layout/Grid"
import Section from "../components/Layout/Section"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Title from "../components/Layout/Title"
import Cover from "../components/Layout/Cover"
import Link from "../components/Link"
import { useEffect } from "react"

gsap.registerPlugin(ScrollTrigger)

const Offers: React.FC = () => {

	useEffect(() => {
		gsap.fromTo(".offer",
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
				  trigger: '.offer',
				  start: "top 30%",
				  end: "bottom 30%",
				  toggleActions: "play reverse play reverse",
				  once: false
			  }
			}
		);
	})

	return (
		<Section>
			<Grid cols={3} className="h-full">
				<div className="offer justify-center items-center flex w-full bg-red-100 group relative">
					<img src="./offers/health_industry.jpeg" className="h-full w-auto object-cover filter grayscale group-hover:grayscale-0" alt="Health industry" />
					<Cover className="hover:bg-opacity-0 transition transition-colors">
						<Link to="#" fullSize={true} center={true}>
							<Title color="light" size="3xl text-center">
								Bezpečnosť v zdravotníctve
							</Title>
						</Link>
					</Cover>
				</div>
				<div className="offer justify-center items-center flex w-full bg-pink-100 group relative">
					<img src="./offers/business.jpeg" className="h-full w-auto object-cover filter grayscale group-hover:grayscale-0" alt="Business" />
					<Cover className="hover:bg-opacity-0 transition transition-colors">
						<Link to="#" fullSize={true} center={true}>
							<Title color="light" size="3xl text-center">
								Biznis
							</Title>
						</Link>
					</Cover>
				</div>
				<div className="offer justify-center items-center flex w-full bg-green-100 group relative">
					<img src="./offers/entertainment.jpeg" className="h-full w-auto object-cover filter grayscale group-hover:grayscale-0" alt="Entertainment" />
					<Cover className="hover:bg-opacity-0 transition transition-colors">
						<Link to="#" fullSize={true} center={true}>
							<Title color="light" size="3xl text-center">
								Zábava
							</Title>
						</Link>
					</Cover>
				</div>
			</Grid>
		</Section>
	)
}

export default Offers