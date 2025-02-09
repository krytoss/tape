import { Link } from "react-router"
import Cover from "../../components/Layout/Cover"
import Grid from "../../components/Layout/Grid"
import Header from "../../components/Layout/Header"
import ImageWithDescription from "../../components/Layout/ImageWithDescription"
import Section from "../../components/Layout/Section"
import Title from "../../components/Layout/Title"
import TopMenu from "../../components/Navigation/TopMenu"
import ProductCard from "./components/ProductCard"
import ArrowDown from "../../components/Navigation/ArrowDown"

const Entertainment: React.FC = () => {
	return (
		<>
			<TopMenu />
			<Header className="h-[100vh] relative z-20" img="./offers/entertainment.jpeg">
				<Cover>
					<Title color="light" size="3xl text-center">
						Zábava
					</Title>
					<ArrowDown color="light" />
				</Cover>
			</Header>
			<Section fullHeight={true} className="overflow-visible pt-20">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="-100 -100 1093 1093"
					className="absolute left-0 top-0 transform w-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-60 blur-md animate-[wiggle_1s_ease-in-out_infinite]"
				>
					<path
						id="background"
						d="M 351.500 94.452 C 34.798 179.528, 0.533 188.925, 0.834 190.621 C 1.620 195.045, 188.309 891.565, 188.875 892.186 C 189.219 892.563, 347.675 850.431, 541 798.557 C 855.064 714.288, 892.477 704.044, 892.283 702.371 C 891.728 697.569, 704.185 0.572, 703.398 0.381 C 702.904 0.261, 544.550 42.593, 351.500 94.452"
						fill="#1c4484"
						fillRule="evenodd"
					/>
				</svg>
				{ /* <div className="relative z-20 w-full m-auto"> */ }
				<Grid className="xl:h-[calc(100vh-5rem)] relative z-20" colsXs={1} colsSm={2} colsMd={8} colsXl={3} >
					<ProductCard
						link="/zabava/plastove-karty"
						className="h-full"
						title="Plastové karty"
						description="Plastové karty sú ideálnym riešením pre darčekové a vernostné karty. Slúžia aj na identifikáciu návštevníkov na rôznych podujatiach. Ponúkame karty s plnofarebnou potlačou aj bez potlače, QR kódom a čipmi, ktoré zabezpečia bezpečný a efektívny systém vstupu. Spoľahlivé a praktické. Plastové karty zaručia bezproblémovú organizáciu podujatí a sú skvelým nástrojom pre vernostné programy."
						image="./pages/entertainment/plastove_karty.png"
					/>
					<ProductCard
						className="h-full"
						title="Látkové náramky"
						description="Látkové náramky sú štýlovou voľbou pre festivaly, koncerty a športové podujatia. Vyberte si z vyšívaných a saténových náramkov s plnofarebnou potlačou, rôznymi uzávermi a možnosťami opakovaného použitia. Skvelý suvenír, ktorý vydrží."
						image="./pages/entertainment/latkove.png"
					/>
					<ProductCard
						className="h-full"
						title="Vinylové, plastové a tyvek náramky"
						description="Vinylové, plastové i Tyvek náramky sú určené na označovanie návštevníkov na diskotékach, festivaloch, kúpaliskách či hromadných podujatiach. Sú neprenosné, čo zvyšuje bezpečnosť a znižuje možné straty pri organizácii masových akcií. Cenová dostupnosť je benefitom a môžu byť alternatívou k látkovým náramkom."
						image="./pages/entertainment/tyvek.png"
					/>
					<ProductCard
						className="h-full"
						title="Silikónové náramky"
						description="Silikónové náramky sa používajú na propagáciu značky alebo podujatia, ako reklamné a darčekové predmety. Sú vodeodolné a trvácne. V ponuke máme rôzne šírky, prevedenia a veľkosti pre deti aj dospelých."
						image="./pages/entertainment/silikonove.png"
					/>
					<ProductCard
						className="h-full"
						title="Šnúrky na krk"
						description="Šnúrky na krk sú skvelým reklamným prvkom na spropagovanie vašej značky alebo sponzorov. Vyberte si saténové šnúrky alebo textilné šnúrky s plnofarebnou potlačou či bez potlače. S rôznymi typmi karabín, puzdier a bezpečnostných zapínaní sú perfektné pre identifikačné karty, backstage pasy a kľúče. Ideálne riešenie pre každé podujatie."
						image="./pages/entertainment/snurky.png"
					/>
					<ProductCard
						title="Puzdrá, menovky, rolery"
						description="Chráňte a prezentujte identifikačné karty vašich návštevníkov, VIP hostí a personálu s našimi kvalitnými plastovými visačkami/puzdrami. Sú výborným doplnkom ku šnúrkam na krk alebo PVC kartám.
Menovky sú neoceniteľným nástrojom na budovanie vzťahov na hromadných podujatiach. Umožňujú rýchlu vzájomnú identifikáciu, čo prispieva k ľahšiemu kontaktu a zvýšeniu bezpečnosti.
Rolery sú praktickým držiakom na visačku s identifikačnou kartou. Je možné ich umiestniť kdekoľvek na oblečení či na šnúrku na krk. 
V našej ponuke nájdete rôzne veľkosti, materiály a prevedenia. "
						image="./pages/entertainment/puzdra.png"
					/>
					<ProductCard
						title="RFID"
						description="Ponúkame širokú škálu RFID produktov vrátane čipových kariet, látkových a silikónových náramkov a kľúčeniek. RFID riešenia umožňujú bezhotovostný styk na festivaloch, koncertoch, v aquaparkoch a na kúpaliskách, čím zvyšujú pohodlie a bezpečnosť vašich zákazníkov. 
Uľahčite si život s našimi inovatívnymi RFID riešeniami."
						image="./pages/entertainment/rfid.png"
					/>
					<ProductCard
						title="EKO produkty"
						description="Posuňte svoje podujatia na vyššiu úroveň s našimi ekologickými šnúrkami, náramkami a kartami! Naša ponuka zahŕňa bambusové, papierové a recyklované plastové šnúrky.
Ponúkame náramky šetrné k životnému prostrediu, vyrobené z recyklovaných PVC fliaš. Tieto náramky sú odolné, trvácne a vhodné na dlhodobé používanie.
Kolekcia ekologických kariet zahŕňa rôzne typy materiálov (PET-G, Graspaper, Eco Paper a 100% recyklované PVC). "
						image="./pages/entertainment/eko.png"
					/>
					<ProductCard
						title="Tlačiarne"
						description="Vytlačte čiarové kódy, text, logá a jedinečné variabilné údaje na každý náramok priamo na mieste podujatia. Pri atrakciách s časovanými aktivitami je možné termálne náramky s čiarovými kódmi vytlačiť aj s dátumom a časom vstupu."
						image="./pages/entertainment/tlaciarne.png"
					/>
					<div />
				</Grid>
			</Section>
		</>
	)
}

export default Entertainment