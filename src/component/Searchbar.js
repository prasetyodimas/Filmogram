import React, { Component } from 'react';

class Searchbar extends Component {
	render() {
		return (
	        <div className="search-wrapper">
	            <div className="container container--add">
	                <form id='search-form' method='get' className="search">
	                    <input type="text" className="search__field" placeholder="Search"/>
	                    <select name="sorting_item" id="search-sort" className="search__sort" tabindex="0">
	                        <option value="1" selected='selected'>By title</option>
	                        <option value="2">By year</option>
	                        <option value="3">By producer</option>
	                        <option value="4">By title</option>
	                        <option value="5">By year</option>
	                    </select>
	                    <button type='submit' className="btn btn-md btn--danger search__button">search a movie</button>
	                </form>
	            </div>
	        </div>		
        );
	}
}

export default Searchbar;