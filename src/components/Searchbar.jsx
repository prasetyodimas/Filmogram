import React, { Component } from 'react';

import { withRouter } from 'react-router' ;
import { connect } from 'react-redux';
import { getMovieList } from '../actions/actions';

const mapDispatchToProps = dispatch => {
  return {
    getMovieList: payload => dispatch(getMovieList(payload))
  };
}
class Searchbar extends Component {

  searchMovie(e) {
    // e.preventDefault();
    // if (this.refs.q.value.length != 0 && this.props.location.query.q != this.refs.q.value) {
        // this.props.router.push(`/movies?q=${this.refs.q.value}`);
        // if (this.props.caller == 'list-page') this.props.getMovieList({q: this.refs.q.value, page: 1});
    // }
  }

  componentDidMount() {
    // this.refs.q.svalue = this.props.location.query.q || '';
  }

	render() {
		return (
      <div className="search-wrapper">
        <div className="container container--add">
            <form id='search-form' method='get' className="search">
              <input type="text" ref="q" className="search__field" placeholder="Search"/>
              <select name="sorting_item" id="search-sort" className="search__sort">
                <option value="1">By title</option>
                <option value="2">By year</option>
                <option value="3">By producer</option>
                <option value="4">By title</option>
                <option value="5">By year</option>
              </select>
            <button type='submit' className="btn btn-md btn--danger search__button" onClick={ this.searchMovie.bind(this) }>search a movie</button>
            </form>
        </div>
      </div>
    );
	}
}

const SearchbarComponent = connect(null, mapDispatchToProps)(Searchbar)
export default withRouter(SearchbarComponent);