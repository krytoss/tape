import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home/HomePage';
import Health from './pages/Health/Health';

function App() {

  return (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/zdravotnictvo" element={<Health />} />
		</Routes>
	</BrowserRouter>
  )
}

export default App
