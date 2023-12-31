import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from "react-router-dom";

import {
	ForUser,
	TopTracks,
	Favorites,
	RecentlyPlayed,
} from "./pages";

import { Layout } from "./components";
import "./App.css";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<ForUser />} />
			<Route path="/toptracks" element={<TopTracks />} />
			<Route path="/favorites" element={<Favorites />} />
			<Route
				path="/recentlyPlayed"
				element={<RecentlyPlayed />}
			/>
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
