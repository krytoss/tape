import { BrowserRouter, Route, Routes } from 'react-router';
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
				img: "/pages/entertainment/plastove_karty.png"
			}
		}
	}
}

function App() {

  return (
	<BrowserRouter>
		<Routes>
			{
				Object.entries(pages).map(([path, { component: Component, children }]) => {
					if (children) {
						return (
							<Route path={path} element={<Component />}>
								{
									Object.entries(children).map(([childPath, { component: Component }]) => (
										<Route path={childPath} element={<Component />} />
									))
								}
							</Route>
						)
					}
					return <Route path={path} element={<Component />} />
				})
			/*
			<Route path="/" element={<Home />} />
			<Route path="zdravotnictvo" element={<Health />} />
			<Route path="zabava" element={<Layout />}>
				<Route path=""	element={<Entertainment />} />
				<Route path="silikonove-naramky" element={<Silicones />} />
				<Route path="latkove-naramky" element={<Fabric />} />
				<Route path="karty" element={<Cards />} />
				<Route path="puzdra-menovky-rolery" element={<Cases />} />
				<Route path="snurky" element={<Cords />} />
				<Route path="vinylove-naramky" element={<Bracelets />} />
			</Route>
			*/
			}
		</Routes>
	</BrowserRouter>
  )
}

export default App
