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
			<Header className="h-[80vh] relative z-20" img="./health/header.jpeg">
				<Cover>
					<Title color="light" size="3xl text-center">
						Biznis
					</Title>
				</Cover>
			</Header>
			<Section fullHeight={false} className="px-60 py-20 overflow-visible">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="-100 -100 1093 1093"
					className="absolute right-0 top-0 transform -translate-y-1/2 translate-x-1/2 z-10 opacity-80 blur-sm"
				>
					<path
						id="background"
						d="M 351.500 94.452 C 34.798 179.528, 0.533 188.925, 0.834 190.621 C 1.620 195.045, 188.309 891.565, 188.875 892.186 C 189.219 892.563, 347.675 850.431, 541 798.557 C 855.064 714.288, 892.477 704.044, 892.283 702.371 C 891.728 697.569, 704.185 0.572, 703.398 0.381 C 702.904 0.261, 544.550 42.593, 351.500 94.452"
						fill="#1c4484"
						fillRule="evenodd"
					/>
				</svg>
				<div className="relative z-20 flex flex-col gap-12">
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