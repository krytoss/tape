import { useState } from "react"
import Form from "../components/Form/Form"
import Input from "../components/Form/Input"
import Grid from "../components/Layout/Grid"
import Section from "../components/Layout/Section"
import Title from "../components/Layout/Title"
import Map from "../components/Map/Map"
import Link from "../components/Navigation/Link"

const Contact: React.FC = () => {

	const [ name, setName ] = useState<string>("")

	return (
		<Section>
			<Grid cols={2} className="h-full">
				<div className="py-10 pl-40 pr-10 text-left justify-center flex flex-col width-full bg-gray-100">
					<Title>
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
							<Link to="tel:+421905945609" color="slate-500" className="transition transition-color hover:text-slate-800">
								+421 905 945 609
							</Link><br/>
							<Link to="tel:+421918967970" color="slate-500" className="transition transition-color hover:text-slate-800">
								+421 918 967 970
							</Link>
						</p>
						<div>
							<Form>
								<Input
									id="name"
									name="name"
									type="text"
									placeholder="Meno a priezvisko"
									value={name}
									onChange={setName}
								/>
							</Form>
						</div>
					</div>
				</div>
				<div className="p-0 justify-center items-center flex text-slate-700">
					<Map />
				</div>
			</Grid>
		</Section>
	)
}

export default Contact