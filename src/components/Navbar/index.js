import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Link className="navbar-brand" to="/">
				Pupster
			</Link>
			<div>
				<ul className="navbar-nav">
					<li className="nav-item">
						<NavLink
							to="/"
							end
							className={({ isActive }) =>
								isActive ? "nav-link active" : "nav-link"
							}
						>
							About
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							to="/discover"
							className={({ isActive }) =>
								isActive ? "nav-link active" : "nav-link"
							}
						>
							Discover
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							to="/search"
							className={({ isActive }) =>
								isActive ? "nav-link active" : "nav-link"
							}
						>
							Search
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;

{
	/* <!-- Navbar --> */
}
<nav className="navbar navbar-expand-lg navbar-dark customNav fixed-top">
	{/* <!-- Nav-left: Logo --> */}
	<span className="navbar-brand">
		<img id="logo" src="./assets/images/pngwing.com.png" />
		<h3 className="nav-brand-name">Moviepedia</h3>
	</span>

	{/* <!-- Hamburger button for smaller screens --> */}
	<button
		className="navbar-toggler"
		type="button"
		data-toggle="collapse"
		data-target="#navbarSupportedContent"
		aria-controls="navbarSupportedContent"
		aria-expanded="false"
		aria-label="Toggle navigation"
	>
		<span className="navbar-toggler-icon"></span>
	</button>

	{/* <!-- Nav-right: navigation options (collapses into hamburger dropdown) --> */}
	<div className="collapse navbar-collapse" id="navbarSupportedContent">
		<ul className="navbar-nav">
			<li className="nav-item active">
				<a className="nav-link" href="#movie-input">
					<h3>Search</h3>{" "}
				</a>
			</li>

			{/* <!-- Dropdown navigation button to Favourites section --> */}
			<li className="nav-item dropdown favourites-dropdown">
				<a className="nav-link dropdown-toggle" id="navbarDropdown">
					<h3 className="nav-favourites-item">Favourites</h3>
				</a>
				<div className="dropdown-menu" aria-labelledby="navbarDropdown">
					<a className="dropdown-item" href="#movie-favourites">
						Movies
					</a>
					<a className="dropdown-item" href="#actor-favourites">
						Actors
					</a>
				</div>
			</li>

			<li className="nav-item active">
				<a className="nav-link" href="#team-section">
					<h3>The Team</h3>
				</a>
			</li>
		</ul>
	</div>
</nav>;
