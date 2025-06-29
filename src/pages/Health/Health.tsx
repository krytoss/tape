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
			<Header className="h-[80vh] relative z-20" img="./pages/health/header.jpeg">
				<Cover>
					<Title color="light" size="3xl text-center">
						Bezpečnosť v zdravotníctve
					</Title>
				</Cover>
			</Header>
			<Section fullHeight={false} className="px-10 lg:px-20 xl:px-60 py-20 overflow-visible">
				<div className="relative z-20">
					<p>
						<span className="text-3xl block font-semibold">
							V našej firme veríme, že bezpečnosť pacientov je na prvom mieste. Preto vám prinášame špičkové riešenia na identifikáciu a označovanie v zdravotníckych zariadeniach, ktoré zvyšujú úroveň starostlivosti a znižujú riziko chýb.
						</span>
						<span className="block text-2xl mt-5">
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
						<p className="mb-5">
							Identifikačné náramky pre pacientov poskytujú jasné a presné informácie o každom pacientovi. Vďaka nim zdravotnícky personál rýchlo a jednoducho identifikuje pacienta, čo zvyšuje bezpečnosť a efektivitu starostlivosti.
						</p>
						<p className="mb-5">
							Dnes dokážeme v oblasti identifikácie uspokojiť akékoľvek požiadavky - riešenia na termálnu potlač (s čiarovým a QR kódom), popisovateľné náramky, náramky s vkladacím štítkom, náramky s prelepovacou fóliou, zabezpečujeme identifikáciu matiek a novorodencov aj náramky na TRIAGE.
						</p>
						<p className="mb-5">
							Identifikačné náramky pre pacientov neobsahujú latex, ftaláty, sú antimikrobiálne a odolné proti alkoholu, vode, mydlu, dezinfekciám a taktiež väčšine kvapalín, ktoré sa v zdravotníctve používajú.
						</p>
						<p>
							Ponúkame široké portfólio produktov v rôznych farbách, veľkostiach, materiáloch podľa individuálnych potrieb.
						</p>
						<p className="font-semibold mt-6 text-2xl">
							Pre viac informácií nám zavolajte alebo <a className="text-brand" href="#" onClick={scrollToForm}>vyplňte kontaktný formulár</a>.
						</p>
					</div>

					<div className="col-span-5 lg:col-span-7 flex flex-col justify-center">
						<Grid cols={1} colsSm={2} colsLg={3} cols2Xl={3}>
							<ImageWithDescription
								className="w-80 m-auto mb-10"
								height="400px"
								title="Na termálnu potlač/s čiarovým alebo QR kódom"
								image="./pages/health/scanner.jpg"
								description="Identifikačné náramky pre pacientov, ktoré využívajú termotlač na zabezpečenie správnej identifikácie a bezpečnosti pacientov. Náramky majú za cieľ zlepšiť identifikáciu pacientov, komunikáciu a bezpečnosť pri operáciách a medikamentóznej liečbe.
