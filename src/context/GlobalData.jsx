import {
	createContext,
	useContext,
	useEffect,
	useState,
	useRef,
} from "react";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/client";
import { GET_ALL_SONGS } from "../queries";

const GlobalData = createContext();

export const GlobalDataProvider = ({ children }) => {
	const [songs, setSongs] = useState([]);
	const [currentSongId, setCurrentSongId] = useState(
		(songs[0] && songs[0]._id) || ""
	);

	const audioRef = useRef();
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTrackIndex, setCurrentTrackIndex] =
		useState(0);

	const playPauseHandler = () => {
		if (isPlaying) {
			audioRef.current.pause();
		} else {
			audioRef.current.play();
		}
		setIsPlaying(!isPlaying);
	};

	const nextTrackHandler = () => {
		const newTrackIndex =
			(currentTrackIndex + 1) % songs.length;

		setCurrentTrackIndex(
			(prevIndex) => (prevIndex + 1) % songs.length
		);
		setCurrentSongId(songs[newTrackIndex]._id);
	};

	const prevTrackHandler = () => {
		const newTrackIndex =
			currentTrackIndex === 0
				? songs.length - 1
				: currentTrackIndex - 1;

		setCurrentTrackIndex((prevIndex) =>
			prevIndex === 0 ? songs.length - 1 : prevIndex - 1
		);
		setCurrentSongId(songs[newTrackIndex]._id);
	};

	const { loading, data } = useQuery(GET_ALL_SONGS, {
		variables: { playlistId: 1 },
	});

	useEffect(() => {
		if (!loading) {
			setSongs(data.getSongs);
		}
	}, [loading, data]);

	const getCurrentSong = () => {
		const currentSelectedSong =
			songs.find((song) => song._id === currentSongId) ||
			songs[0];

		return currentSelectedSong;
	};

	return (
		<GlobalData.Provider
			value={{
				songs,
				loading,
				setCurrentSongId,
				currentSongId,
				getCurrentSong,
				audioRef,
				prevTrackHandler,
				nextTrackHandler,
				playPauseHandler,
				currentTrackIndex,
				isPlaying,
				setIsPlaying
			}}
		>
			{children}
		</GlobalData.Provider>
	);
};

export const useGlobalData = () => {
	return useContext(GlobalData);
};

GlobalDataProvider.propTypes = {
	children: PropTypes.object,
};
