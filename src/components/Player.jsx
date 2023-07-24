import { useState } from "react";
import more from "../assets/more.svg";
import prev from "../assets/prev.svg";
import play from "../assets/play.svg";
import pause from "../assets/pauseS.svg";
import next from "../assets/next.svg";
import sound from "../assets/sound.svg";
import { useGlobalData } from "../context/GlobalData";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Player() {
	const [sliderValue, setSliderValue] = useState(0);
	const {
		songs,
		getCurrentSong,
		loading: isLoading,
		audioRef,
		prevTrackHandler,
		nextTrackHandler,
		playPauseHandler,
		currentTrackIndex,
		isPlaying,
	} = useGlobalData();

	const loadingSkeleton = (
		<section className="player">
			<h2>
				<Skeleton height={36} width={184} />
			</h2>
			<p>
				<Skeleton height={24} width={65} />
			</p>
			<div className="player-cover">
				<Skeleton height={480} width={480} />
			</div>

			<div className="slider-wrapper">
				<Skeleton height={6} width={480} />
			</div>
		</section>
	);

	const handleSlider = (e) => {
		console.log(e.target.value);
		setSliderValue(e.target.value);
	};

	const currentSong = getCurrentSong();

	const playerEl = currentSong && (
		<section className="player">
			<h2>{currentSong.title}</h2>
			<p>{currentSong.artist}</p>
			<div className="player-cover">
				<img
					src={currentSong.photo}
					className="cover-image"
					alt={currentSong.title}
				/>
			</div>

			<div className="slider-wrapper">
				<audio
					ref={audioRef}
					src={songs[currentTrackIndex].url}
				></audio>
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
						onClick={prevTrackHandler}
					>
						<span className="sr-only">Previous</span>
						<span>
							<img src={prev} alt="prev music-btn" />
						</span>
					</button>

					<button
						aria-label="play music"
						className={`btn ${
							isPlaying ? "btn-pause" : "btn-play"
						} `}
						onClick={playPauseHandler}
					>
						<span className="sr-only">Play</span>
						<span>
							{isPlaying ? (
								<img
									src={pause}
									className="pause-img"
									alt="Pause music-btn"
								/>
							) : (
								<img src={play} alt="Play music-btn" />
							)}
						</span>
					</button>

					<button
						aria-label="next music"
						className="btn btn-next"
						onClick={nextTrackHandler}
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

	return <>{isLoading ? loadingSkeleton : playerEl}</>;
}

export default Player;
