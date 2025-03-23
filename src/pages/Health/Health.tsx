import Cover from "../../components/Layout/Cover"
import Grid from "../../components/Layout/Grid"
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
			<Header className="h-[80vh] relative z-20" img="./health/header.jpeg">
				<Cover>
					<Title color="light" size="3xl text-center">
						Bezpečnosť v zdravotníctve
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
				<div className="relative z-20">
					<p>
						<span className="text-3xl block font-semibold">
							V našej firme veríme, že bezpečnosť pacientov je na prvom mieste.
							Preto vám prinášame špičkové riešenia na identifikáciu a označovanie
							v zdravotníckych zariadeniach, ktoré zvyšujú úroveň starostlivosti a
							znižujú riziko chýb.
						</span>
						<span className="block text-2xl mt-5">
							Sme oficiálnym distribútorom spoločnosti <Link className="text-brand text-[1rem] !font-bold" to="https://www.pdcorp.com">PDC Precision Dynamics Corporation</Link> (patriaceho do skupiny Brady Corporation) pre Slovenskú republiku. 
						</span>
						<span className="block text-xl mt-5">
						Precision Dynamics Corporation je najväčším celosvetovým výrobcom identifikačných náramkov a etikiet na označovanie liekov a striekačiek. Poskytuje stopercentnú kvalitu, pokiaľ ide o služby, dizajn a výrobu. Potvrdzujú to aj certifikáty ISO-9001:2015 a ISO-13485:2016, ISO-14001:2015 hlavného závodu v San Fernando v Kalifornii v USA.
						PDC ako prvá na svete uviedla na trh identifikačné náramky v roku 1956.
						</span>
						<span className="block text-xl mt-5">
							Identifikácia ovplyvňuje všetky aspekty klinickej starostlivosti, od skúsenosti pacientov až po spokojnosť zdravotníckeho personálu.
							Kvalita identifikačných riešení je kľúčová pre bezpečnosť pacientov. Produkty od PDC sú navrhnuté tak, aby zlepšili klinické výsledky v kritických bodoch starostlivosti o pacientov. Náramky a štítky sú vyrobené s dôrazom na maximálnu bezpečnosť, pevnosť a trvanlivosť. 
						</span>
					</p>
				</div>
			</Section>
			<Section className="relative z-20">
				<Grid className="h-full" cols={10}>

					<div className="col-span-3 text-slate-700 p-10 flex flex-col justify-center">
						<Title size="3xl" className="my-10">
							Identifikačné náramky pre pacientov
						</Title>
						<p className="mb-5">
							Identifikačné náramky pre pacientov poskytujú jasné a presné informácie o každom pacientovi. Vďaka nim zdravotnícky personál rýchlo a jednoducho identifikuje pacienta, čo zvyšuje bezpečnosť a efektivitu starostlivosti.
						</p>
						<p className="mb-5">
							Dnes dokážeme v oblasti identifikácie uspokojiť akékoľvek požiadavky – riešenia na termálnu potlač, popisovateľné náramky, náramky s vkladacím štítkom, náramky s prelepovacou fóliou, zabezpečujeme identifikáciu matiek a novorodencov aj náramky na TRIAGE.
						</p>
						<p className="mb-5">
							Identifikačné náramky pre pacientov neobsahujú latex, ftaláty, sú antimikrobiálne a odolné proti alkoholu, vode, mydlu, dezinfekciám a taktiež väčšine kvapalín, ktoré sa v zdravotníctve používajú.
						</p>
						<p>
							Ponúkame široké portfólio produktov v rôznych farbách, veľkostiach, materiáloch podľa individuálnych potrieb.
						</p>
					</div>

					<div className="col-span-7 flex flex-col justify-center">
						<Grid cols={3}>
							<ImageWithDescription
								className="w-80 m-auto mb-10"
								height="400px"
								title="Na termálnu potlač/s čiarovým alebo QR kódom"
								image="./health/scanner.jpg"
								description="Identifikačné náramky pre pacientov, ktoré využívajú termotlač na zabezpečenie správnej identifikácie a bezpečnosti pacientov. Náramky majú za cieľ zlepšiť identifikáciu pacientov, komunikáciu a bezpečnosť pri operáciách a medikamentóznej liečbe.
