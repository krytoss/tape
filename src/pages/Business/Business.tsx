import Cover from "../../components/Layout/Cover";
import Header from "../../components/Layout/Header";
import Section from "../../components/Layout/Section";
import Title from "../../components/Layout/Title";
import TopMenu from "../../components/Navigation/TopMenu";
import ProductCardWide from "../../components/Layout/ProductCardWide";

const Business: React.FC = () => {
	return (
		<>
			<TopMenu />
			<Header className="h-[50vh] md:h-[80vh] relative z-20" img="./pages/business/header.jpeg">
				<Cover>
					<Title color="light" size="3xl text-center">
						Biznis
					</Title>
				</Cover>
			</Header>
			<Section fullHeight={false} className="px-5 md:px-10 lg:px-20 xl:px-40 py-20 overflow-visible">
				<div className="relative z-20 flex flex-col gap-6 md:gap-12">
					<ProductCardWide
						title="Karty"
						description="Vstupné karty s plnofarebnou potlačou pre zamestnancov a návštevníkov. Ideálne pre budovy, haly či konferencie – kompatibilné so všetkými čítačkami."
						image="/pages/business/karty.png"
						link="/zabava/karty"
					/>

					<ProductCardWide
						title="Šnúrky na krk"
						description="Elegantné saténové aj pevné textilné šnúrky na karty a kľúče s možnosťou potlače. Ideálne na každodenné použitie aj eventy."
						image="/pages/business/snurky.png"
						link="/zabava/snurky"
						invert={true}
					/>

					<ProductCardWide
						title="Puzdrá, rolery, menovky"
						description="Chráňte a prezentujte identifikačné karty profesionálne. Visačky, rolery a menovky z kvalitných materiálov pre firmy a eventy."
						image="/pages/business/puzdra_rolery_menovky.png"
						link="/zabava/puzdra-menovky-rolery"
					/>

					<ProductCardWide
						title="RFID produkty"
						description="Bezkontaktné riešenia: RFID karty, náramky a kľúčenky pre dochádzku, vstupy a stravovacie systémy. Možnosť personalizácie."
						image="/pages/business/rfid.png"
						link="/zabava/rfid"
						invert={true}
					/>

					<ProductCardWide
						title="Tlačiarne a QR/čiarové kódy"
						description="Tlač čiarových a QR kódov priamo u vás. Efektívne riešenie pre evidenciu, vstupy a ochranu zamestnancov aj návštevníkov."
						image="/pages/business/tlaciarne.png"
						link="/zabava/tlaciarne"
					/>
				</div>
			</Section>
		</>
	);
}

export default Business