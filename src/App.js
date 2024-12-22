import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Splash from "./pages/Splash/Splash";
import { LanguageProvider } from "./context/Language/LanguageContext";

function App() {
	return (
		<LanguageProvider>
			<Router>
				<Routes>
					<Route path="/portfolio" element={<Splash />} />
					<Route path="/portfolio/home" element={<Home />} />
				</Routes>
			</Router>
		</LanguageProvider>
	);
}

export default App;
