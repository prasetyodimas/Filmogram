import React, { Component } from 'react';

class MoviebestLanding extends Component {
	render() {
		return (
			<div className="movies-landing container">
          <div className="container-filmograms">
            <div className="movie-best">
              <div className="col-sm-10 col-sm-offset-1 movie-best__rating">Today Best choice</div>
              	<div className="col-sm-12 change--col">
                 	<div className="movie-beta__item ">
                    <img alt='' src="http://placehold.it/380x600"/>
                     <span className="best-rate">5.0</span>
                      <ul className="movie-beta__info">
                        <li><span className="best-voted">71 people voted today</span></li>
                        <li>
                          <p className="movie__time">169 min</p>
                          <p>Adventure | Drama | Fantasy </p>
                          <p>38 comments</p>
                        </li>
                        <li className="last-block">
                          <a href="movie-page-left.html" className="slide__link">more</a>
                        </li>
                      </ul>
                	</div>
                  <div className="movie-beta__item second--item">
                    <img alt='' src="http://placehold.it/380x600"/>
                    <span className="best-rate">5.0</span>
                    <ul className="movie-beta__info">
                      <li><span className="best-voted">71 people voted today</span></li>
                      <li>
                        <p className="movie__time">169 min</p>
                        <p>Adventure | Drama | Fantasy </p>
                        <p>38 comments</p>
                      </li>
                      <li className="last-block">
                        <a href="movie-page-left.html" className="slide__link">more</a>
                      </li>
                     </ul>
                   </div>
                   <div className="movie-beta__item third--item">
                      <img alt='' src="http://placehold.it/380x600"/>
                      <span className="best-rate">5.0</span>
											<ul className="movie-beta__info">
											 	<li><span className="best-voted">71 people voted today</span></li>
											 	<li>
											    <p className="movie__time">169 min</p>
											    <p>Adventure | Drama | Fantasy </p>
											    <p>38 comments</p>
											 	</li>
											 	<li className="last-block">
										      <a href="movie-page-left.html" className="slide__link">more</a>
											 	</li>
											</ul>
                   </div>
                   <div className="movie-beta__item hidden-xs">
                      <img alt='' src="http://placehold.it/380x600"/>
                      <span className="best-rate">5.0</span>
                      <ul className="movie-beta__info">
                        <li><span className="best-voted">71 people voted today</span></li>
                        <li>
                          <p className="movie__time">169 min</p>
                          <p>Adventure | Drama | Fantasy </p>
                          <p>38 comments</p>
                        </li>
                        <li className="last-block">
                           <a href="movie-page-left.html" className="slide__link">more</a>
                        </li>
                      </ul>
                   </div>
                   <div className="movie-beta__item hidden-xs hidden-sm">
                      <img alt='' src="http://placehold.it/380x600"/>
                      <span className="best-rate">5.0</span>
                      <ul className="movie-beta__info">
											 	<li><span className="best-voted">71 people voted today</span></li>
												<li>
												  <p className="movie__time">169 min</p>
												  <p>Adventure | Drama | Fantasy </p>
												  <p>38 comments</p>
												</li>
												<li className="last-block">
												  <a href="movie-page-left.html" className="slide__link">more</a>
												</li>
											</ul>
                   </div>
                   <div className="movie-beta__item hidden-xs hidden-sm">
                       <img alt='' src="http://placehold.it/380x600"/>
                       <span className="best-rate">5.0</span>
                       <ul className="movie-beta__info">
                          <li><span className="best-voted">71 people voted today</span></li>
                          <li>
                            <p className="movie__time">169 min</p>
                            <p>Adventure | Drama | Fantasy </p>
                            <p>38 comments</p>
                          </li>
                          <li className="last-block">
                            <a href="movie-page-left.html" className="slide__link">more</a>
                          </li>
                       </ul>
                   </div>
              </div>
              <div className="col-sm-10 col-sm-offset-1 movie-best__check">check all movies now playing</div>
            </div>
          </div>
			</div>
		);
	}
}

export default MoviebestLanding;