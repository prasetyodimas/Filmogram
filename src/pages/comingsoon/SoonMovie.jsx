import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//component
import BannerTops from '../../components/BannerAdstop';
import Headers from '../../components/Headers';
import Search from '../../components/Searchbar';

class SoonMovie extends Component {

	render() {
		return (
			<div className="wrapper">
				<BannerTops/>
				<Headers/>
				<Search/>
				<section className="container">
          			<div className="col-sm-12">
           				<h2 className="page-heading">Best offers</h2>
	          			<div className="offers-block">
           					<p className="offer-place">Odeon West End offers </p>
							<div className="col-xs-6 col-sm-4 col-md-3 offers-wrap">
								<Link to="/" className="offer offer--winter">
									<div className="offer__head">
										<p className="offer__name">Christmas<br/></p>
										<span className="offer__datail">with <br/> Odeon West End  </span>
									</div>
									<p className="offer__full">We’re open all day, everyday this Christmas! (Except Christmas day ‘coz we’re helping Santa).</p>
								</Link>
							</div>
						</div>
					</div>
       		 	</section>
			</div>
		);
	}
}

export default SoonMovie;
