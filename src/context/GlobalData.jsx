import {
	createContext,
	useContext,
	useEffect,
	useState,
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

	const { loading, data } = useQuery(GET_ALL_SONGS, {
		variables: { playlistId: 1 },
	});

	useEffect(() => {
		if (!loading) {
			console.log(data);
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
