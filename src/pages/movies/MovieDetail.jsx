import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MovieDetail extends Component {

	render() {
		return (
			<div className="wrapper">
				<div className="col-sm-12">
          <div className="movie">
            <h2 className="page-heading">The Hobbit: An Unexpected Journey</h2>
              <div className="movie__info">
                <div className="col-sm-4 col-md-3 movie-mobile">
                  <div className="movie__images">
                    <span className="movie__rating">5.0</span>
                    <img alt='' src="http://placehold.it/526x773"/>
                  </div>
              		<div className="movie__rate">Your vote: <div id='score' className="score"></div></div>
	        				<div className="col-sm-8 col-md-9">
										<p className="movie__time">169 min</p>
										<p className="movie__option"><strong>Country: </strong><Link to="/">New Zeland</Link>, <Link to="/">USA</Link></p>
										<p className="movie__option"><strong>Year: </strong><Link to="/">2012</Link></p>
										<p className="movie__option"><strong>Category: </strong><Link to="/">Adventure</Link>, <Link to="/">Fantazy</Link></p>
										<p className="movie__option"><strong>Release date: </strong>December 12, 2012</p>
										<p className="movie__option"><strong>Director: </strong><Link to="/">Peter Jackson</Link></p>
										<p className="movie__option"><strong>Actors: </strong><Link to="/">>Martin Freeman</Link>, <Link to="/">Ian McKellen</Link>, <Link to="/">Richard Armitage</Link>,...</p>
										<p className="movie__option"><strong>Age restriction: </strong><Link to="/">13</Link></p>
										<p className="movie__option"><strong>Box office: </strong><Link to="/">$1 017 003 568</Link></p>

	                  <Link href="#" className="comment-link">Comments:  15</Link>
	                  <div class="movie__btns movie__btns--full">
	                    <Link href="#" className="watchlist">Add to watchlist</Link>
	                  </div>

	                  <div className="share">
	                  	<span className="share__marker">Share: </span>
	                		<div className="addthis_toolbox addthis_default_style ">
	                      <Link className="addthis_button_facebook_like"></Link>
	                      <Link className="addthis_button_tweet"></Link>
	                      <Link className="addthis_button_google_plusone"></Link>
	                  </div>
              		</div>
                </div>
              </div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default MovieDetail;
