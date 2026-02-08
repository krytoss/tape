import { scrollToForm } from "../../App"
import Cover from "../../components/Layout/Cover"
import Grid from "../../components/Layout/Grid"
import Header from "../../components/Layout/Header"
import ImageWithDescription from "../../components/Layout/ImageWithDescription"
import Section from "../../components/Layout/Section"
import Title from "../../components/Layout/Title"
import Link from "../../components/Navigation/Link"
import TopMenu from "../../components/Navigation/TopMenu"
import ContactForm from "../../sections/ContactForm"

const Health: React.FC = () => {

	return (
		<>
			<TopMenu />
			<Header className="h-[40vh] md:h-[80vh] relative z-20" img="./pages/health/header.webp">
				<Cover>
					<Title color="light" size="3xl text-center">
						Bezpečnosť v zdravotníctve
					</Title>
				</Cover>
			</Header>
			<Section fullHeight={false} className="px-10 lg:px-20 xl:px-60 py-20 overflow-visible">
				<div className="relative z-20">
					<p>
						<span className="text-xl block">
							V našej firme veríme, že bezpečnosť pacientov je na prvom mieste. Preto vám prinášame špičkové riešenia na identifikáciu a označovanie v zdravotníckych zariadeniach, ktoré zvyšujú úroveň starostlivosti a znižujú riziko chýb.
						</span>
						<span className="block text-xl mt-5">
							Sme oficiálnym distribútorom spoločnosti <Link className="text-brand text-[1rem] !font-bold" to="https://www.pdcorp.com">PDC Precision Dynamics Corporation</Link> (patriaceho do skupiny Brady Corporation) pre Slovenskú republiku.
							<br />Oficiálne vyhlásenie spoločnosti PDC (Brady) nájdete <a className="text-brand font-semibold" href="PDC_Vyhlasenie.pdf" target="_blank">TU</a>.
						</span>
						<span className="block text-xl mt-5">
							Precision Dynamics Corporation je najväčším celosvetovým výrobcom identifikačných náramkov a etikiet na označovanie liekov a striekačiek.
							Poskytuje stopercentnú kvalitu, pokiaľ ide o služby, dizajn a výrobu. Potvrdzujú to aj certifikáty ISO-9001:2015 a ISO-13485:2016, ISO-14001:2015 hlavného závodu v San Fernando v Kalifornii v USA.
							PDC ako prvá na svete uviedla na trh identifikačné náramky v roku 1956.
						</span>
						<span className="block text-xl mt-5">
							Identifikácia ovplyvňuje všetky aspekty klinickej starostlivosti, od skúsenosti pacientov až po spokojnosť zdravotníckeho personálu.
							Kvalita identifikačných riešení je kľúčová pre bezpečnosť pacientov. Produkty od PDC sú navrhnuté tak, aby zlepšili klinické výsledky v kritických bodoch starostlivosti o pacientov. Náramky a štítky sú vyrobené s dôrazom na maximálnu bezpečnosť, pevnosť a trvanlivosť. 
						</span>
					</p>
				</div>
			</Section>
			<Section fullHeight={false} className="relative z-20 min-h-screen py-10">
				<Grid className="h-full" cols={1} cols2Xl={10}>

					<div className="col-span-5 lg:col-span-3 text-slate-700 p-10 flex flex-col justify-center">
						<Title size="3xl" className="my-10">
							Identifikačné náramky pre pacientov
						</Title>
						<h2 className="text-2xl font-semibold">
							Certifikované identifikačné náramky pre pacientov a bezpečnosť v zdravotníctve
						</h2>
						<p className="mt-4">
							Ponúkame široké portfólio produktov prispôsobených potrebám rôznych oddelení:
						</p>
						<a
							href="#"
							onClick={scrollToForm}
							className="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-brand px-5 py-2 text-base font-semibold text-white transition hover:bg-brand/90 text-center"
						>
							Konzultujte bezpečnosť vašich pacientov s nami
						</a>
						<p className="mt-6 italic text-slate-600">
							„Našim riešeniam dôveruje väčšina slovenských nemocníc.“
						</p>
					</div>

					<div className="col-span-5 lg:col-span-7 flex flex-col justify-center">
						<Grid cols={1} colsSm={2} colsLg={3} cols2Xl={3}>
							<ImageWithDescription
								className="w-80 m-auto mb-10"
								height="400px"
								title="Na termálnu potlač/s čiarovým alebo QR kódom"
								image="./pages/health/scanner.webp"
								description="Ideálne riešenie pre digitalizované nemocnice. Náramky s čiarovým alebo QR kódom umožňujú okamžitý prístup k elektronickej zdravotnej dokumentácii, ako aj priradenie spotreby ŠZM a medikamentov ku konkrétnemu pacientovi. Vysoká kvalita tlače zabezpečuje bezproblémové skenovanie počas celej doby hospitalizácie."
							/>
							<ImageWithDescription
								className="w-80 m-auto mb-10"
								height="400px"
								title="Popisovateľné náramky"
								image="./pages/health/popisovatelne.webp"
								description="Univerzálne riešenie pre oddelenia ako pohotovosť (triage) alebo krátkodobé príjmy. Ponúkame varianty s ochrannou prelepovacou fóliou, ktorá chráni rukou písané údaje pred rozmazaním a vlhkosťou."
							/>
							<ImageWithDescription
								className="w-80 m-auto mb-10"
								height="400px"
								title="Náramky s prelepovacou fóliou"
								image="./pages/health/prelepovacie.webp"
								description="Náramky s prelepovacou fóliou majú jedinečný samolepiaci, protiodleskový štít, takže ich možno používať s laserovými či termálnymi etiketami alebo štítkami. Náramky chránia údaje pacientov pred prenikaním tekutín a poskytujú vynikajúce čítacie rýchlosti čiarových kódov. Ochranné náramky sú odolné voči vode, trvanlivé a pevné, no zároveň ľahké a pohodlné."
							/>
							<ImageWithDescription
								className="w-80 m-auto mb-10"
								height="400px"
								title="S vkladacím štítkom"
								image="./pages/health/vkladacie.webp"
								description="Náramky s vkladacím štítkom sú pohodlné a jednoduché na používanie. Štítok je nositeľom údajov o pacientovi, ktorý sa vloží do priehľadného ochranného puzdra. Sú umývateľné, ľahké, pevné, nemajú ostré hrany, sú vhodné aj pre citlivú pleť."
							/>
							<ImageWithDescription
								className="w-80 m-auto mb-10"
								height="400px"
								title="Pre matku a dieťa"
								image="./pages/health/pre_matku_a_dieta.webp"
								description="Špeciálne sety pre pôrodnice navrhnuté pre bezpečnú identifikáciu novorodencov. Každý set obsahuje náramky s unikátnym alfanumerickým kódom, ktorý zabezpečuje neomylné spárovanie matky a dieťaťa. Materiál je mimoriadne jemný k citlivej pokožke dojčiat."
							/>
							<ImageWithDescription
								className="w-80 m-auto mb-10"
								height="400px"
								title="Termálne tlačiarne"
								image="./pages/health/termalne_tlaciarne.webp"
								description="Overené riešenie pre potlač náramkov a etikiet v desiatkach slovenských nemocníc. Modely TSC TDP-225W a DH 220 a termálne tlačiarne Zebra vynikajú malými rozmermi, vysokou spoľahlivosťou, jednoduchou obsluhou a nenáročnou údržbou."
							/>
						</Grid>
					</div>

				</Grid>
			</Section>
			<Section fullHeight={false} className="bg-gray-300 min-h-screen py-20">
				<Grid cols={1} colsXl={2} className="h-full">
					<div className="order-2 xl:order-1 w-full h-full flex flex-col justify-center px-10">
						<p className="mb-5">
							Zabezpečte maximálnu bezpečnosť pacientov s naším uceleným systémom zdravotníckych etikiet. Naše riešenia pre identifikáciu liečiv pomáhajú eliminovať zámeny a zaisťujú presné dávkovanie na všetkých oddeleniach.
              Využívame farebné kódovanie podľa medzinárodných noriem (ISO), ktoré umožňuje personálu okamžitú orientáciu aj v kritických situáciách.
						</p>

						<h3 className="block text-xl mb-2 font-semibold">Široké využitie v zdravotníctve</h3>
            <span className="block text-lg mt-1/2">
              Naše etikety sú navrhnuté pre náročné podmienky v oblastiach:
            </span>
						<ul className="list-disc list-inside text-md">
							<li>Operačné sály a OAIM (anestéziologické etikety)</li>
							<li>Laboratóriá a lekárne (presné značenie vzoriek a prípravkov)</li>
							<li>Záchranné služby a urgentné príjmy</li>
							<li>Lôžkové oddelenia nemocníc</li>
						</ul>

						<h3 className="block text-xl mb-2 font-semibold mt-2">Prečo si vybrať naše etikety na striekačky?</h3>
						<ul className="list-disc list-inside text-md">
							<li><span className="font-semibold">Vysoká odolnosť:</span> Odolné voči vode, oderu a rozmazaniu textu.</li>
							<li><span className="font-semibold">Praktickosť:</span> Jednoduchá manipulácia a rýchle použitie priamo pri lôžku pacienta.</li>
							<li><span className="font-semibold">Flexibilita:</span> Dodávame štandardizované sady alebo etikety na mieru podľa vašich špecifikácií.</li>
						</ul>

						<div className="mt-20 h-80 inline-block object-cover object-bottom shadow-2xl overflow-visible bg-brand">
							<div className="relative -top-3 left-3 h-full max-w-full bg-white shadow-2xl text-center">
							 	<img src="./pages/health/etikety.webp" alt="Etikety" className="h-full w-auto inline-block object-contain"/>
							</div>
						</div>
					</div>
					<div className="order-1 xl:order-2 mb-20 xl:mb-0 w-full h-full text-slate-700 flex flex-col justify-center text-right relative">
						
						<div className="bg-brand ml-10 xl:ml-20 py-10 shadow-xl">
							<Title color="light" size="2xl" sizeMd="3xl" sizeXl="4xl" size2Xl={"5xl"} className="border-r-8 border-slate-200 pr-6 mr-10">
								Profesionálne etikety na označovanie liekov a striekačiek
							</Title>
						</div>

						<p className="mt-20 text-center text-xl font-bold">
              <span className='font-semibold block'>Zvýšte úroveň bezpečnosti vo vašom zariadení</span>
							<span className='block mt-1'>
                Potrebujete vzorky produktov alebo vypracovanie cenovej ponuky na mieru?
              </span>
              <a
                href="#"
                onClick={scrollToForm}
                className="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-brand px-5 py-2 text-base font-semibold text-white transition hover:bg-brand/90 text-center"
              >
                Kontaktujte nás
              </a>
						</p>

					</div>
				</Grid>
			</Section>

			<Section fullHeight={false} className="bg-[#f8f0e7] min-h-screen py-20">
				<Grid cols={1} colsXl={2} className="h-full">
					<div className="order-1 xl:order-1 mb-10 xl:mb-0 w-full h-full text-slate-700 flex flex-col justify-center text-left relative">
						<div className="bg-brand mr-10 xl:mr-20 py-10 shadow-xl">
							<Title color="light" size="2xl" sizeMd="3xl" sizeXl="4xl" size2Xl={"5xl"} className="border-l-8 border-slate-200 pl-6 ml-10">
								Chirurgické popisovače Aspen™
							</Title>
						</div>
						<p className="mt-20 text-center text-xl font-bold">
							<span className="font-semibold block">Potrebujete spoľahlivé označenie kože?</span>
							<span className="block mt-1">
								Objednajte popisovače Aspen™ pre váš operačný tím.
							</span>
							<a
								href="#"
								onClick={scrollToForm}
								className="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-brand px-5 py-2 text-base font-semibold text-white transition hover:bg-brand/90 text-center"
							>
								Objednať popisovače Aspen™
							</a>
						</p>
					</div>
					<div className="order-2 xl:order-2 w-full h-full flex flex-col justify-center px-10">
						<h2 className="text-2xl font-semibold text-slate-700">
							Chirurgické popisovače kože Aspen™ pre precízne zákroky
						</h2>
						<p className="mt-4 text-slate-700">
							Zabezpečte maximálnu presnosť pri každom chirurgickom výkone. Chirurgický popisovač Aspen™
							je navrhnutý pre potreby všeobecnej aj plastickej chirurgie, dermatológie a všetkých zákrokov,
							ktoré vyžadujú jasné a nezmazateľné označenie miesta rezu.
						</p>
						<h3 className="mt-8 text-xl font-semibold text-slate-700">
							Hlavné výhody a vlastnosti popisovača:
						</h3>
						<ul className="mt-4 list-disc list-inside space-y-2 text-md text-slate-700">
							<li>
								<span className="font-semibold">Vysoká viditeľnosť:</span> Použitý atrament z genciánová violeť
								zaručuje výbornú čitateľnosť na pokožke počas celého zákroku.
							</li>
							<li>
								<span className="font-semibold">Maximálna hygiena a bezpečnosť:</span> Popisovače sú dodávané
								v sterilnom balení a sú úplne bez obsahu latexu, čím eliminujú riziko alergických reakcií.
							</li>
							<li>
								<span className="font-semibold">Komplexné riešenie:</span> Každý popisovač obsahuje pravítko
								pre presné meranie a plánovanie rezu priamo pred operáciou.
							</li>
							<li>
								<span className="font-semibold">Minimálna objednávka:</span> 100 ks
							</li>
						</ul>
						<a
							href="#"
							onClick={scrollToForm}
							className="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-brand px-5 py-2 text-base font-semibold text-white transition hover:bg-brand/90"
						>
							Objednať popisovače Aspen™
						</a>
						<div className="mt-12 h-80 inline-block object-cover object-bottom shadow-2xl overflow-visible bg-brand">
							<div className="relative -top-3 left-3 h-full max-w-full bg-white shadow-2xl text-center">
								<img src="./pages/health/popisovac.webp" alt="Popisovač Aspen" className="h-full w-auto inline-block object-contain"/>
							</div>
						</div>
					</div>
				</Grid>
			</Section>
			<ContactForm />
		</>
	)
}

export default Health
