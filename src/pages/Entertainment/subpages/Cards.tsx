import { Link } from "react-router";
import Subpage from "../components/subpages/Subpage";

const products = [
	{
	  title: "Plastové karty",
	  description: [
		"Rozmer 85x54mm/54x85mm spĺňajúci normu ISO 7810",
		"Vhodné ako darčekové, vernostné, klubové a zľavové karty",
		"Rôzne atypické tvary",
		"Jednostranná alebo obojstranná potlač",
		"Lesklé, matné, trblietavé alebo transparentné prevedenie",
		"Biele karty na vlastnú potlač",
		"Personalizácia: čipy, číslovanie, čiarové kódy, QR kódy, osobné údaje",
		<>Technológie: magnetické pásky, podpisový panel, čipy NFC, RFID (pozri aj <Link to="/zabava/rfid" className="text-brand hover:underline">RFID</Link>)</>,
		<>QR kód, čiarový kód (EAN kód 13, 128 a iné), pozri aj podstránku <Link to="/zabava/qr" className="text-brand hover:underline">Čiarový/QR kód</Link></>,
		"Emboss - strieborný, zlatý, biely, čierny (čísla, text)",
		<>Čipy TK4100, EM 4200, MF 1k S50, Fudan a iné (pozri aj <Link to="/zabava/rfid" className="text-brand hover:underline">RFID</Link>)</>,
		"Kapacita výroby 350 tis. kariet za cca 3 týždne"
	  ],
	  image: "/pages/entertainment/karty/karty_plastove.png"
	},
	{
	  title: "Papierové karty",
	  description: [
		"Papierové, vodoodolné, perleťové, laminované",
		"Vhodné ako darčekové karty, backstage pasy",
		"Rozmery 85x54mm, 105x65mm, 120x85mm",
		"Digitálna potlač",
		"Jednostranná alebo obojstranná potlač",
		"Oblé rohy",
		"Výsek na zavesenie"
	  ],
	  image: "/pages/entertainment/karty/karty_papierove.png"
	},
	{
	  title: "Papierový obal s kartou",
	  description: [
		"Rôzne rozmery a prevedenia",
		"Papierový obal s otvorom (euro výsek)",
		"Obal s vnútorným vreckom (využitie ako hotelová karta)",
		"Obal s otvorom na mieste zasunutia karty",
		"Karta vlepená do obalu",
		"Rôzne doplnky ako stierací panel, čiarový kód, personalizácia"
	  ],
	  image: "/pages/entertainment/karty/karty_obaly.png"
	},
	{
	  title: "EKO karty",
	  description: [
		"Štandardný rozmer 85x54mm/54x85mm spĺňajúci normu ISO 7810",
		"Jednostranná alebo obojstranná potlač",
		"Rôzne recyklované materiály a prevedenia",
		"Množstvo doplnkov ako personalizácia, magnetické pole a iné",
		<>Pre viac informácií nás <Link to="" className="text-brand hover:underline">kontaktujte</Link> alebo nám odošlite správu cez <Link to="" className="text-brand hover:underline">kontaktný formulár</Link></>
	  ],
	  image: "/pages/entertainment/karty/karty_eko.png"
	},
	{
	  title: "RFID karty",
	  description: [
		"Rozmer 85x54mm/54x85mm spĺňajúci normu ISO 7810",
		"Vhodné ako darčekové, vernostné, klubové a zľavové karty",
		"Jednostranná alebo obojstranná potlač",
		"Rôzne povrchové prevedenia a doplnky",
		<>Čipy TK4100, EM 4200, MF 1k S50, Fudan a iné (pozri aj <Link to="/zabava/rfid" className="text-brand hover:underline">RFID</Link>)</>
	  ],
	  image: "/pages/entertainment/karty/karty_rfid.png"
	}
  ];

const Cards: React.FC = () => {

	return (
		<Subpage
			description="V ponuke plastové karty, papierové karty, papierový obal s kartou, EKO karty, RFID karty"
			products={products}
		/>
	)
}

export default Cards