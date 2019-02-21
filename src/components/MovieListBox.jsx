import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Paginations from '../components/Paginations';
import movieCover from '../assets/images/movie/covermovie.png';

class MovieListBox extends Component {
  constructor(props){
    super(props);
  }

	render() {
		return (
      <div className="col-sm-12 col-md-12">
  			<div className="movie movie--preview movie--full release">
          <div className="col-sm-3 col-md-2 col-lg-2">
            <div className="movie__images">
               <img alt="" src={movieCover}/>
            </div>
            <div className="movie__feature">
              <a className="movie__feature-item movie__feature--comment">23</a>
              <a className="movie__feature-item movie__feature--video">2</a>
              <a className="movie__feature-item movie__feature--photo">85</a>
            </div>
          </div>

          <div className="col-sm-7 col-md-9">
            <a href="movie-page-left.html" className="movie__title link--huge">The Book Thief (2013) </a>
            <p className="movie__time">125 min</p>
            <p className="movie__option"><strong>Country: </strong><a href="#">USA</a></p>
            <p className="movie__option"><strong>Category: </strong><a href="#">Drama</a>, <a href="#">War</a></p>
            <p className="movie__option"><strong>Release date: </strong>November 8, 2013</p>
            <p className="movie__option"><strong>Director: </strong><a href="#">Brian Percival</a></p>
            <p className="movie__option"><strong>Actors: </strong><a href="#">Sophie Nélisse</a>, <a href="#">Geoffrey Rush</a>, <a href="#">Emily Watson</a>, <a href="#">Ben Schnetzer</a>, <a href="#">Nico Liersch</a>, <a href="#"> Joachim Paul Assböck</a>, <a href="#">Kirsten Block</a>, <a href="#">Nico Liersch</a> <a href="#">...</a></p>
            <p className="movie__option"><strong>Age restriction: </strong><a href="#">13</a></p>

            <div className="movie__btns">
              <a className="btn btn-md btn--warning">book a ticket <span className="hidden-sm">for this movie</span></a>
              <a className="watchlist">Add to watchlist</a>
            </div>

            <div className="preview-footer">
              <div className="movie__rate">
                <div className="score">
                  <img src="images/rate/star-off.svg" alt="1" title="bad"/>&nbsp;
                    <img src="images/rate/star-off.svg" alt="2" title="poor"/>&nbsp;
                    <img src="images/rate/star-off.svg" alt="3" title="regular"/>&nbsp;
                    <img src="images/rate/star-off.svg" alt="4" title="good"/>&nbsp;
                    <img src="images/rate/star-off.svg" alt="5" title="gorgeous"/>
                    <input type="hidden" name="score"/>
                </div>
                <span className="movie__rate-number">30 votes</span> 
                <span className="movie__rating">5.0</span>
              </div>
              <Link to="/showtime" className="movie__show-btn">Showtime</Link>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
		);
	}
}

export default MovieListBox;