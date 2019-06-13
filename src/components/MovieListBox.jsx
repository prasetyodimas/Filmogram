import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Paginations from '../components/Paginations';
// import movieCover from '../assets/images/movie/covermovie.png';

class MovieListBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    this.fetchApiOmdb();
  }

  fetchApiOmdb() {
    fetch('http://www.omdbapi.com/?s=Batman&page=2&apikey=5c18fb8f')
      .then(results => {
          return results.json();
      }).then(data => {
        let items = (data.results || []).map((movie) => {
          console.log(movie);
          return (
            <div key={movie.results}>
              <h2>{movie.Search.Title}</h2>
            </div>
          )
        })
        this.setState({
          items: items
        })
        console.log("state", this.state.items)
      })

  }

	render() {
      return (
       <div className="col-sm-12 col-md-12">
          <ul>
            {this.state.items}
          </ul>
      </div>
    );
  }
}

export default MovieListBox;