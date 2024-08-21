import React from 'react';
import './App.css';
import SignUp from './pages/SignUp';
import { EarthoOneProvider } from '@eartho/one-client-react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';
import ItemPage from './pages/Item';
import HomePage from './pages/Home';
import LoadingPage from './pages/Loading';

function App() {
	const onRedirectCallback = (appState) => {
		Navigate(appState?.returnTo || '/');
	};

	return (
		<EarthoOneProvider
			clientId="xT4pIf1dFKjpd12unAQb"
			onRedirectCallback={onRedirectCallback}
			authorizationParams={{
				redirect_uri: typeof window !== 'undefined' && window.location.origin,
			}}
			defaultLoginPath="/"
			loadingComponent={<LoadingPage />}
		>
			<Router>
				<AppRoutes />
			</Router>
		</EarthoOneProvider>
	);
}

function AppRoutes() {
	return (
		<Routes>
			<Route exact path="/" element={<HomePage />} />
			<Route path="/movie/:movieId" element={<ItemPage />} />
			<Route path="/tv/:tvId" element={<ItemPage />} />
			<Route path="/login" element={<SignUp />} />
		</Routes>
	);
}

export default App;
