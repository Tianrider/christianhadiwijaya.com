import Home from "./pages/Home";
import Menu from "./components/Navbar/Menu";
import Navbar from "./components/Navbar/Navbar";
import Works from "./pages/Works";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {useState} from "react";

function App() {
	const [showNav, setShowNav] = useState(false);

	return (
		<Router>
			<div className="cursor-default">
				<Navbar showNav={showNav} setShowNav={setShowNav} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/works" element={<Works />} />
					<Route path="/gallery" element={<Gallery />}></Route>
				</Routes>
				{showNav && <Menu />}
			</div>
			<Footer />
		</Router>
	);
}

export default App;
