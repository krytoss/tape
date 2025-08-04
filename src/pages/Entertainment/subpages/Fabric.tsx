import { Link } from "react-router";
import Subpage from "../components/subpages/Subpage";

const products = [
	{
		title: "Vyšívané náramky",
		description: [
			"Štandardný rozmer 15mm x 350mm",
			"Možnosť použiť 7 farieb nití",
			"Jednorazové alebo opakované použitie"
		],
		image: [
			"/pages/entertainment/latkove_naramky/vysivany.webp",
			"/pages/entertainment/latkove_naramky/vysivany2.webp",
			"/pages/entertainment/latkove_naramky/vysivany3.webp",
			"/pages/entertainment/latkove_naramky/vysivany4.webp",
			"/pages/entertainment/latkove_naramky/vysivany5.webp",
		]
	},
	{
		title: "Saténové náramky",
		description: [
			"Štandardný rozmer 15mm x 350mm",
			"Dve prevedenia materiálu (tenší a hrubší satén)",
			"Jednostranná aj obojstranná potlač"
		],
		image: [
			"/pages/entertainment/latkove_naramky/saten.webp",
			"/pages/entertainment/latkove_naramky/saten2.webp",
			"/pages/entertainment/latkove_naramky/saten3.webp",
		]
	},
	{
		title: "RFID náramky s čipom",
		description: [
			"Čip/tag vhodný na všetky prevedenia látkových náramkov",
			"Viac typov čipov",
			"Rôzne materiály a veľkosti",
			<>Viac informácií v kategórii <Link to="/zabava/rfid" className="text-brand hover:underline">RFID</Link></>
		],
		image: "/pages/entertainment/latkove_naramky/rfid.webp"
	},
	{
		title: "Látkové náramky s QR kódom",
		description: [
			"Možnosť potlače QR kódu priamo na náramok alebo na plastový tag",
			"Čip/tag s potlačou QR kódu vhodný na všetky prevedenia látkových náramkov",
			"Rôzne prevedenia QR a čiarových kódov",
			<>Viac informácií v kategórii <Link to="/zabava/tlaciarne" className="text-brand hover:underline">Čiarový/QR kód</Link></>
		],
		image: "/pages/entertainment/latkove_naramky/qr.webp"
	},
	{
		title: "Ekologické náramky",
		description: [
			"Štandardný rozmer 15mm x 350mm",
			"Jednorazové alebo opakované použitie",
			<>Viac informácií v kategórii <Link to="/zabava/eko-produkty" className="text-brand hover:underline">EKO PRODUKTY</Link></>
		],
		image: "/pages/entertainment/latkove_naramky/eko.webp"
	}
];

const options = {
	title: "Patentky",
	image: [
		"/pages/entertainment/latkove_naramky/patentky_jednorazove.webp",
		"/pages/entertainment/latkove_naramky/patentky_opakovane.webp",
	]
}

const Fabric: React.FC = () => {

	return (
		<Subpage
			products={products}
			options={options}
		/>
	)
}

export default Fabric