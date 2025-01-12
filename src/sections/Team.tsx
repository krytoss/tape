import Grid from "../components/Layout/Grid"
import Section from "../components/Layout/Section"
import Title from "../components/Layout/Title"

const Team: React.FC = () => {
	return (
		<Section>
			<Grid cols={2} className="h-full">
				<div className="py-10 pl-40 pr-10 text-center justify-center items-center flex width-full bg-white flex-col">
					<Title color="dark">
						Team
					</Title>
					<p>
						Spoznajte ľudí, ktorí budú s vami komunikovať
					</p>
				</div>
				<div className="py-10 pl-10 pr-40 justify-center items-center flex bg-gray-400 text-slate-700">
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

export default Team