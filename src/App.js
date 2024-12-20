import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import "./App.css";

function App() {
	return (
		<Router>
			<div className="app">
				<Routes>
					<Route path="/portfolio/home" element={<Home />} />
					<Route path="/portfolio" element={<Navigate to="/portfolio/home" replace />} />
					<Route path="*" element={<Navigate to="/portfolio/home" replace />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