Vysoká kvalita tlače zaručuje spoľahlivé skenovanie čiarových a QR kódov.
Náramky sú odolné voči svetlu, vlhkosti, čistiacim prostriedkom a tekutinám.
Sú vyrobené z mäkkého, ľahkého materiálu, ktorý je príjemný na nosenie a neobsahuje latex. Majú antimikrobiálnu vrstvu, ktorá chráni povrch proti prenosu baktérií."
							/>
							<ImageWithDescription
								className="w-80 m-auto mb-10"
								height="400px"
								title="Popisovateľné náramky"
								image="./pages/health/popisovatelne.png"
								description="Popisovateľné náramky sú bezproblémovým riešením pre identifikáciu pacienta v akomkoľvek zdravotníckom zariadení! Pružné a všestranné popisovateľné  náramky sú ideálnou voľbou pre krátkodobé i dlhodobé príjmy pacientov. Jednoduchá manipulácia a možnosť rýchlej vizuálnej pozitívnej identifikácie je výhodou i pre špeciálne oddelenia ako je pohotovosť. Vyberte si zo širokej škály farieb."
							/>
							<ImageWithDescription
								className="w-80 m-auto mb-10"
								height="400px"
								title="Náramky s prelepovacou fóliou"
								image="./pages/health/prelepovacie.png"
								description="Náramky s prelepovacou fóliou majú jedinečný samolepiaci, protiodleskový štít, takže ich možno používať s laserovými či termálnymi etiketami alebo štítkami. Náramky chránia údaje pacientov pred prenikaním tekutín a poskytujú vynikajúce čítacie rýchlosti čiarových kódov. Ochranné náramky sú odolné voči vode, trvanlivé a pevné, no zároveň ľahké a pohodlné."
							/>
							<ImageWithDescription
								className="w-80 m-auto mb-10"
								height="400px"
								title="S vkladacím štítkom"
								image="./pages/health/vkladacie.png"
								description="Náramky s vkladacím štítkom sú pohodlné a jednoduché na používanie. Štítok je nositeľom údajov o pacientovi, ktorý sa vloží do priehľadného ochranného puzdra. Sú umývateľné, ľahké, pevné, nemajú ostré hrany, sú vhodné aj pre citlivú pleť."
							/>
							<ImageWithDescription
								className="w-80 m-auto mb-10"
								height="400px"
								title="Pre matku a dieťa"
								image="./pages/health/pre_matku_a_dieta.png"
								description="Identifikačné náramky v pôrodniciach pre matku a dieťa sú obľúbenou voľbou na trhu. Cieľom je zaistiť neomylnú identifikáciu matky, novorodenca, prípadne ďalších rodinných príslušníkov. Každý pár náramkov je označený jedinečným alfanumerickým kódom pre jednoduché spárovanie matky a dieťaťa. Sú umývateľné, ľahké, nemajú ostré hrany, vhodné pre kojencov aj citlivú pleť."
							/>
							<ImageWithDescription
								className="w-80 m-auto mb-10"
								height="400px"
								title="Termálne tlačiarne"
								image="./pages/health/termalne_tlaciarne.png"
								description="Zabezpečujeme dodávku tlačiarní pre termálnu potlač identifikačných náramkov aj etikiet.  Vyznačujú sa malými rozmermi. Sú praktické, čo umožňuje užívateľom jednoduchú manipuláciu s rolkami. Termálne tlačiarne TSC TDP-225W na identifikáciu pacientov používa mnoho nemocníc na Slovensku."
							/>
						</Grid>
					</div>

				</Grid>
			</Section>
			<Section fullHeight={false} className="bg-gray-300 min-h-screen py-10">
				<Grid cols={1} colsXl={2} className="h-full">
					<div className="order-2 xl:order-1 w-full h-full flex flex-col justify-center px-10">
						<p className="mb-5">
							Ponúkame špeciálne etikety na označovanie, ktoré zabezpečujú správne označenie a identifikáciu liekov a striekačiek.<br/>
							Tieto etikety pomáhajú predchádzať omylom a zaisťujú, že každý pacient dostane správnu dávku a typ liečiva.
						</p>
						<p className="mb-5">
							Sme dodávateľom  komplexného, uceleného systému etikiet, pričom farebné kódovanie vychádza z medzinárodných noriem.<br/>
							<span className="font-semibold">Využitie</span>: operačné sály, OAIM, ostatné oddelenia, laboratória, lekárne, záchranky
						</p>

						<span className="block text-xl mb-2">Naše etikety sú:</span>
						<ul className="list-disc list-inside text-md">
							<li>odolné proti rozmazaniu</li>
							<li>odolné voči oderu a vode</li>
							<li>majú jednoduché a pohodlné použitie</li>
							<li>štandardné alebo na zákazku</li>
						</ul>

						<div className="mt-20 h-80 inline-block object-cover object-bottom shadow-2xl overflow-visible bg-brand">
							<div className="relative -top-3 left-3 h-full max-w-full bg-white shadow-2xl text-center">
							 	<img src="./pages/health/etikety.png" alt="Etikety" className="h-full w-auto inline-block object-contain"/>
							</div>
						</div>
					</div>
					<div className="order-1 xl:order-2 mb-20 xl:mb-0 w-full h-full text-slate-700 flex flex-col justify-center text-right relative">
						
						<div className="bg-brand ml-10 xl:ml-20 py-10 shadow-xl">
							<Title color="light" size="2xl" sizeMd="4xl" sizeXl="6xl" size2Xl={"6xl"} className="border-r-8 border-slate-200 pr-6 mr-10">
								Etikety na označovanie
							</Title>
						</div>

						<p className="mt-20 text-center text-2xl font-bold">
							Katalóg predtlačených etikiet k dispozícii - <a className="text-brand uppercase" href="#" onClick={scrollToForm}>vyplňte formulár</a>
						</p>

					</div>
				</Grid>
			</Section>
			<ContactForm />
		</>
	)
}

export default Health