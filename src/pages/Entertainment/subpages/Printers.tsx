import Subpage from "../components/subpages/Subpage";

const products = [
	{
	  title: "Tlačiarne",
	  short_description: "Vytlačte čiarové kódy, text, logá a jedinečné variabilné údaje na každý náramok priamo na mieste podujatia. Pri atrakciách s časovanými aktivitami je možné termálne náramky s čiarovými kódmi vytlačiť aj s dátumom a časom vstupu.",
	  description: [
		"TSC TDP225W tlačiareň s priamou termálnou tlačou bola vyvinutá špeciálne pre potreby potlače identifikačných náramkov",
		"možná tlač aj akýchkoľvek iných štítkov do šírky 52 mm",
		"predný LCD displej",
		"jednoduché zakladanie média",
		"štandardné pripojenie cez Ethernet a USB 2.0",
		"podporuje Zebra ZPL-II a EPL2",
		"možnosť upevnenia tlačiarne aj na stenu",
	  ],
	  image: "/pages/entertainment/tlaciarne/tlaciaren.png"
	},
	{
	  title: "Čiarový/QR kód",
	  short_description: "Začať s čiarovými kódmi a QR kódmi je jednoduchšie, než si myslíte. Dokonca aj malé organizácie môžu profitovať z ich používania. Výhodou sú nízke počiatočné náklady. Používaním čiarových kódov a QR kódov umožníte prepojenie identifikačných náramkov zákazníkov k vašim predajným miestam, zabezpečíte rýchlu a spoľahlivú identifikáciu návštevníkov a ochranu pred falšovaním.",
	  description: [
		"možnosť natlačiť čiarový kód (QR) pre interakcie na sociálnych médiách na rôzne typy náramkov",
		"TAG (identifikátory) s natlačeným čiarovým kódom (QR) aplikovateľný na rôzne typy náramkov",
		"čiarové kódy pre vstupné, predajné miesta a iné platobné systémy",
		"vytlačte si vlastné prispôsobené náramky v priebehu niekoľkých sekúnd",
		"tlač náramkov na požiadanie a na mieste",
		"tlačte len toľko, koľko potrebujete – keď ich potrebujete",
	  ],
	  image: [
		"/pages/entertainment/tlaciarne/kod1.png",
		"/pages/entertainment/tlaciarne/kod2.png",
		"/pages/entertainment/tlaciarne/kod3.png",
	  ]
	}
];

const Printers: React.FC = () => {

	return (
		<Subpage
			products={products}
			cols = {{
				default: 2,
				md: 2,
				xl: 2,
			}}
		/>
	)
}

export default Printers