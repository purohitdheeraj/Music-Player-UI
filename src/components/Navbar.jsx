import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import profile from "../assets/dheeraj-profile.jpg";

function Navbar() {
	return (
		<aside className="navbar">
			<div className="logo-wrapper">
				<img
					className="logo-image"
					src={logo}
					alt="app logo"
				/>
			</div>

			<nav>
				<ul>
					<li>
						<NavLink
							className={({ isActive }) => {
								return isActive ? "active" : "";
							}}
							to="/"
						>
							For you
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) => {
								return isActive ? "active" : "";
							}}
							to="/toptracks"
						>
							Top tracks
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) => {
								return isActive ? "active" : "";
							}}
							to="/favorites"
						>
							Favorites
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) => {
								return isActive ? "active" : "";
							}}
							to="recentlyPlayed"
						>
							Recently played
						</NavLink>
					</li>
				</ul>
			</nav>

			<div className="avatar-wrapper">
				<a
					href="https://peerlist.io/purohitdheeraj"
					target="_blank"
					rel="noreferrer"
				>
					<img
						className="avatar-image"
						src={profile}
						alt="app logo"
					/>
				</a>
			</div>
		</aside>
	);
}

export default Navbar;
