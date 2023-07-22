import { useState } from "react";
import more from "../assets/more.svg";
import prev from "../assets/prev.svg";
import play from "../assets/play.svg";
import next from "../assets/next.svg";
import sound from "../assets/sound.svg";
import cover from "../assets/cover.png";

function Player() {
	const [sliderValue, setSliderValue] = useState(0);

	const handleSlider = (e) => {
		console.log(e.target.value);
		setSliderValue(e.target.value);
	};

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

			<div className="slider-wrapper">
				<div className="slider-container">
					<div
						className="progress-bar"
						style={{ width: `${sliderValue}%` }}
					></div>
				</div>
				<input
					type="range"
					name="seek"
					min={0}
					max={100}
					value={sliderValue}
					onChange={handleSlider}
					className="input input-seek-player"
				/>
			</div>

			<div className="player-controls">
				<button
					className="btn btn-more"
					aria-label="Show More"
				>
					<span className="sr-only">More</span>
					<span>
						<img src={more} alt="more-btn" />
					</span>
				</button>

			<div className="primary-actions"> 

				<button
					className="btn btn-prev"
					aria-label="prevoius music"
				>
					<span className="sr-only">Previous</span>
					<span>
						<img src={prev} alt="prev music-btn" />
					</span>
				</button>

				<button
					aria-label="play music"
					className="btn btn-play"
				>
					<span className="sr-only">Play</span>
					<span>
						<img src={play} alt="Play music-btn" />
					</span>
				</button>

				<button
					aria-label="next music"
					className="btn btn-next"
				>
					<span className="sr-only">next</span>
					<span>
						<img src={next} alt="next music-btn" />
					</span>
				</button>
			</div>

				<button
					aria-label="sound"
					className="btn btn-sound"
				>
					<span className="sr-only">sound</span>
					<span>
						<img src={sound} alt="sound-btn" />
					</span>
				</button>
			</div>
		</section>
	);
}

export default Player;
