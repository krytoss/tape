import { BrowserRouter, Route, Routes } from 'react-router';
import { pages } from './routes/pages';

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
