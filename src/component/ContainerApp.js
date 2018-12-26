import React, { Component } from 'react';
import MovieList from '../component/MovieListBox';

class ContainerApp extends Component {
	render() {
		return (
			<div className="container-filmograms"> 
			 	<section className="container-inner">
	            	<div className="col-sm-8 col-md-9">
	                	<div className="row">
		            		<h2 className="page-heading">Movies</h2>
						</div>
						<div className="select-area">
		                    <form id="select" className="select" method="get">
		                        <select name="select_item" className="select__sort" tabindex="0" sb="95331686">
		                            <option value="1" selected="selected">London</option>
		                            <option value="2">New York</option>
		                            <option value="3">Paris</option>
		                            <option value="4">Berlin</option>
		                            <option value="5">Moscow</option>
		                            <option value="3">Minsk</option>
		                            <option value="4">Warsawa</option>
		                            <option value="5">Kiev</option>
		                        </select>
		                        <div id="" className="sbHolder" tabindex="0">
		                        	<a id="" href="#" className="sbToggle"></a>
		                        	<a id="" href="#" className="sbSelector">London</a>
		                        	<ul id="" className="sbOptions">
		                        		<li><a href="#1" rel="1" className="sbFocus">London</a></li>
		                        		<li><a href="#2" rel="2">New York</a></li>
		                        		<li><a href="#3" rel="3">Paris</a></li>
		                        		<li><a href="#4" rel="4">Berlin</a></li>
		                        		<li><a href="#5" rel="5">Moscow</a></li>
		                        		<li><a href="#3" rel="3">Minsk</a></li>
		                        		<li><a href="#4" rel="4">Warsawa</a></li>
		                        		<li><a href="#5" rel="5">Kiev</a></li>
	                        		</ul>
	                    		</div>
		                    </form>

		                    <div className="datepicker">
		                      <span className="datepicker__marker"><i className="fa fa-calendar"></i>Date</span>
		                      <input type="text" id="datepicker" value="03/10/2014" className="datepicker__input hasDatepicker"/>
		                    </div>

		                    <form className="select select--cinema" method="get">
		                        <select name="select_item" className="select__sort" tabindex="0" sb="">
		                            <option value="1">Cineworld</option>
		                            <option value="2">Empire</option>
		                            <option value="3">Everyman</option>
		                            <option value="4">Odeon</option>
		                            <option value="5">Picturehouse</option>
		                        </select>
		                        <div id="sbHolder_10500199" className="sbHolder" tabindex="0">
		                        	<a id="sbToggle_10500199" href="#" className="sbToggle"></a>
		                        	<a id="sbSelector_10500199" href="#" className="sbSelector">Cineworld</a>
		                        	<ul id="sbOptions_10500199" className="sbOptions">
		                        		<li><a href="#1" rel="1" className="sbFocus">Cineworld</a></li>
		                        		<li><a href="#2" rel="2">Empire</a></li>
		                        		<li><a href="#3" rel="3">Everyman</a></li>
		                        		<li><a href="#4" rel="4">Odeon</a></li>
		                        		<li><a href="#5" rel="5">Picturehouse</a></li>
	                        		</ul>
		                        </div>
		                    </form>

		                    <form className="select select--film-category" method="get">
		                          <select name="select_item" className="select__sort" tabindex="0" sb="">
		                            <option value="2">Children's</option>
		                            <option value="3">Comedy</option>
		                            <option value="4">Drama</option>
		                            <option value="5">Fantasy</option>
		                            <option value="6">Horror</option>
		                            <option value="7">Thriller</option>
		                        </select>
		                     	<div id="sbHolder_16830206" className="sbHolder" tabindex="0">
		                     		<a id="sbToggle_16830206" href="#" className="sbToggle"></a>
		                     		<a id="sbSelector_16830206" href="#" className="sbSelector">Children's</a>
		                     		<ul id="sbOptions_16830206" className="sbOptions">
		                     			<li><a href="#2" rel="2" className="sbFocus">Children's</a></li>
		                     			<li><a href="#3" rel="3">Comedy</a></li>
		                     			<li><a href="#4" rel="4">Drama</a></li>
		                     			<li><a href="#5" rel="5">Fantasy</a></li>
		                     			<li><a href="#6" rel="6">Horror</a></li>
		                     			<li><a href="#7" rel="7">Thriller</a></li>
	                     			</ul>
	                 			</div>
		                    </form>
                		</div>
						<MovieList/>
					</div>
				</section>
			</div>
		);
	}
}

export default ContainerApp;