Vysoká kvalita tlače zaručuje spoľahlivé skenovanie čiarových a QR kódov.
Náramky sú odolné voči svetlu, vlhkosti, čistiacim prostriedkom a tekutinám.
Sú vyrobené z mäkkého, ľahkého materiálu, ktorý je príjemný na nosenie a neobsahuje latex. Majú antimikrobiálnu vrstvu, ktorá chráni povrch proti prenosu baktérií."
							/>
							<ImageWithDescription
								className="w-80 m-auto mb-10"
								height="400px"
								title="Popisovateľné náramky"
								image="./health/popisovatelne.png"
								description="Popisovateľné náramky sú bezproblémovým riešením pre identifikáciu pacienta v akomkoľvek zdravotníckom zariadení! Pružné a všestranné popisovateľné  náramky sú ideálnou voľbou pre krátkodobé i dlhodobé príjmy pacientov. Jednoduchá manipulácia a možnosť rýchlej vizuálnej pozitívnej identifikácie je výhodou i pre špeciálne oddelenia ako je pohotovosť. Vyberte si zo širokej škály farieb."
							/>
							<ImageWithDescription
								className="w-80 m-auto mb-10"
								height="400px"
								title="Náramky s prelepovacou fóliou"
								image="./health/prelepovacie.png"
								description="Náramky s prelepovacou fóliou majú jedinečný samolepiaci, protiodleskový štít, takže ich možno používať s laserovými či termálnymi etiketami alebo štítkami. Náramky chránia údaje pacientov pred prenikaním tekutín a poskytujú vynikajúce čítacie rýchlosti čiarových kódov. Ochranné náramky sú odolné voči vode, trvanlivé a pevné, no zároveň ľahké a pohodlné."
							/>
							<ImageWithDescription
								className="w-80 m-auto"
								height="400px"
								title="S vkladacím štítkom"
								image="./health/vkladacie.png"
								description="Náramky s vkladacím štítkom sú pohodlné a jednoduché na používanie. Štítok je nositeľom údajov o pacientovi, ktorý sa vloží do priehľadného ochranného puzdra. Sú umývateľné, ľahké, pevné, nemajú ostré hrany, sú vhodné aj pre citlivú pleť."
							/>
							<ImageWithDescription
								className="w-80 m-auto"
								height="400px"
								title="Pre matku a dieťa"
								image="./health/pre_matku_a_dieta.png"
								description="Identifikačné náramky v pôrodniciach pre matku a dieťa sú obľúbenou voľbou na trhu. Cieľom je zaistiť neomylnú identifikáciu matky, novorodenca, prípadne ďalších rodinných príslušníkov. Každý pár náramkov je označený jedinečným alfanumerickým kódom pre jednoduché spárovanie matky a dieťaťa. Sú umývateľné, ľahké, nemajú ostré hrany, vhodné pre kojencov aj citlivú pleť."
							/>
							<ImageWithDescription
								className="w-80 m-auto"
								height="400px"
								title="Termálne tlačiarne"
								image="./health/termalne_tlaciarne.png"
								description="Zabezpečujeme dodávku tlačiarní pre termálnu potlač identifikačných náramkov aj etikiet.  Vyznačujú sa malými rozmermi. Sú praktické, čo umožňuje užívateľom jednoduchú manipuláciu s rolkami. Termálne tlačiarne TSC TDP-225W na identifikáciu pacientov používa mnoho nemocníc na Slovensku."
							/>
						</Grid>
					</div>

				</Grid>
			</Section>
			<Section className="bg-gray-300">
				<Grid cols={2} className="h-full">
					<div className="w-full h-full flex flex-col justify-center px-10">
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
							<img src="./health/etikety.jpeg" className="relative -top-3 left-3 h-80 w-full inline-block object-cover object-bottom shadow-2xl"/>
						</div>
					</div>
					<div className="w-full h-full text-slate-700 flex flex-col justify-center text-right relative">
						
						<div className="bg-brand ml-20 py-10 shadow-xl">
							<Title color="light" size="8xl border-r-8 border-slate-200 pr-6 mr-10">
								Etikety na označovanie
							</Title>
						</div>

						<p className="mt-20 text-center text-lg">
							Katalóg predtlačených etikiet k dispozícii - <Link className="text-brand text-lg" to="#">vyplňte formulár</Link>
						</p>

					</div>
				</Grid>
			</Section>
		</>
	)
}

export default Health