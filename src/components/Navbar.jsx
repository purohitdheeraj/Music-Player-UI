import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
	return (
		<aside className="navbar">
			<div>
				<img src={logo} alt="app logo" />
			</div>

			<nav>
				<ul>
					<li>
						<NavLink
							className={({ isActive }) => {
								isActive ? "active" : "";
							}}
							to="/"
						>
							For you
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) => {
								isActive ? "active" : "";
							}}
							to="/toptracks"
						>
							Top tracks
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) => {
								isActive ? "active" : "";
							}}
							to="/favorites"
						>
							Favorites
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) => {
								isActive ? "active" : "";
							}}
							to="recentlyPlayed"
						>
							Recently played
						</NavLink>
					</li>
				</ul>
			</nav>
		</aside>
	);
}

export default Navbar;
