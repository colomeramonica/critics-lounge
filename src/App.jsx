import React from 'react'
import './App.css'
import SignUp from './pages/SignUp'
import { EarthoOneProvider } from '@eartho/one-client-react'
import Home from './pages/Home';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || '/');
  };

  return (
    <EarthoOneProvider
      clientId="xT4pIf1dFKjpd12unAQb"
      onRedirectCallback={onRedirectCallback}
      authorizationParams={{
        redirect_uri: typeof window !== 'undefined' && window.location.origin,
      }}
      defaultLoginPath="/"
      loadingComponent={<div>Loading...</div>}
    >
      <Router>
        <AppRoutes />
      </Router>
    </EarthoOneProvider>
  )
}

function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<SignUp />} />
    </Routes>
  );
}

export default App;
