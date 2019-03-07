import React, { Component } from 'react';
//component
import BannerTops from '../../components/BannerAdstop';
import Headers from '../../components/Headers';
import Search from '../../components/Searchbar';
import SidebarRightApp from '../../components/SidebarRight';
import FooterApp from '../../components/Footer';

class AboutUs extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="wrapper">
				<BannerTops/>
				<Headers/>
				<Search/>
			</div>
		);
	}
}

export default AboutUs;
