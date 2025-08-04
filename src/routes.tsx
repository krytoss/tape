import Home from './pages/Home/HomePage';
import Health from './pages/Health/Health';
import Entertainment from './pages/Entertainment/Entertainment';
import Silicones from './pages/Entertainment/subpages/Silicones';
import Layout from './pages/Layout';
import Fabric from './pages/Entertainment/subpages/Fabric';
import Cases from './pages/Entertainment/subpages/Cases';
import Cords from './pages/Entertainment/subpages/Cords';
import Bracelets from './pages/Entertainment/subpages/Bracelets';
import Cards from './pages/Entertainment/subpages/Cards';
import Eco from './pages/Entertainment/subpages/Eco';
import Rfid from './pages/Entertainment/subpages/Rfid';
import Business from './pages/Business/Business';
import Printers from './pages/Entertainment/subpages/Printers';

type Page = {
	component: React.FC,
	title?: string,
	img?: string,
	children?: Record<string, Page>
}

export const pages: Record<string, Page> = {
	"/": {
		title: "Domov",
		component: Home
	},
	"zdravotnictvo": {
		title: "Zdravotníctvo",
		component: Health,
	},
	"biznis": {
		title: "Biznis",
		component: Business
	},
	"zabava": {
		component: Layout,
		children: {
			"": {
				component: Entertainment,
				title: "Zábava",
				img: "/offers/entertainment.webp"
			},
			"silikonove-naramky": {
				component: Silicones,
				title: "Silikónové náramky",
			},
			"latkove-naramky": {
				component: Fabric,
				title: "Látkové náramky",
				img: "/pages/entertainment/latkove_naramky/header.webp"
			},
			"karty": {
				component: Cards,
				title: "Karty",
				img: "/pages/entertainment/karty/header.webp"
			},
			"puzdra-menovky-rolery": {
				component: Cases,
				title: "Puzdrá, menovky, rolery",
			},
			"naramky": {
				component: Bracelets,
				title: "Náramky",
				img: "/pages/entertainment/naramky/header.webp"
			},
			"snurky": {
				component: Cords,
				title: "Šnúrky na krk",
			},
			"eko-produkty": {
				component: Eco,
				title: "EKO produkty",
			},
			"rfid": {
				component: Rfid,
				title: "RFID",
				img: "/pages/entertainment/rfid/header.webp"
			},
			"tlaciarne": {
				component: Printers,
				title: "Tlačiarne a čiarové kódy",
			}
		}
	}
}