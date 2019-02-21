import React, { Component } from 'react';

import BannerTops from '../assets/images/banners/banner-tops.png';

class BannerAdstop extends Component {
	render() {
		return (
			<div className="banner-top">
    		<img className="banner-explisit" alt='top banner' src={BannerTops}/>
			</div>
		);
	}
}

export default BannerAdstop;