import Subpage from "../components/subpages/Subpage";

const products = [
	{
	  title: "Plastové karty",
	  description: [
		"rozmer 85x54mm/54x85mm spĺňajúci normu ISO 7810",
		"vhodné ako darčekové, vernostné, klubové a zľavové karty",
		"rôzne atypické tvary",
		"jednostranná, obojstranná potlač",
		"lesklé, matné, trblietavé alebo transparentné prevedenie",
		"biele čipové karty na vlastnú potlač",
		"personalizácia: čipy, číslovanie, čiarové kódy, osobné údaje",
		"technológie: magnetické pásky, podpisový ponel, čipy NFC, RFID (pozri aj RFID) (preklik na podstránku RFID)",
		"QR kód, čiarový kód (kód 13, 128 a iné), pozri aj podstránku Čiarový/QR kód (preklik na podstránku Čiarový/QR kód)",
		"emboss - strieborný, zlatý, biely, čierny (čísla, text)",
		"čipy TK4100, EM 4200, MF 1k S50, Fudan a iné (pozri aj RFID) (preklik na podstránku RFID)",
		"kapacita výroby 350 tis. kariet za cca 3 týždne"
	  ],
	  image: "/pages/entertainment/silikonove_naramky/potlac.png"
	},
	{
	  title: "Papierové karty",
	  description: [
		"papierové, vodeodolné, perleťové, laminované",
		"vhodné ako darčekové karty, backstage passy",
		"rozmery 85x54mm, 105x65mm, 120x85mm",
		"digitálna potlač",
		"jednostranná alebo obojstranná potlač",
		"oblé rohy",
		"výsek na zavesenie"
	  ],
	  image: [
		"/pages/entertainment/silikonove_naramky/razba.png"
	  ]
	},
	{
	  title: "Papierový obal s kartou",
	  description: [
		"rôzne rozmery a prevedenia ",
		"papierový obal s otvorom",
		"obal s vnútorným vreckom (využitie ako hotelová karta)",
		"obal s otvorom na mieste zasunutia karty",
		"karta vlepená do obalu",
		"rôzne doplnky ako stierací panel, čiarový kód, personalizácia"
	  ],
	  image: "/pages/entertainment/silikonove_naramky/rfid.png"
	},
	{
	  title: "EKO karty",
	  description: [
		"štandardný rozmer 85x54mm/54x85mm spĺňajúci normu ISO 7810",
		"jednostranná a obojstranná potlač",
		"rôzne recyklované materiály a prevedenia",
		"množstvo  doplnkov ako personalizácia, magnetické pole a iné",
		" pre viac informácií nás kontaktujte (preklik na stránku kontakt) alebo nám odošlite správu cez kontaktný formulár (preklik na stránku kontaktný formulár)"
	  ],
	  image: "/pages/entertainment/silikonove_naramky/rfid.png"
	},
	{
	  title: "RFID karty",
	  description: [
		"rozmer 85x54mm/54x85mm spĺňajúci normu ISO 7810",
		"vhodné ako darčekové, vernostné, klubové a zľavové karty",
		"jednostranná a obojstranná potlač",
		"rôzne povrchové prevedenia a doplnky",
		"čipy TK4100, EM 4200, MF 1k S50, Fudan a iné (pozri aj RFID) (preklik na podstránku RFID)"
	  ],
	  image: "/pages/entertainment/silikonove_naramky/rfid.png"
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