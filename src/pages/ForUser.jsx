import searchLogo from "../assets/search-logo.svg";
import demo from "../assets/demo.png";

function ForUser() {
	return (
		<>
			<div className="foruser-page">
				<h2 className="page-heading">For You</h2>
				<div className="search">
					<input
						type="text"
						placeholder="Search Song, Artist"
						className="input input-search"
					/>
					<span className="search-logo">
						<img src={searchLogo} alt="search-logo" />
					</span>
				</div>
				<div className="music-list">
					<div className="music-list-item">
						<img
							className="music-image"
							src={demo}
							alt="title"
						/>
						<div className="music-info">
							<h4>Music title</h4>
							<p>Album Name</p>
						</div>
						<p className="music-duration">4:16</p>
					</div>

					<div className="music-list-item">
						<img
							className="music-image"
							src={demo}
							alt="title"
						/>
						<div className="music-info">
							<h4>Music title</h4>
							<p>Album Name</p>
						</div>
						<p className="music-duration">4:16</p>
					</div>

					<div className="music-list-item">
						<img
							className="music-image"
							src={demo}
							alt="title"
						/>
						<div className="music-info">
							<h4>Music title</h4>
							<p>Album Name</p>
						</div>
						<p className="music-duration">4:16</p>
					</div>

					<div className="music-list-item">
						<img
							className="music-image"
							src={demo}
							alt="title"
						/>
						<div className="music-info">
							<h4>Music title</h4>
							<p>Album Name</p>
						</div>
						<p className="music-duration">4:16</p>
					</div>

					<div className="music-list-item">
						<img
							className="music-image"
							src={demo}
							alt="title"
						/>
						<div className="music-info">
							<h4>Music title</h4>
							<p>Album Name</p>
						</div>
						<p className="music-duration">4:16</p>
					</div>

					<div className="music-list-item">
						<img
							className="music-image"
							src={demo}
							alt="title"
						/>
						<div className="music-info">
							<h4>Music title</h4>
							<p>Album Name</p>
						</div>
						<p className="music-duration">4:16</p>
					</div>

					<div className="music-list-item">
						<img
							className="music-image"
							src={demo}
							alt="title"
						/>
						<div className="music-info">
							<h4>Music title</h4>
							<p>Album Name</p>
						</div>
						<p className="music-duration">4:16</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default ForUser;
