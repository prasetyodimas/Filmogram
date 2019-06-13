import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//component
import BannerTops from '../../components/BannerAdstop';
import Headers from '../../components/Headers';
import Search from '../../components/Searchbar';
// import SidebarRightApp from '../../components/SidebarRight';
import FooterApp from '../../components/Footer';

class GalleryMovies extends Component {

	render() {
		return (
			<div className="wrapper">
				<BannerTops/>
				<Headers/>
				<Search/>
				<section className="container">
					<div className="col-sm-12">
						<h2 className="page-heading">Gallery</h2>
						<div className="row">
							<div className="gallery-wrapper">
								<div className="col-sm-4 col-md-3">
									<div className="gallery-item">
										<Link to="http://placehold.it/2150x1200" className="gallery-item__image gallery-item--photo">
											<img alt="" src="http://placehold.it/524x524"/>
										</Link>
										<Link to="http://placehold.it/2150x1200" className="gallery-item__descript gallery-item--photo-link">
											<span className="gallery-item__icon"><i className="fa fa-camera"></i></span>
											<p className="gallery-item__name">Marble Arch Odeon</p>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
       			<FooterApp/>
      		</div>
		);
	}
}

export default GalleryMovies;