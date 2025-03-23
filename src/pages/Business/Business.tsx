import { Link } from "react-router";
import Cover from "../../components/Layout/Cover";
import Header from "../../components/Layout/Header";
import Section from "../../components/Layout/Section";
import Title from "../../components/Layout/Title";
import TopMenu from "../../components/Navigation/TopMenu";

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
						Precision Dynamics Corporation je najväčším celosvetovým výrobcom identifikačných náramkov a etikiet na označovanie liekov a striekačiek. Poskytuje stopercentnú kvalitu, pokiaľ ide o služby, dizajn a výrobu. Potvrdzujú to aj certifikáty ISO-9001:2015 a ISO-13485:2016, ISO-14001:2015 hlavného závodu v San Fernando v Kalifornii v USA.
						PDC ako prvá na svete uviedla na trh identifikačné náramky v roku 1956.
						</span>
						<span className="block text-xl mt-5">
							Identifikácia ovplyvňuje všetky aspekty klinickej starostlivosti, od skúsenosti pacientov až po spokojnosť zdravotníckeho personálu.
							Kvalita identifikačných riešení je kľúčová pre bezpečnosť pacientov. Produkty od PDC sú navrhnuté tak, aby zlepšili klinické výsledky v kritických bodoch starostlivosti o pacientov. Náramky a štítky sú vyrobené s dôrazom na maximálnu bezpečnosť, pevnosť a trvanlivosť. 
						</span>
					</p>
				</div>
			</Section>
		</>
	);
}

export default Business