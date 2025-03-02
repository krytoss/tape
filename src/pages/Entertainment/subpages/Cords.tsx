import Subpage from "../components/subpages/Subpage";

const products = [
	{
		title: "Sublimačné šnúrky",
		description: [
			"Šírky 10, 15, 20 alebo 25 mm",
			"Jednostranná alebo obojstranná plnofarebná potlač",
			"Rôzne doplnky (trojzubec, poistka a iné)",
			"Možnosť rôznych zakončení (karabína, úchyt na mobil, krúžok na kľúče a iné)"
		],
		image: "/pages/entertainment/snurky/snurky_sublimacne.png"
	},
	{
		title: "Šnúrky so sieťotlačou",
		description: [
			"Šírky 10, 15, 20 alebo 25 mm",
			"Jednostranná potlač s možnosťou viacerých farieb",
			"Rôzne doplnky (trojzubec, poistka a iné)",
			"Možnosť rôznych zakončení (karabína, úchyt na mobil, krúžok na kľúče a iné)"
		],
		image: "/pages/entertainment/snurky/snurky_sietotlac.png"
	},
	{
		title: "Šnúrky bez potlače",
		description: [
			"Rôzne šírky, materiály a zakončenia",
			"Vhodné na backstage pasy pre organizátorov a účinkujúcich",
			"Niektoré modely skladom - dostupné ihneď"
		],
		image: "/pages/entertainment/snurky/snurky_bez_potlace.png"
	},
	{
		title: "Ekologické šnúrky",
		description: [
			"Kompostovateľné, recyklované PET a bambusové materiály",
			"Rôzne šírky, doplnky a farebné prevedenia",
			"Viac informácií v kategórii EKO PRODUKTY (preklik na podstránku EKO PRODUKTY)"
		],
		image: "/pages/entertainment/snurky/snurky_eko.png"
	},
	{
		title: "Doplnky k šnúrkam",
		description: [],
		image: "/pages/entertainment/snurky/snurky_karabiny.png"
	}
];

const Cords: React.FC = () => {

  return (
	<Subpage
		products={products}
	/>
  );
};

export default Cords;