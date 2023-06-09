import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Discover from "./pages/Discover";
import MainPage from "./pages/MainPage";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<Wrapper>
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="/home" element={<MainPage />} />
						{/* <Route path="/discover" element={<Discover />} /> */}
						<Route path="/search" element={<Search />} />
					</Routes>
				</Wrapper>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
