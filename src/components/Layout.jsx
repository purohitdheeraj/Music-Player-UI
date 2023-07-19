import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
	return (
		<section className="layout">
			<Navbar />
			<Outlet />
		</section>
	);
}

export default Layout;
