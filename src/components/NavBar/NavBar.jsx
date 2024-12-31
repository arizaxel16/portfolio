import React from "react";
import "./NavBar.scss"

function NavBar() {
	return (
		<nav className="container-navbar">
			<p>LOGO</p>
			<ul className="list">
				<li>
					<a href="#">About</a>
				</li>
				<li>
					<a href="#">Projects</a>
				</li>
				<li>
					<a href="#">Experience</a>
				</li>
				<li>
					<a href="#">Tools</a>
				</li>
                <li>
					<a href="#">Contact</a>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
