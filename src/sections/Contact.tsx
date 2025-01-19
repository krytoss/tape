import Grid from "../components/Layout/Grid"
import Section from "../components/Layout/Section"
import Title from "../components/Layout/Title"
import Map from "../components/Map/Map"

const Contact: React.FC = () => {
	return (
		<Section>
			<Grid cols={2} className="h-full">
				<div className="py-10 pl-40 pr-10 text-center justify-center items-center flex width-full bg-gray-100">
					<Title>
						Kontakt
					</Title>
				</div>
				<div className="p-0 justify-center items-center flex text-slate-700">
					<Map />
				</div>
			</Grid>
		</Section>
	)
}

export default Contact