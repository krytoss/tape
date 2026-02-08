import { Link } from "react-router";
import Subpage from "../components/subpages/Subpage";

const products = [
    {
        title: "RFID karty",
        description: [
            "rozmer 85x54mm/54x85mm",
            "biele karty pre vlastnú dotlač",
            "plnofarebná jednostranná alebo obojstranná potlač",
            "vhodné ako darčekové, vernostné, klubové a zľavové karty",
            "rôzne povrchové prevedenia a doplnky",
            "rôzne frekvencie 125 kHz, 13.56 MHz, UHF",
            <><Link to="/zabava/karty" className="text-brand hover:underline">čipy TK4100, EM 4200, MF 1k S50, Fudan a iné</Link></>
        ],
        image: [
			"/pages/entertainment/rfid/RFID_karty1.webp",
			"/pages/entertainment/rfid/RFID_karty2.webp",
			"/pages/entertainment/rfid/RFID_karty3.webp",
			"/pages/entertainment/rfid/RFID_karty4.webp",

		]
    },
    {
        title: "Silikónové náramky s RFID čipom",
        description: [
            "v ponuke rôzne šírky náramkov a obvody",
            "možnosť potlače, ražby, ražby s výplňou",
            "tvar oválny alebo guľatý",
            "rôzne možnosti zapínania remienka",
            "farebnosť náramkov podľa pantone vzorkovníka",
            "rôzne frekvencie 125 kHz, 13.56 MHz, UHF",
            <><Link to="/zabava/silikonove-naramky" className="text-brand hover:underline">na výber veľké množstvo čipov (MF, FUDAN, EM4200, TK4100 a iné)</Link></>
        ],
        image: [
			"/pages/entertainment/rfid/RFID_silikony1.webp",
			"/pages/entertainment/rfid/RFID_silikony2.webp",
			//"/pages/entertainment/rfid/RFID_silikony3.webp",
			"/pages/entertainment/rfid/RFID_silikony4.webp",
			"/pages/entertainment/rfid/RFID_silikony5.webp",
			/* "/pages/entertainment/rfid/RFID_silikony6.webp",
			"/pages/entertainment/rfid/RFID_silikony7.webp",
			"/pages/entertainment/rfid/RFID_silikony8.webp",
			"/pages/entertainment/rfid/RFID_silikony9.webp",
			"/pages/entertainment/rfid/RFID_silikony10.webp",
			"/pages/entertainment/rfid/RFID_silikony11.webp", */
		]
    },
    {
        title: "Látkové náramky s RFID čipom",
        description: [
            "čip/tag vhodný na všetky prevedenia látkových náramkov",
            "rôzne typy čipov (MF, FUDAN, EM4200, TK4100 a iné)",
            "TAG z mäkkého alebo tvrdého plastu",
            "rôzne frekvencie 125 kHz, 13.56 MHz, UHF",
            <><Link to="/zabava/latkove-naramky" className="text-brand hover:underline">rôzne materiály a veľkosti</Link></>
        ],
        image: [
			"/pages/entertainment/rfid/RFID_latkove1.webp",
			"/pages/entertainment/rfid/RFID_latkove2.webp",
			"/pages/entertainment/rfid/RFID_latkove3.webp",
			"/pages/entertainment/rfid/RFID_latkove4.webp",
		]
    },
    {
        title: "Kľúčenky s RFID čipom",
        description: [
            "prístupový čip na kľúče, vhodné na použitie s dochádzkovými systémami",
            "čipové otváranie dverí, použitie v priemysle",
            "frekvencie 125 kHz, 13.56 MHz, UHF",
            "rôzne typy čipov (MF, FUDAN, EM4200, TK4100 a iné)"
        ],
        image: [
			"/pages/entertainment/rfid/RFID_klucenky1.webp",
			"/pages/entertainment/rfid/RFID_klucenky2.webp",
			"/pages/entertainment/rfid/RFID_klucenky3.webp",
		]
    }
];

const Rfid: React.FC = () => {

  return (
	<Subpage
		products={products}
	/>
  );
};

export default Rfid;