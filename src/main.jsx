import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
import { GlobalDataProvider } from "./context/GlobalData";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
	uri: "https://api.ss.dev/resource/api",
	cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("App")).render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<GlobalDataProvider>
				<App />
			</GlobalDataProvider>
		</ApolloProvider>
	</React.StrictMode>
);
