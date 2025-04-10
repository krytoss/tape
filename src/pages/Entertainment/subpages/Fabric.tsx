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
			"/pages/entertainment/latkove_naramky/vysivany.png",
			"/pages/entertainment/latkove_naramky/vysivany2.png",
			"/pages/entertainment/latkove_naramky/vysivany3.png",
			"/pages/entertainment/latkove_naramky/vysivany4.png",
			"/pages/entertainment/latkove_naramky/vysivany5.png",
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
			"/pages/entertainment/latkove_naramky/saten.jpg",
			"/pages/entertainment/latkove_naramky/saten2.png",
			"/pages/entertainment/latkove_naramky/saten3.png",
		]
	},
	{
		title: "RFID náramky s čipom",
		description: [
			"Čip/tag vhodný na všetky prevedenia látkových náramkov",
			"Viac typov čipov",
			"Rôzne materiály a veľkosti",
			"Viac informácií v kategórii RFID (preklik na podstránku RFID)"
		],
		image: "/pages/entertainment/latkove_naramky/rfid.jpg"
	},
	{
		title: "Látkové náramky s QR kódom",
		description: [
			"Možnosť potlače QR kódu priamo na náramok alebo na plastový tag",
			"Čip/tag s potlačou QR kódu vhodný na všetky prevedenia látkových náramkov",
			"Rôzne prevedenia QR a čiarových kódov",
			"Viac informácií v kategórii Čiarový/QR kód (preklik na podstránku Čiarový/QR kód)"
		],
		image: "/pages/entertainment/latkove_naramky/qr.jpg"
	},
	{
		title: "Ekologické náramky",
		description: [
			"Štandardný rozmer 15mm x 350mm",
			"Jednorazové alebo opakované použitie",
			"Viac informácií v kategórii EKO PRODUKTY (preklik na podstránku EKO PRODUKTY)"
		],
		image: "/pages/entertainment/latkove_naramky/eko.jpg"
	}
];

const Fabric: React.FC = () => {

	return (
		<Subpage
			products={products}
		/>
	)
}

export default Fabric