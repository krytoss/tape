import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home/HomePage';
import Health from './pages/Health/Health';
import Entertainment from './pages/Entertainment/Entertainment';
import Silicones from './pages/Entertainment/subpages/Silicones';
import Layout from './pages/Layout';
import Fabric from './pages/Entertainment/subpages/Fabric';

function App() {

  return (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="zdravotnictvo" element={<Health />} />
			<Route path="zabava" element={<Layout />}>
				<Route path=""	element={<Entertainment />} />
				<Route path="silikonove-naramky" element={<Silicones />} />
				<Route path="latkove-naramky" element={<Fabric />} />
				<Route path="plastove-karty" element={<Silicones />} />
			</Route>
		</Routes>
	</BrowserRouter>
  )
}

export default App
