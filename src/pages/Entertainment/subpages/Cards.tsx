import { Link } from "react-router";
import Subpage from "../components/subpages/Subpage";

const products = [
	{
	  title: "Plastové karty",
	  description: [
		"Rozmer 85x54mm/54x85mm spĺňajúci normu ISO 7810",
		"Vhodné ako darčekové, vernostné, klubové a zľavové karty",
		"Atypické tvary, embos - strieborný, zlatý, biely, čierny",
		"Jednostranná, obojstranná potlač",
		"Lesklé, matné, trblietavé alebo transparentné prevedenie",
		"Biele karty na vlastnú potlač",
		"Personalizácia: čipy, číslovanie, čiarové/QR kódy",
		<>Technológie: magnetické pásky, podpisový panel, čipy NFC, RFID (pozri aj <Link to="/zabava/rfid" className="text-brand hover:underline">RFID</Link>)</>,
		<>QR kód, čiarový kód (EAN kód 13, 128 a iné), pozri aj podstránku <Link to="/zabava/qr" className="text-brand hover:underline">Čiarový/QR kód</Link></>,
		<>Čipy TK4100, EM 4200, MF 1k S50, Fudan a iné (pozri aj <Link to="/zabava/rfid" className="text-brand hover:underline">RFID</Link>)</>,
		<strong>Kapacita výroby 350 tis. kariet za cca 3 týždne</strong>
	  ],
	  image: [
		"/pages/entertainment/karty/plastove_karty_1.png",
		"/pages/entertainment/karty/plastove_karty_2.png",
		"/pages/entertainment/karty/plastove_karty_3.png",
		"/pages/entertainment/karty/plastove_karty_4.png",
		"/pages/entertainment/karty/plastove_karty_5.png",
	  ]
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
	  image: [
		"/pages/entertainment/karty/papierove_karty_1.png",
		"/pages/entertainment/karty/papierove_karty_2.png",
		"/pages/entertainment/karty/papierove_karty_3.png",
		"/pages/entertainment/karty/papierove_karty_4.png",
		"/pages/entertainment/karty/papierove_karty_5.png",
	  ]
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
	  image: [
		"/pages/entertainment/karty/obaly_na_kartu_1.png",
		"/pages/entertainment/karty/obaly_na_kartu_2.png",
		"/pages/entertainment/karty/obaly_na_kartu_3.png",
		"/pages/entertainment/karty/obaly_na_kartu_4.png",
		"/pages/entertainment/karty/obaly_na_kartu_5.png",
		"/pages/entertainment/karty/obaly_na_kartu_6.png",
	  ]
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
	  image: [
		"/pages/entertainment/karty/eko_karty_1.png",
		"/pages/entertainment/karty/eko_karty_2.png",
		"/pages/entertainment/karty/eko_karty_3.png",
		"/pages/entertainment/karty/eko_karty_4.png",
	  ]
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
	  image: [
		"/pages/entertainment/karty/rfid_karty_1.png",
		"/pages/entertainment/karty/rfid_karty_2.png",
		"/pages/entertainment/karty/rfid_karty_3.png",
		"/pages/entertainment/karty/rfid_karty_4.png",
	  ]
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