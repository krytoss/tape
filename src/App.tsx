import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home/HomePage';
import Health from './pages/Health/Health';
import Entertainment from './pages/Entertainment/Entertainment';

function App() {

  return (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/zdravotnictvo" element={<Health />} />
			<Route path="/zabava" element={<Entertainment />} />
		</Routes>
	</BrowserRouter>
  )
}

export default App
