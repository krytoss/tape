import Grid from "../../components/Layout/Grid"
import Section from "../../components/Layout/Section"
import { scrollToForm } from "../../App"
import ProductCard from "./components/ProductCard"

const Entertainment: React.FC = () => {
	return (
		<Section fullHeight={false} className="overflow-visible pt-20 min-h-screen">
			<div className="relative z-20 w-full px-6 pb-20 pt-4 sm:px-10 lg:px-20">
				<div className="mx-auto">
					<div className="grid grid-cols-1 gap-10 xl:grid-cols-12">
						<div className="text-slate-700 xl:col-span-5">
							<h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
								Identifikačné náramky pre eventy, festivaly a aquaparky
							</h1>
							<p className="mt-4 text-base text-slate-600 sm:text-lg">
								Organizujete hudobný festival, športové podujatie alebo spravujete aquapark? Identifikačné
								náramky sú vaším najdôležitejším nástrojom na kontrolu vstupov, bezpečnosť návštevníkov
								a zároveň skvelým marketingovým nosičom. Ponúkame vám širokú škálu riešení – od štýlových
								látkových náramkov až po moderné RFID identifikáciu.
							</p>

							<h2 className="mt-8 text-xl font-semibold sm:text-2xl">
								Látkové náramky: Štýlový doplnok, ktorý predáva
							</h2>
							<p className="mt-3 text-slate-600">
								Látkové náramky s potlačou sú medzi účastníkmi festivalov mimoriadne populárne. Vďaka vysokej
								odolnosti a atraktívnemu dizajnu ich návštevníci nosia ako pamiatku ešte dlho po skončení akcie,
								čím budujú dlhodobé povedomie o vašej značke.
							</p>
							<ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
								<li>
									Sublimačné náramky (saténové): Umožňujú plnofarebnú fotorealistickú potlač podľa vášho dizajnu.
									Sú jemné na dotyk a veľmi pohodlné.
								</li>
								<li>
									Tkané a vyšívané náramky: Klasika, ktorá pôsobí prémiovo a je takmer nezničiteľná.
								</li>
								<li>
									Bezpečnostné uzávery: Vyberte si jednorazové plastové/kovové patentky (bránia prenosu náramku na inú osobu)
									alebo opakovane použiteľné korálky.
								</li>
							</ul>

							<h2 className="mt-8 text-xl font-semibold sm:text-2xl">
								Silikónové náramky pre aquaparky a fitness
							</h2>
							<p className="mt-3 text-slate-600">
								Hľadáte riešenie, ktoré vydrží vodu, chlór a extrémne zaobchádzanie? Silikónové náramky sú ideálnou
								voľbou pre kúpaliská, hotely a športoviská.
							</p>
							<ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
								<li>Vlastný branding: Ponúkame potlač loga, ražbu (deboss/emboss) alebo ich kombináciu.</li>
								<li>Široká škála veľkostí: Od detských rozmerov až po dospelé veľkosti.</li>
								<li>Reklamný predmet: Skvelé aj ako darček pre zákazníkov či fanúšikovský merch.</li>
							</ul>

							<h2 className="mt-8 text-xl font-semibold sm:text-2xl">
								RFID a NFC technológie: Budúcnosť podujatí
							</h2>
							<p className="mt-3 text-slate-600">
								Zmeňte svoj event na „smart“ udalosť. Naše RFID náramky a čipové karty umožňujú:
							</p>
							<ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
								<li>Bezhotovostné platby (Cashless): Rýchlejšie platby na baroch a menej čakania v radoch.</li>
								<li>Digitálny check-in: Okamžitý prehľad o počte ľudí v areáli.</li>
								<li>Sociálna interakcia: Prepojenie náramku s profilom na sociálnych sieťach.</li>
							</ul>

							<h2 className="mt-8 text-xl font-semibold sm:text-2xl">
								Plastové karty a šnúrky na krk (Lanyardy)
							</h2>
							<p className="mt-3 text-slate-600">
								Pre VIP hostí, press tímy a organizátorov zabezpečujeme komplexnú identifikáciu:
							</p>
							<ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
								<li>
									Plastové karty na mieru: Kvalitná tlač na PVC alebo eko-materiály (v súlade s normou ISO 7810).
								</li>
								<li>
									Šnúrky na krk s potlačou: Saténové alebo textilné lanyardy s bezpečnostnou poistkou a rôznymi typmi karabín.
								</li>
								<li>
									Personalizácia: Mená, fotografie, čiarové kódy alebo čipy priamo na kartách.
								</li>
							</ul>

							<h3 className="mt-8 text-lg font-semibold sm:text-xl">
								Prečo objednať identifikačné náramky u nás?
							</h3>
							<ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
								<li>Rýchlosť a flexibilita: Rozumieme termínom, ktoré pri eventoch nepustia.</li>
								<li>Kvalita potlače: Používame technológie, ktoré zaručujú sýte farby a vysoké rozlíšenie loga.</li>
								<li>Poradenstvo: Pomôžeme vám vybrať správny materiál a typ uzáveru podľa charakteru vašej akcie.</li>
							</ul>

							<h3 className="mt-8 text-lg font-semibold sm:text-xl">
								Pripravujete podujatie a potrebujete kalkuláciu?
							</h3>
							<div className="mt-4 flex flex-wrap gap-3">
								<a
									href="#"
									onClick={scrollToForm}
									className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand/90 sm:text-base"
								>
									Vyžiadať nezáväznú cenovú ponuku
								</a>
								<a
									href="#"
									onClick={scrollToForm}
									className="inline-flex items-center justify-center rounded-full border border-brand px-5 py-2 text-sm font-semibold text-brand transition hover:bg-brand/10 sm:text-base"
								>
									Objednať vzorky materiálov
								</a>
							</div>
						</div>

						<div className="xl:col-span-7">
							<div className="relative mt-6">
								<div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
									<div className="absolute -left-10 top-10 h-56 w-56 rounded-full bg-brand/10 blur-3xl" />
									<div className="absolute right-0 top-40 h-64 w-64 rounded-full bg-slate-200/60 blur-3xl" />
								</div>
								<Grid className="relative z-10 gap-4" colsXs={1} colsMd={2} colsXl={2} gap={4} >
									<ProductCard
					link="/zabava/karty"
					className="h-full"
					title="Karty"
					description="Plastové karty sú ideálnym riešením pre darčekové a vernostné karty. Slúžia aj na identifikáciu návštevníkov na rôznych podujatiach. Ponúkame karty s plnofarebnou potlačou aj bez potlače, QR kódom a čipmi, ktoré zabezpečia bezpečný a efektívny systém vstupu. Spoľahlivé a praktické. Plastové karty zaručia bezproblémovú organizáciu podujatí a sú skvelým nástrojom pre vernostné programy."
					image="./pages/entertainment/new/karty.webp"
					/>
					<ProductCard
					link="/zabava/latkove-naramky"
					className="h-full"
					title="Látkové náramky"
					description="Látkové náramky sú štýlovou voľbou pre festivaly, koncerty a športové podujatia. Vyberte si z vyšívaných a saténových náramkov s plnofarebnou potlačou, rôznymi uzávermi a možnosťami opakovaného použitia. Skvelý suvenír, ktorý vydrží."
					image="./pages/entertainment/new/latkove.webp"
					/>
					<ProductCard
					link="/zabava/naramky"
					className="h-full"
					title="Vinylové, plastové a tyvek náramky"
					description="Vinylové, plastové i Tyvek náramky sú určené na označovanie návštevníkov na diskotékach, festivaloch, kúpaliskách či hromadných podujatiach. Sú neprenosné, čo zvyšuje bezpečnosť a znižuje možné straty pri organizácii masových akcií. Cenová dostupnosť je benefitom a môžu byť alternatívou k látkovým náramkom."
					image="./pages/entertainment/new/tyvek.webp"
					/>
					<ProductCard
					link="/zabava/silikonove-naramky"
					className="h-full"
					title="Silikónové náramky"
					description="Silikónové náramky sa používajú na propagáciu značky alebo podujatia, ako reklamné a darčekové predmety. Sú vodeodolné a trvácne. V ponuke máme rôzne šírky, prevedenia a veľkosti pre deti aj dospelých."
					image="./pages/entertainment/new/silikonove.webp"
					/>
					<ProductCard
					link="/zabava/snurky"
					className="h-full"
					title="Šnúrky na krk"
					description="Šnúrky na krk sú skvelým reklamným prvkom na spropagovanie vašej značky alebo sponzorov. Vyberte si saténové šnúrky alebo textilné šnúrky s plnofarebnou potlačou či bez potlače. S rôznymi typmi karabín, puzdier a bezpečnostných zapínaní sú perfektné pre identifikačné karty, backstage pasy a kľúče. Ideálne riešenie pre každé podujatie."
					image="./pages/entertainment/new/snurky.webp"
					/>
					<ProductCard
					link="/zabava/puzdra-menovky-rolery"
					title="Puzdrá, menovky, rolery"
					description="Výborný doplnok ku šnúrkam na krk alebo PVC kartám.
Menovky sú neoceniteľným nástrojom na budovanie vzťahov na hromadných podujatiach. Umožňujú rýchlu vzájomnú identifikáciu, čo prispieva k ľahšiemu kontaktu a zvýšeniu bezpečnosti.
Rolery sú praktickým držiakom na visačku s identifikačnou kartou. Je možné ich umiestniť kdekoľvek na oblečení či na šnúrku na krk. 
V našej ponuke nájdete rôzne veľkosti, materiály a prevedenia."
					image="./pages/entertainment/new/puzdra.webp"
					/>
					<ProductCard
					link="/zabava/rfid"
					title="RFID"
					description="Ponúkame širokú škálu RFID produktov vrátane čipových kariet, látkových a silikónových náramkov a kľúčeniek. RFID riešenia umožňujú bezhotovostný styk na festivaloch, koncertoch, v aquaparkoch a na kúpaliskách, čím zvyšujú pohodlie a bezpečnosť vašich zákazníkov. 
Uľahčite si život s našimi inovatívnymi RFID riešeniami."
					image="./pages/entertainment/new/rfid.webp"
					/>
					<ProductCard
					link="/zabava/eko-produkty"
					title="EKO produkty"
					description="Posuňte svoje podujatia na vyššiu úroveň s našimi ekologickými šnúrkami, náramkami a kartami! Naša ponuka zahŕňa bambusové, papierové a recyklované plastové šnúrky.
Ponúkame náramky šetrné k životnému prostrediu, vyrobené z recyklovaných PVC fliaš. Tieto náramky sú odolné, trvácne a vhodné na dlhodobé používanie.
Kolekcia ekologických kariet zahŕňa rôzne typy materiálov (PET-G, Graspaper, Eco Paper a 100% recyklované PVC). "
					image="./pages/entertainment/new/eko.webp"
					/>
					<ProductCard
					link="/zabava/tlaciarne"
					title="Tlačiarne"
					description="Vytlačte čiarové kódy, text, logá a jedinečné variabilné údaje na každý náramok priamo na mieste podujatia. Pri atrakciách s časovanými aktivitami je možné termálne náramky s čiarovými kódmi vytlačiť aj s dátumom a časom vstupu."
					image="./pages/entertainment/new/tlaciarne.webp"
					/>
					<div />
								</Grid>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Section>
	)
}

export default Entertainment
