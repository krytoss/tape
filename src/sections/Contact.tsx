import Grid from "../components/Layout/Grid"
import Section from "../components/Layout/Section"
import Title from "../components/Layout/Title"

const Contact: React.FC = () => {
	return (
		<Section>
			<Grid cols={2} className="h-full">
				<div className="py-10 pl-40 pr-10 text-center justify-center items-center flex width-full bg-gray-100">
					<Title>
						Kontakt
					</Title>
				</div>
				<div className="py-10 pl-10 pr-40 justify-center items-center flex text-slate-700">
					<p>
						<span className="text-2xl block mb-10">
							Telefón: +421 123 456 789
						</span>
						<span className="text-2xl block mb-10">
							Email:
							<a href="mailto:
							">
								{" "}
							</a>
						</span>
						<span className="text-2xl block mb-10">
							Adresa:
						</span>
					</p>
				</div>
			</Grid>
		</Section>
	)
}

export default Contact