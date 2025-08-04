import Cover from "../../components/Layout/Cover";
import Header from "../../components/Layout/Header";
import Section from "../../components/Layout/Section";
import Title from "../../components/Layout/Title";
import TopMenu from "../../components/Navigation/TopMenu";
import ProductCardWide from "../../components/Layout/ProductCardWide";
import ContactForm from "../../sections/ContactForm";

const Business: React.FC = () => {
	return (
		<>
			<TopMenu />
			<Header className="h-[40vh] md:h-[80vh] relative z-20" img="./pages/business/header.webp">
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
						description={[
							"Ponúkame širokú škálu vstupných kariet vďaka možnosti plnofarebnej potlače loga, mena zamestnanca, fotografie a iných dôležitých informácií. Naše karty sú kompatibilné so všetkými bežnými čítačkami a zabezpečovacími systémami.",
							"S personalizovanými vstupnými kartami môžete ľahko sledovať a kontrolovať pohyb zamestnancov, čím zvýšite úroveň bezpečnosti a ochrany vašich priestorov.",
							"Ideálne riešenie pre administratívne budovy, výrobné haly, sklady či konferenčné priestory."
						]}
						image="/pages/business/karty.webp"
						link="/zabava/karty"
					/>

					<ProductCardWide
						title="Šnúrky na krk"
						description={[
							"Šnúrky na krk sú skvelým riešením pre zlepšenie organizácie a bezpečnosti vo vašej firme.",
							"Poskytnite svojim zamestnancom, návštevníkom a obchodným partnerom šnúrky na krk s identifikačnými kartami, kľúčmi alebo bezpečnostnými prístupovými kartami.",
							"V ponuke štýlové saténové aj odolné textilné varianty, všetko s možnosťou plnofarebnej potlače alebo bez potlače.",
							"Posilnite firemnú identitu a zvýšte povedomie o vašej značke pomocou šnúrok na krk s vaším logom a farbami.",
							"Ideálne pre konferencie, obchodné stretnutia, veľtrhy alebo každodenné pracovné prostredie.",
						]}
						image="/pages/business/snurky.webp"
						link="/zabava/snurky"
						invert={true}
					/>

					<ProductCardWide
						title="Puzdrá, rolery, menovky"
						description={[
							"Chráňte a prezentujte identifikačné karty vašich zamestnancov, návštevníkov a obchodných partnerov s našimi kvalitnými plastovými visačkami a puzdrami.",
							"Sú výborným doplnkom ku šnúrkam na krk alebo kartám.",
							"Dôležité identifikačné údaje tak budú vždy viditeľné a chránené.",
							"Menovky sú neoceniteľným nástrojom na budovanie vzťahov a posilnenie komunikácie vo vašej firme.",
							"Umožňujú rýchlu a jednoduchú identifikáciu, čo prispieva k ľahšiemu nadväzovaniu kontaktov a zvýšeniu bezpečnosti v pracovnom prostredí.",
							"Rolery sú praktickým držiakom na visačky s identifikačnými kartami, ktoré možno umiestniť kdekoľvek na oblečení.",
							"Poskytujú pohodlie a flexibilitu pri používaní identifikačných kariet počas pracovného dňa.",
							"V ponuke rôzne veľkosti, materiály a prevedenia, ktoré sa prispôsobia vašim potrebám a firemnému štýlu.",
							"Zabezpečte profesionálny a efektívny systém identifikácie vo vašej firme."
						]}
						image="/pages/business/puzdra_rolery_menovky.webp"
						link="/zabava/puzdra-menovky-rolery"
					/>

					<ProductCardWide
						title="RFID produkty"
						description={[
							"Naša ponuka RFID produktov vrátane čipových kariet, látkových a silikónových náramkov a kľúčeniek zabezpečí bezproblémový a bezpečný systém pre vašu firmu.",
							"RFID riešenia umožňujú bezkontaktné transakcie, čím zvyšujú efektivitu a pohodlie vo vašom pracovnom prostredí.",
							"S našimi RFID riešeniami môžete zlepšiť bezpečnosť a kontrolu prístupu vo vašej firme.",
							"RFID karty a náramky umožňujú jednoduchý a rýchly prístup do firemných priestorov, monitorovanie pohybu zamestnancov a návštevníkov, a zlepšujú celkovú organizáciu.",
							"RFID produkty sú ideálne pre využitie v dochádzkových systémoch, stravovacích kartách a systémoch oprávnenia vstupu.",
							"Naše RFID produkty sú ideálne pre administratívne budovy, sklady, výrobné haly a konferenčné centrá.",
							"Vďaka možnosti plnofarebnej potlače môžete personalizovať karty a náramky s vaším logom a ďalšími dôležitými informáciami."
						]}
						image="/pages/business/rfid.webp"
						link="/zabava/rfid"
						invert={true}
					/>

					<ProductCardWide
						title="Tlačiarne a QR/čiarové kódy"
						description={[
							"Vytlačte čiarové kódy, texty, logá a jedinečné variabilné údaje na každý identifikátor priamo vo firme.",
							"Naše tlačiarne umožňujú tlač čiarových kódov a QR kódov, ktoré zabezpečia rýchlu a spoľahlivú identifikáciu vašich zamestnancov a návštevníkov.",
							"Naše riešenia sú ideálne pre rôzne firemné aplikácie vrátane dochádzkových systémov, stravovacích kariet a oprávnení vstupu.",
							"Začať s čiarovými kódmi a QR kódmi je jednoduchšie, než si myslíte.",
							"Dokonca aj malé organizácie môžu profitovať z ich používania vďaka nízkym počiatočným nákladom.",
							"Používaním čiarových kódov a QR kódov zabezpečíte rýchlu a spoľahlivú identifikáciu zamestnancov a ochranu pred falšovaním.",
							"Naše tlačiarne a čiarové/QR kódy sú ideálne pre administratívne budovy, sklady, výrobné haly a konferenčné centrá."
						]}
						image="/pages/business/tlaciarne.webp"
						link="/zabava/tlaciarne"
						contain
					/>
				</div>
			</Section>
			<ContactForm />
		</>
	);
}

export default Business