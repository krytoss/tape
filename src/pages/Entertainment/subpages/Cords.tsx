import { Link } from "react-router";
import Subpage from "../components/subpages/Subpage";

const products = [
	{
	  title: "Sublimačné šnúrky",
	  description: [
		"Šírky 10, 15, 20 alebo 25 mm",
		"Jednostranná alebo obojstranná plnofarebná potlač",
		"Rôzne doplnky (trojzubec, bezpečnostná poistka a iné)",
		"Možnosť rôznych zakončení (karabína, úchyt na mobil, krúžok na kľúče a iné)"
	  ],
	  image: [
		"/pages/entertainment/snurky/snurky_sublimacne1.png",
		"/pages/entertainment/snurky/snurky_sublimacne2.png",
		"/pages/entertainment/snurky/snurky_sublimacne3.png",
		"/pages/entertainment/snurky/snurky_sublimacne4.png",
		"/pages/entertainment/snurky/snurky_sublimacne5.png",
		"/pages/entertainment/snurky/snurky_sublimacne6.png",
	  ]
	},
	{
	  title: "Šnúrky so sieťotlačou",
	  description: [
		"Šírky 10, 15, 20 alebo 25 mm",
		"Jednostranná potlač s možnosťou viacerých farieb",
		"Rôzne doplnky (trojzubec, bezpečnostná poistka a iné)",
		"Možnosť rôznych zakončení (karabína, úchyt na mobil, krúžok na kľúče a iné)"
	  ],
	  image: [
		"/pages/entertainment/snurky/snurky_sietotlac1.png",
		"/pages/entertainment/snurky/snurky_sietotlac2.png",
		"/pages/entertainment/snurky/snurky_sietotlac3.png",
		"/pages/entertainment/snurky/snurky_sietotlac4.png",
	  ]
	},
	{
	  title: "Šnúrky bez potlače",
	  description: [
		"Rôzne šírky, materiály a zakončenia",
		"Vhodné na backstage pasy pre organizátorov a účinkujúcich",
		"Niektoré modely skladom - dostupné ihneď",
		<>Pre zaslanie kompletného katalógu nás <Link to="" className="text-brand hover:underline">kontaktujte</Link></>
	  ],
	  image: [
		"/pages/entertainment/snurky/snurky_bez_potlace1.png",
		"/pages/entertainment/snurky/snurky_bez_potlace2.png",
		"/pages/entertainment/snurky/snurky_bez_potlace3.png",
	  ]
	},
	{
	  title: "Ekologické šnúrky",
	  description: [
		"Kompostovateľné, recyklované PET a bambusové materiály",
		"Rôzne šírky, doplnky a farebné prevedenia",
		<>Viac informácií v kategórii <Link to="/zabava/eko" className="text-brand hover:underline">EKO produkty</Link></>
	  ],
	  image: [
		"/pages/entertainment/snurky/snurky_eko1.png",
		"/pages/entertainment/snurky/snurky_eko2.png",
		"/pages/entertainment/snurky/snurky_eko3.png",
		"/pages/entertainment/snurky/snurky_eko4.png",
	  ]
	},
	{
	  title: "Doplnky k šnúrkam",
	  description: [],
	  image: [
		"/pages/entertainment/snurky/doplnky_ku_snurkam.png"
	  ]
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