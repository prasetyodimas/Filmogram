import React, { Component } from 'react';
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
				<h2>Comming Soon </h2>
			</div>
		);
	}
}

export default SoonMovie;
