import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
	return (
		// <div>
		//   <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
		//     <h1>Pupster</h1>
		//     <h2>They're the Good Boys and Girls</h2>
		//   </Hero>
		//   <Container style={{{ margi"nTop: }}30 }}>
		//     <Row>
		//       <Col size="md-12">
		//         <h1>Welcome To Pupster!</h1>
		//       </Col>
		//     </Row>
		//     <Row>
		//       <Col size="md-12">
		//         <p>
		//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id
		//           consequat mauris ullamcorper eu. Orci varius natoque penatibus et magnis dis
		//           parturient montes, nascetur ridiculus mus. Pellentesque et dui id justo finibus
		//           sollicitudin at et metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi
		//           gravida. Duis eget vestibulum quam, ut porttitor sem. Donec sagittis mi sollicitudin
		//           turpis semper, et interdum risus lobortis. Vestibulum suscipit nunc non egestas
		//           tristique. Proin hendrerit efficitur malesuada. Mauris lorem urna, sodales accumsan
		//           quam non, tristique tempor erat. Nullam non sem facilisis, tempus tortor sit amet,
		//           volutpat nisl. Ut et turpis non nunc maximus mollis a vitae tortor. Pellentesque
		//           mattis risus ac quam laoreet cursus. Praesent suscipit orci neque, vestibulum
		//           tincidunt augue tincidunt non. Duis consequat mattis tortor vitae mattis.
		//         </p>
		//         <p>
		//           Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor. Sed
		//           malesuada molestie velit ac viverra. Quisque a ullamcorper purus. Curabitur luctus mi
		//           ac mi hendrerit semper. Nulla tincidunt accumsan lobortis. Mauris convallis sapien non
		//           nibh porta accumsan. Nunc volutpat tempus porttitor. Nunc congue dictum egestas.
		//           Aliquam blandit mi eu urna scelerisque, vitae volutpat ligula ultricies. Maecenas vel
		//           porta augue. Fusce mauris ex, dignissim et lacinia ut, tempus eget nibh.
		//         </p>
		//         <p>
		//           Etiam ut massa efficitur, gravida sapien non, condimentum sapien. Suspendisse massa
		//           tortor, facilisis in neque sit amet, scelerisque elementum tortor. Nullam eget nibh
		//           sit amet odio lobortis ullamcorper. Nulla bibendum magna nec sem pulvinar lobortis.
		//           Mauris et imperdiet urna, vitae lobortis dui. Nunc elementum elit mi, non mattis enim
		//           congue at. Proin mi lectus, ullamcorper id hendrerit eu, ultricies vitae lacus. Nunc
		//           vehicula, erat eget laoreet condimentum, felis ante malesuada leo, nec efficitur diam
		//           nisi eget nisi. Cras arcu lacus, tristique in bibendum vitae, elementum eget lorem.
		//           Maecenas vestibulum volutpat orci eu pharetra. Praesent vel blandit ante, nec faucibus
		//           libero. Sed ultrices lorem ex, eu facilisis libero convallis ac. Vivamus id dapibus
		//           eros. Nullam tempor sem rhoncus porta semper. Proin bibendum vulputate nisl, fringilla
		//           interdum elit pulvinar eu. Quisque vitae quam dapibus, vestibulum mauris quis, laoreet
		//           massa.
		//         </p>
		//       </Col>
		//     </Row>
		//   </Container>
		// </div>

		<div>
			{/* <!-- Jumbotron (hero): Movie Search Section --> */}
			<div className="jumbotron jumbotron-fluid">
				<section className="container-fluid">
					<div className="row">
						<section className="col-lg hero-content">
							<h2 className="hero-text">Know your film? Know the actor!</h2>

							<div className="dropdown search-div">
								{/* <!-- Removed "data-toggle='dropdown'" attribute -->
							<!-- Bug: Pressing the x doesn't clear the input field value i.e. close the dropdown --> */}
								<input
									type="text"
									placeholder="Movie Title"
									id="movie-input"
									className="dropdown-toggle movie-input"
									aria-haspopup="true"
									aria-expanded="false"
								/>
								<div
									className="dropdown-menu"
									id="search-menu"
									aria-labelledby="dropdownMenuButton"
								></div>
							</div>
						</section>
					</div>
				</section>
			</div>

			{/* <!-- Movie Search Modal (Popup): Displayed upon search menu movie selection --> */}
			<div
				className="modal fade bd-example-modal-lg"
				id="movie-search-modal"
				tabindex="-1"
				role="dialog"
				aria-labelledby="myLargeModalLabel"
				aria-hidden="true"
			>
				<div
					className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg"
					role="document"
				>
					<div className="modal-content">
						<div className="modal-header">
							<h3 className="modal-title" id="movie-search-modal">
								Here's your movie!
							</h3>
						</div>

						<div className="modal-body container modal-body-container">
							<div className="row r1">
								<div className="col-sm-4 r1-c1 img-col">
									<div className="row test-row">
										<img
											id="modal-movie-poster"
											src="./assets/images/bootstrap-icon.svg"
											alt=""
										/>
									</div>
									<div className="row test-row-2">
										<div className="row c2-r1">
											<div className="col-sm c2-r1-c1">placeholder</div>
											<div className="col-sm c2-r1-c2">placeholder</div>
											<div className="col-sm c2-r1-c3">placeholder</div>
										</div>
									</div>
								</div>

								<div className="col-sm r1-c2 content-col">
									<div className="content-flex">
										<div className="row c2-r2">
											<div className="col-sm c2-r2-c1">
												<h3 className="plot-title">Plot</h3>
												<p className="plot-content"></p>
											</div>
										</div>
										<div className="row c2-r3">
											<div className="col-sm c2-r3-c1">
												<h3 className="ratings-title">Ratings</h3>
											</div>
										</div>
										<div className="row c2-r4">
											<div className="col-sm c2-r4-c1 imdb"></div>
											<div className="col-sm c2-r4-c2 rt"></div>
											<div className="col-sm c2-r4-c3 meta"></div>
										</div>
									</div>
								</div>
							</div>

							<div className="row r2">
								<div className="col-sm img-col movie-modal-actor-row">
									<a
										className="card card-1 actor-card"
										data-dismiss="modal"
										style={{ width: "22rem" }}
										href=""
									>
										<img
											className="card-img-top card-img-1"
											src=""
											alt="Card image cap"
										/>
										<div className="card-body">
											<p className="card-text card-title-1"></p>
										</div>
									</a>

									<a
										className="card card-2 actor-card"
										data-dismiss="modal"
										style={{ width: "22rem" }}
										href=""
									>
										<img
											className="card-img-top card-img-2"
											src=""
											alt="Card image cap"
										/>
										<div className="card-body">
											<p className="card-text card-title-2"></p>
										</div>
									</a>

									<a
										className="card card-3 actor-card"
										data-dismiss="modal"
										style={{ width: "22rem" }}
										href=""
									>
										<img
											className="card-img-top card-img-3"
											src=""
											alt="Card image cap"
										/>
										<div className="card-body">
											<p className="card-text card-title-3"></p>
										</div>
									</a>
								</div>
							</div>
						</div>

						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-danger"
								data-dismiss="modal"
							>
								Close
							</button>
							<button
								type="button"
								id="movie-fav-save-btn"
								className="btn btn-danger"
							>
								Save to Favourites
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="s-break"></div>

			{/* <!-- Actor Modal (Popup): Displayed upon actor card selection in movie modal --> */}
			<div
				className="modal fade actor-search-modal"
				id="actor-modal"
				tabindex="-1"
				role="dialog"
				aria-labelledby="exampleModalCenterTitle"
			>
				<div
					className="modal-dialog modal-dialog-centered modal-lg"
					role="document"
				>
					<div className="modal-content actor-modal-content">
						<div className="modal-body actor-modal-body">
							<div className="container actor-modal-container">
								<div className="row">
									<div className="col-sm-4 img-box">
										<img
											className="actor-modal-img"
											src="./assets/images/example.img"
											alt="exampleImg"
										/>
									</div>
									<div className="col-sm info">
										<h3 className="name">PLACEHOLDER</h3>
										<p className="more-info">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat.
											Duis aute irure dolor in reprehenderit in voluptate velit
											esse cillum dolore eu fugiat nulla pariatur. Excepteur
											sint occaecat cupidatat non proident, sunt in culpa qui
											officia deserunt mollit anim id est laborum.
										</p>
										<section id="actor-stats">
											<h4>Facts</h4>
											<p className="birthday">Birthday: YEAR-MONTH-DAY</p>
											<p className="height">Height: X.XXm</p>
											<p className="net-worth">Net Worth: $X</p>
										</section>
									</div>
								</div>
							</div>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-danger"
								data-dismiss="modal"
							>
								Close
							</button>
							<button
								id="actor-fav-save-btn"
								type="button"
								className="btn btn-danger"
							>
								Save to Favourites
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- Favourites Section --> */}
			<section id="favourites">
				<section className="favourites-div">
					<div className="favourites-title">
						<h2>Favourite Movies</h2>
					</div>

					<section className="favourites-reel">
						<div id="movie-favourites" className="favourites-container"></div>
						<div className="clear-btn-div">
							<button
								type="button"
								id="clear-saved-movies-btn"
								className="clear-storage-btn btn-secondary btn"
							>
								Clear Favourite Movies
							</button>
						</div>
					</section>
				</section>

				<div className="s-break"></div>

				<div className="favourites-div">
					<div className="favourites-title">
						<h2>Favourite Actors</h2>
					</div>

					<section className="favourites-reel">
						<div id="actor-favourites" className="favourites-container"></div>
						<div className="clear-btn-div">
							<button
								type="button"
								id="clear-saved-actors-btn"
								className="clear-storage-btn btn-secondary btn"
							>
								Clear Favourite Actors
							</button>
						</div>
					</section>
				</div>
			</section>

			<div className="s-break"></div>

			<footer className="footer-className">
				<strong>
					{" "}
					Moviepedia <a className="text-white">© 2023</a>{" "}
				</strong>
			</footer>
		</div>
	);
}

export default About;
