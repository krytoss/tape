import gsap from "gsap"
import Grid from "../components/Layout/Grid"
import Section from "../components/Layout/Section"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Title from "../components/Layout/Title"
import Cover from "../components/Layout/Cover"
import Link from "../components/Navigation/Link"
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
			<Grid cols={1} colsXl={3} className="h-full">
				<div className="offer justify-center items-center flex w-full bg-red-100 group relative h-[33.33vh] xl:h-full overflow-hidden">
					<img src="./offers/health_industry.jpeg" className="w-full h-auto xl:h-full xl:w-auto object-cover filter grayscale group-hover:grayscale-0" alt="Health industry" />
					<Cover className="hover:bg-opacity-0 transition transition-colors">
						<Link to="zdravotnictvo" fullSize={true} center={true}>
							<Title color="light" size="3xl text-center">
								Bezpečnosť v zdravotníctve
							</Title>
						</Link>
					</Cover>
				</div>
				<div className="offer justify-center items-center flex w-full bg-pink-100 group relative h-[33.33vh] xl:h-full overflow-hidden">
					<img src="./offers/business.jpeg" className="min-w-full min-h-full xl:h-full xl:w-auto object-cover filter grayscale group-hover:grayscale-0" alt="Business" />
					<Cover className="hover:bg-opacity-0 transition transition-colors">
						<Link to="biznis" fullSize={true} center={true}>
							<Title color="light" size="3xl text-center">
								Biznis
							</Title>
						</Link>
					</Cover>
				</div>
				<div className="offer justify-center items-center flex w-full bg-green-100 group relative h-[33.33vh] xl:h-full overflow-hidden">
					<img src="./offers/entertainment.jpeg" className="min-w-full min-h-full xl:h-full xl:w-auto object-cover filter grayscale group-hover:grayscale-0" alt="Entertainment" />
					<Cover className="hover:bg-opacity-0 transition transition-colors">
						<Link to="zabava" fullSize={true} center={true}>
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