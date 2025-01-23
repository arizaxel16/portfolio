import React from "react";
import "./Home.scss";
import NavBar from "../../components/NavBar/NavBar";
import TechStack from "../../components/TechStack/TechStack";

function Home() {
	return (
		<div className="container-home">
			<NavBar />
			<TechStack />
		</div>
	);
}

export default Home;
