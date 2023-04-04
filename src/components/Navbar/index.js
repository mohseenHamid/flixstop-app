import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div>
				<ul className="navbar-nav">
					<li className="navbar-brand">FlixStop</li>
					<li className="nav-item">
						<NavLink
							to="/"
							end
							className={({ isActive }) =>
								isActive ? "nav-link active" : "nav-link"
							}
						>
							Home
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
					{/* <li className="nav-item dropdown favourites-dropdown">
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
					</li> */}
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
