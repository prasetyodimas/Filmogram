import React, { Component } from 'react';
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
                  <a href='http://placehold.it/2150x1200' className="gallery-item__image gallery-item--photo">
                    <img alt='' src="http://placehold.it/524x524"/>
                  </a>
                  <a href='http://placehold.it/2150x1200' className="gallery-item__descript gallery-item--photo-link">
                    <span className="gallery-item__icon"><i className="fa fa-camera"></i></span>
                    <p className="gallery-item__name">Marble Arch Odeon</p>
                  </a>
                </div>
              </div>

              <div className="col-sm-4 col-md-3">
                <div className="gallery-item">
                  <a href='http://placehold.it/2150x1200' className="gallery-item__image gallery-item--photo">
                    <img alt='' src="http://placehold.it/524x524"/>
                  </a>
                  <a href='http://placehold.it/2150x1200' className="gallery-item__descript gallery-item--photo-link">
                    <span className="gallery-item__icon"><i className="fa fa-camera"></i></span>
                    <p className="gallery-item__name">Camden Town Odeon</p>
                  </a>
                </div>
              </div>

              <div className="col-sm-4 col-md-3">
                <div className="gallery-item">
                  <a href='http://placehold.it/2150x1200' className="gallery-item__image gallery-item--photo">
                    <img alt='' src="http://placehold.it/524x524"/>
                  </a>
                  <a href='http://placehold.it/2150x1200' className="gallery-item__descript gallery-item--photo-link">
                    <span className="gallery-item__icon"><i className="fa fa-camera"></i></span>
                    <p className="gallery-item__name">Camden Town Odeon</p>
                  </a>
                </div>
              </div>

              <div className="col-sm-4 col-md-3">
                <div className="gallery-item">
                  <a href='https://www.youtube.com/watch?v=Y5AehBA3IsE' className="gallery-item__image gallery-item--video">
                    <img alt='' src="http://placehold.it/524x524"/>
                  </a>
                  <a href='https://www.youtube.com/watch?v=Y5AehBA3IsE' className="gallery-item__descript gallery-item--video-link">
                    <span className="gallery-item__icon"><i className="fa fa-video-camera"></i></span>
                    <p className="gallery-item__name">Camden Town Odeon</p>
                  </a>
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