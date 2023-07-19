import Navbar from "./Navbar";
import Player from "./Player";
import Sidebar from "./Sidebar";

function Layout() {
	return (
		<section className="layout">
			<Navbar />
			<Sidebar />
			<Player />
		</section>
	);
}

export default Layout;
