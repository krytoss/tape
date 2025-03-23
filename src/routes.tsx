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
		component: Home
	},
	"zdravotnictvo": {
		component: Health,
	},
	"business": {
		component: Business
	},
	"zabava": {
		component: Layout,
		children: {
			"": {
				component: Entertainment,
				title: "Zábava",
				img: "/offers/entertainment.jpeg"
			},
			"silikonove-naramky": {
				component: Silicones,
				title: "Silikónové náramky",
				img: "/pages/entertainment/silikonove.jpeg"
			},
			"latkove-naramky": {
				component: Fabric,
				title: "Látkové náramky",
				img: "/pages/entertainment/latkove.jpeg"
			},
			"karty": {
				component: Cards,
				title: "Karty",
				img: "/pages/entertainment/plastove_karty.png"
			},
			"puzdra-menovky-rolery": {
				component: Cases,
				title: "Puzdrá, menovky, rolery",
				img: "/pages/entertainment/plastove_karty.png"
			},
			"naramky": {
				component: Bracelets,
				title: "Náramky",
				img: "/pages/entertainment/tyvek.png"
			},
			"snurky": {
				component: Cords,
				title: "Šnúrky na krk",
				img: "/pages/entertainment/snurky.png"
			},
			"eko-produkty": {
				component: Eco,
				title: "EKO produkty",
				img: "/pages/entertainment/eko.png"
			},
			"rfid": {
				component: Rfid,
				title: "RFID",
				img: "/pages/entertainment/rfid.png"
			},
			"tlaciarne": {
				component: Printers,
				title: "Tlačiarne a čiarové kódy",
				img: "/pages/entertainment/tlaciarne.png"
			}
		}
	}
}