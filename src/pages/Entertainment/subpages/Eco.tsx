import { Link } from "react-router";
import Subpage from "../components/subpages/Subpage";

const products = [
    {
        title: "EKO šnúrky",
        description: [
            "Kompostovateľné, recyklované PET a bambusové šnúrky",
            "Šírka 10, 15, 20 a 25mm",
            "V ponuke bez potlače alebo s potlačou",
            "Potlač jednostranná alebo obojstranná",
            <>Rôzne doplnky a zakončenia (viac informácií v kategórii <Link to="/zabava/snurky" className="text-brand hover:underline">Šnúrky na krk</Link>)</>
        ],
        image: [
			"/pages/entertainment/eko/eko_snurky1.png",
			"/pages/entertainment/eko/eko_snurky2.png",
			"/pages/entertainment/eko/eko_snurky3.png",
		]
    },
    {
        title: "EKO látkové náramky",
        description: [
            "Štandardný rozmer 15mm x 350mm",
            "Jednostranná plnofarebná sublimačná potlač",
            "V ponuke drevené patentky na jednorazové alebo opakované použitie",
            "Vyrobené zo 100% recyklovaného polyesteru získaného z recyklovaných fliaš",
            "Pozri aj https://www.pdc-big.com/info/eco-friendly#"
        ],
        image: [
			"/pages/entertainment/eko/eko_naramky1.png",
			"/pages/entertainment/eko/eko_naramky2.png",
		]
    },
    {
        title: "EKO karty",
        description: [
            "Štandardný rozmer 85x54 / 54x85 mm, spĺňajúci normu ISO 7810",
            "Jednostranná a obojstranná potlač",
            "Bio PVC, trávový papier, recyklované PVC, eko papier",
            "Množstvo doplnkov ako personalizácia, magnetické pole a iné",
            <>Pre viac informácií nás <Link to="" className="text-brand hover:underline">kontaktujte</Link> alebo nám odošlite správu cez <Link to="" className="text-brand hover:underline">kontaktný formulár</Link></>
        ],
        image: [
			"/pages/entertainment/eko/eko_karty1.png",
			"/pages/entertainment/eko/eko_karty2.png",
			"/pages/entertainment/eko/eko_karty3.png",
		]
    }
];

const Eco: React.FC = () => {

  return (
	<Subpage
		products={products}
	/>
  );
};

export default Eco;