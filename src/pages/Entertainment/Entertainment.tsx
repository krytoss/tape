import Grid from "../../components/Layout/Grid"
import Section from "../../components/Layout/Section"
import ProductCard from "./components/ProductCard"

const Entertainment: React.FC = () => {
	return (
		<Section fullHeight={false} className="overflow-visible pt-20 min-h-screen">
			{ /* <div className="relative z-20 w-full m-auto"> */ }
			<Grid className="xl:h-[calc(100vh-5rem)] relative z-20" colsXs={1} colsMd={2} colsXl={3} >
				<ProductCard
					link="/zabava/karty"
					className="h-full"
					title="Karty"
					description="Plastové karty sú ideálnym riešením pre darčekové a vernostné karty. Slúžia aj na identifikáciu návštevníkov na rôznych podujatiach. Ponúkame karty s plnofarebnou potlačou aj bez potlače, QR kódom a čipmi, ktoré zabezpečia bezpečný a efektívny systém vstupu. Spoľahlivé a praktické. Plastové karty zaručia bezproblémovú organizáciu podujatí a sú skvelým nástrojom pre vernostné programy."
					image="./pages/entertainment/new/karty.png"
				/>
				<ProductCard
					link="/zabava/latkove-naramky"
					className="h-full"
					title="Látkové náramky"
					description="Látkové náramky sú štýlovou voľbou pre festivaly, koncerty a športové podujatia. Vyberte si z vyšívaných a saténových náramkov s plnofarebnou potlačou, rôznymi uzávermi a možnosťami opakovaného použitia. Skvelý suvenír, ktorý vydrží."
					image="./pages/entertainment/new/latkove.png"
				/>
				<ProductCard
					link="/zabava/naramky"
					className="h-full"
					title="Vinylové, plastové a tyvek náramky"
					description="Vinylové, plastové i Tyvek náramky sú určené na označovanie návštevníkov na diskotékach, festivaloch, kúpaliskách či hromadných podujatiach. Sú neprenosné, čo zvyšuje bezpečnosť a znižuje možné straty pri organizácii masových akcií. Cenová dostupnosť je benefitom a môžu byť alternatívou k látkovým náramkom."
					image="./pages/entertainment/new/tyvek.png"
				/>
				<ProductCard
					link="/zabava/silikonove-naramky"
					className="h-full"
					title="Silikónové náramky"
					description="Silikónové náramky sa používajú na propagáciu značky alebo podujatia, ako reklamné a darčekové predmety. Sú vodeodolné a trvácne. V ponuke máme rôzne šírky, prevedenia a veľkosti pre deti aj dospelých."
					image="./pages/entertainment/new/silikonove.png"
				/>
				<ProductCard
					link="/zabava/snurky"
					className="h-full"
					title="Šnúrky na krk"
					description="Šnúrky na krk sú skvelým reklamným prvkom na spropagovanie vašej značky alebo sponzorov. Vyberte si saténové šnúrky alebo textilné šnúrky s plnofarebnou potlačou či bez potlače. S rôznymi typmi karabín, puzdier a bezpečnostných zapínaní sú perfektné pre identifikačné karty, backstage pasy a kľúče. Ideálne riešenie pre každé podujatie."
					image="./pages/entertainment/new/snurky.png"
				/>
				<ProductCard
					link="/zabava/puzdra-menovky-rolery"
					title="Puzdrá, menovky, rolery"
					description="Výborný doplnok ku šnúrkam na krk alebo PVC kartám.
Menovky sú neoceniteľným nástrojom na budovanie vzťahov na hromadných podujatiach. Umožňujú rýchlu vzájomnú identifikáciu, čo prispieva k ľahšiemu kontaktu a zvýšeniu bezpečnosti.
Rolery sú praktickým držiakom na visačku s identifikačnou kartou. Je možné ich umiestniť kdekoľvek na oblečení či na šnúrku na krk. 
V našej ponuke nájdete rôzne veľkosti, materiály a prevedenia."
					image="./pages/entertainment/new/puzdra.png"
				/>
				<ProductCard
					link="/zabava/rfid"
					title="RFID"
					description="Ponúkame širokú škálu RFID produktov vrátane čipových kariet, látkových a silikónových náramkov a kľúčeniek. RFID riešenia umožňujú bezhotovostný styk na festivaloch, koncertoch, v aquaparkoch a na kúpaliskách, čím zvyšujú pohodlie a bezpečnosť vašich zákazníkov. 
Uľahčite si život s našimi inovatívnymi RFID riešeniami."
					image="./pages/entertainment/new/rfid.png"
				/>
				<ProductCard
					link="/zabava/eko-produkty"
					title="EKO produkty"
					description="Posuňte svoje podujatia na vyššiu úroveň s našimi ekologickými šnúrkami, náramkami a kartami! Naša ponuka zahŕňa bambusové, papierové a recyklované plastové šnúrky.
Ponúkame náramky šetrné k životnému prostrediu, vyrobené z recyklovaných PVC fliaš. Tieto náramky sú odolné, trvácne a vhodné na dlhodobé používanie.
Kolekcia ekologických kariet zahŕňa rôzne typy materiálov (PET-G, Graspaper, Eco Paper a 100% recyklované PVC). "
					image="./pages/entertainment/new/eko.png"
				/>
				<ProductCard
					link="/zabava/tlaciarne"
					title="Tlačiarne"
					description="Vytlačte čiarové kódy, text, logá a jedinečné variabilné údaje na každý náramok priamo na mieste podujatia. Pri atrakciách s časovanými aktivitami je možné termálne náramky s čiarovými kódmi vytlačiť aj s dátumom a časom vstupu."
					image="./pages/entertainment/new/tlaciarne.png"
				/>
				<div />
			</Grid>
		</Section>
	)
}

export default Entertainment