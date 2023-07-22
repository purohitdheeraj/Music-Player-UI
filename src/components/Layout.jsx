import { useState } from "react";
import Navbar from "./Navbar";
import Player from "./Player";
import Sidebar from "./Sidebar";

function Layout() {
	const [showNavbar, setShowNavbar] = useState(true);

	const toggleNavbar = () => {
		setShowNavbar((prev) => !prev);
	};

	return (
		<section className="layout">
			<Navbar
				showNavbar={showNavbar}
				toggleNavbar={toggleNavbar}
			/>
			<Sidebar />
			<Player />
		</section>
	);
}

export default Layout;
