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
	  image: "/pages/entertainment/silikonove_naramky/potlac.png"
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
	  image: "/pages/entertainment/silikonove_naramky/razba.png"
	},
	{
	  title: "Silikónové náramky s RFID čipom",
	  description: [
		"Rôzne šírky a obvody",
		"Možnosť potlače a ražby",
		"Tvar oválny alebo guľatý",
		"Farebnosť podľa pantone vzorkovníka",
		"Veľké množstvo čipov (MF, FUDAN, EM4200, TK4100 a iné)",
		<>Viac informácií v kategórii <Link to="/zabava/rfid" className="text-brand hover:underline">RFID</Link></>
	  ],
	  image: "/pages/entertainment/silikonove_naramky/rfid.png"
	}
];

const Silicones: React.FC = () => {

	return (
		<Subpage
			description="V ponuke silikóny fosforeskujúce, segmentované, silikónová kľúčenka, silikónové hodinky, náramok s potlačou QR kódu, náramok s číslovaním, atypický náramok, náramok s viacfarebnou potlačou."
			products={products}
		/>
	)
}

export default Silicones