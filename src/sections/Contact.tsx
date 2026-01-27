import Grid from "../components/Layout/Grid"
import Section from "../components/Layout/Section"
import Title from "../components/Layout/Title"
import Map from "../components/Map/Map"
import Link from "../components/Navigation/Link"
import { FaLinkedin } from "react-icons/fa"

const Contact: React.FC = () => {

	return (
		<Section fullHeight={false} className="min-h-screen" id="contact">
			<Grid colsXl={2} className="h-full">
				<div className="text-left justify-center flex flex-col width-full bg-gray-100 pb-10 min-h-screen xl:min-h-auto">
					<div className="pt-28 pb-10 lg:pl-40 lg:pr-10 px-10 lg:px-0">
						<Title sizeLg="8xl" size="4xl">
							Kontakt
						</Title>
						<div className="text-slate-800 text-left">
							<p className="mt-10">
								TAPE, s.r.o.<br/>
								Mlynská 2238<br/>
								934 01 Levice<br/>
								IČO: 35 979 852<br/>
								DIČ: 2022137381<br/>
								IČ DPH: SK2022137381<br/>
							</p>
							<p className="mt-5">
								<Link to="mailto:info@tape.sk" color="slate-500" uppercase={ false } className="transition transition-color">
									info<span>@</span>tape<span className="text-brand font-black">.</span>sk
								</Link><br/>
								<Link to="tel:+421918967970" color="slate-500" className="transition transition-color hover:text-slate-800">
									+421 918 967 970
								</Link><br/>
								<Link to="tel:+421905945609" color="slate-500" className="transition transition-color hover:text-slate-800">
									+421 905 945 609
								</Link><br/>
								<Link target="_blank" uppercase={false} to="https://www.linkedin.com/company/tapecompany/about/" color="slate-500" className="mt-2 flex shrink w-fit items-center transition transition-color hover:text-slate-800">
									<FaLinkedin className="inline-block mr-1 text-[#2d64bc]" /> LinkedIn
								</Link>
							</p>
						</div>
					</div>
					<img src="./building.webp" alt="Budova" className="w-1/2 max-w-[400px] mx-auto" />
				</div>
				<div className="p-0 justify-center items-center flex text-slate-700">
					<Map />
				</div>
			</Grid>
		</Section>
	)
}

export default Contact