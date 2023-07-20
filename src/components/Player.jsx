import cover from "../assets/cover.png";
function Player() {
	return (
		<section className="player">
			<h2>Viva La Vida</h2>
			<p>Coldplay</p>
			<div className="player-cover">
				<img
					src={cover}
					className="cover-image"
					alt="cover-image"
				/>
			</div>

			<input
				type="range"
				name="seek"
				className="input input-seek-player"
			/>
			<div className="player-controls">
				<button>more</button>
				<button>prev</button>
				<button>play</button>
				<button>next</button>
				<button>sound</button>
			</div>
		</section>
	);
}

export default Player;
