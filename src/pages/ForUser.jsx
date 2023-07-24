import { useState } from "react";
import searchLogo from "../assets/search-logo.svg";
import { useGlobalData } from "../context/GlobalData";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ForUser() {
	const {
		songs,
		loading: isLoading,
		setCurrentSongId,
		getCurrentSong,
	} = useGlobalData();
	const [searchSong, setSearchSong] = useState("");
	const [filteredData, setFilteredData] = useState([]);

	const loadingSkeleton = (
		<div className="music-list">
			{Array.from({ length: 5 }).map((_, index) => (
				<div
					key={`skeleton-${index}`}
					className="music-list-item"
				>
					<Skeleton height={60} width={60} circle={true} />
					<div className="music-info">
						<Skeleton height={20} width={150} />
						<Skeleton height={15} width={100} />
					</div>
					<div className="music-duration">
						<Skeleton height={20} width={50} />
					</div>
				</div>
			))}
		</div>
	);

	const formatTimeDuration = (durationInSeconds) => {
		const minutes = Math.floor(durationInSeconds / 60);
		const seconds = durationInSeconds % 60;
		return `${minutes}:${seconds}`;
	};

	const handleChange = (e) => {
		const { value } = e.target;
		const filteredSongs = songs.filter((song) => {
			return song.title.toLowerCase().includes(value);
		});
		setFilteredData(filteredSongs);
		setSearchSong(value);
	};

	const displayData = searchSong ? filteredData : songs;

	const songsListEl = (
		<div className="music-list">
			{displayData.map((song) => {
				const currentSong = getCurrentSong();
				return (
					<div
						key={song._id}
						className={`music-list-item ${
							currentSong._id === song._id
								? "currentSong"
								: ""
						}`}
						onClick={() => setCurrentSongId(song._id)}
					>
						<img
							className="music-image"
							src={song.photo}
							alt={song.title}
						/>
						<div className="music-info">
							<h4>{song.title}</h4>
							<p>{song.artist}</p>
						</div>
						<p className="music-duration">
							{formatTimeDuration(song.duration)}
						</p>
					</div>
				);
			})}
		</div>
	);
	return (
		<>
			<div className="foruser-page">
				<h2 className="page-heading">For You</h2>
				<div className="search">
					<input
						type="text"
						placeholder="Search Song, Artist"
						className="input input-search"
						value={searchSong}
						onChange={handleChange}
					/>
					<span className="search-logo">
						<img src={searchLogo} alt="search-logo" />
					</span>
				</div>
				{/* {songs && songsListEl} */}
				{isLoading ? loadingSkeleton : songsListEl}
			</div>
		</>
	);
}

export default ForUser;
