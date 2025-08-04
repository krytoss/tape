import { Link } from "react-router";
import Subpage from "../components/subpages/Subpage";

const products = [
	{
	  title: "Silikónové náramky s potlačou",
	  description: [
		"Šírka náramku 12, 20 a 25mm",
		"Obvod náramku 16, 18, 20 a 21cm",
		"Možnosť jednofarebnej aj viacfarebnej potlače",
		"Farebnosť náramkov podľa pantone vzorkovníka"
	  ],
	  image: [
		"/pages/entertainment/silikonove_naramky/potlac.webp",
		"/pages/entertainment/silikonove_naramky/Silikon_potlac-1.webp",
		"/pages/entertainment/silikonove_naramky/Silikon_potlac2-1.webp",
		"/pages/entertainment/silikonove_naramky/Silikon_potlac3-1.webp",
		"/pages/entertainment/silikonove_naramky/Silikon_potlac4-1.webp",
		"/pages/entertainment/silikonove_naramky/Silikon_potlac5-1.webp",
	  ]
	},
	{
	  title: "Silikónové náramky s ražbou",
	  description: [
		"Šírka náramku 12, 20 a 25mm",
		"Obvod náramku 16, 18, 20 a 21cm",
		"Ražba emboss (vonkajšia) alebo deboss (vnútorná)",
		"Možnosť kombinácie ražby s výplňou farby",
		"Farebnosť náramkov podľa pantone vzorkovníka"
	  ],
	  image: [
		"/pages/entertainment/silikonove_naramky/razba.webp",
		"/pages/entertainment/silikonove_naramky/Silikon_razba-1.webp",
		"/pages/entertainment/silikonove_naramky/Silikon_razba2-1.webp",
		"/pages/entertainment/silikonove_naramky/Silikon_razba3-1.webp",
		"/pages/entertainment/silikonove_naramky/Silikon_razba4-1.webp",
		"/pages/entertainment/silikonove_naramky/Silikon_razba5-1.webp",
		"/pages/entertainment/silikonove_naramky/Silikon_razba6-1.webp",
	  ]
	},
	{
	  title: "Silikónové náramky s RFID čipom",
	  description: [
		"V ponuke rôzne šírky a obvody",
		"Možnosť potlače a ražby",
		"Oválny alebo guľatý tvar",
		"Farebnosť náramkov podľa pantone vzorkovníka",
		"Na výber veľké množstvo čipov (MF, FUDAN, EM4200, TK4100 a iné)",
		<>Viac informácií v kategórii <Link to="/zabava/rfid" className="text-brand hover:underline">RFID</Link></>
	  ],
	  image: [
		"/pages/entertainment/silikonove_naramky/Silikon_RFID-1.webp",
		"/pages/entertainment/silikonove_naramky/Silikon_RFID2-1.webp",
		"/pages/entertainment/silikonove_naramky/Silikon_RFID3-1.webp",
	  ]
	}
];

const options = {
	title: "Možnosti",
	image: "/pages/entertainment/silikonove_naramky/silikon_moznosti-2.webp"
}

const Silicones: React.FC = () => {

	return (
		<Subpage
			description="V ponuke silikóny fosforeskujúce, segmentované, silikónová kľúčenka, silikónové hodinky, náramok s potlačou QR kódu, náramok s číslovaním, atypický náramok, náramok s viacfarebnou potlačou."
			products={products}
			options={options}
		/>
	)
}

export default Silicones