import Cover from "../../components/Layout/Cover"
import Header from "../../components/Layout/Header"
import ImageWithDescription from "../../components/Layout/ImageWithDescription"
import Section from "../../components/Layout/Section"
import Title from "../../components/Layout/Title"
import Link from "../../components/Navigation/Link"
import TopMenu from "../../components/Navigation/TopMenu"

const Health: React.FC = () => {
	return (
		<>
			<TopMenu />
			<Header className="h-[80vh]" img="./health/header.jpeg">
				<Cover>
					<Title color="light" size="3xl text-center">
						Bezpečnosť v zdravotníctve
					</Title>
				</Cover>
			</Header>
			<Section className="p-10">
				<p className="font-bold text-center">
					<span className="text-xl block">
						V našej firme veríme, že bezpečnosť pacientov je na prvom mieste.
						Preto vám prinášame špičkové riešenia na identifikáciu a označovanie
						v zdravotníckych zariadeniach, ktoré zvyšujú úroveň starostlivosti a
						znižujú riziko chýb.
					</span>
					<span className="block text-center text-md mt-5">
						Sme oficiálnym distribútorom spoločnosti <Link className="text-brand text-[1rem] !font-bold" to="https://www.pdcorp.com">PDC Precision Dynamics Corporation</Link> (patriaceho do skupiny Brady Corporation) pre Slovenskú republiku. 
					</span>
				</p>
			</Section>
			<Section className="p-10">
				<ImageWithDescription
					className="w-80"
					title="Na termálnu potlač/s čiarovým alebo QR kódom"
					image="./health/scanner.jpg"
					description="Identifikačné náramky pre pacientov, ktoré využívajú termotlač na zabezpečenie správnej identifikácie a bezpečnosti pacientov. Náramky majú za cieľ zlepšiť identifikáciu pacientov, komunikáciu a bezpečnosť pri operáciách a medikamentóznej liečbe."
				/>
			</Section>
		</>
	)
}

export default Health