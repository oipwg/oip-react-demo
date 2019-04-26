import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import album from '../assets/img/album.png'
import movie from '../assets/img/movie.png'

class Homepage extends React.Component {
	render(){
		return(
			<div>
				<section class="jumbotron text-center">
					<div class="container">
						<h1 class="jumbotron-heading">The Open Index Protocol</h1>
						<p class="lead text-muted">A revolutionary way to share, and get paid for sharing content</p>
						<p>
							<a href="https://oip.wiki" className="btn btn-outline-primary mx-1">More Info</a>
						</p>
					</div>
				</section>
				<div>
					<div class="container">
						<div class="row">
							<div class="col-md-6">
								<div class="card">
									<div class="card-header text-center">
										Album
									</div>
									<img class="card-img-top" src={album} />
									<div class="card-body">
										<p class="card-text text-center">Play Music, and test out purchasing Songs!</p>
										<div class="d-flex justify-content-center align-items-center">
											<Link to="/album" class="btn btn-outline-primary">View Demo</Link>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="card">
									<div class="card-header text-center">
										Movie
									</div>
									<img class="card-img-top" src={movie} />
									<div class="card-body">
										<p class="card-text text-center">Pay to play/purchase a full length Movie, watch the trailer for free!</p>
										<div class="d-flex justify-content-center align-items-center">
											<Link to="/movie" class="btn btn-outline-primary">View Demo</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Homepage

