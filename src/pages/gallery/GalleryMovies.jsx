import React, { Component } from 'react';
//component
import BannerTops from '../../components/BannerAdstop';
import Headers from '../../components/Headers';
import Search from '../../components/Searchbar';
import SidebarRightApp from '../../components/SidebarRight';
import FooterApp from '../../components/Footer';

class GalleryMovies extends Component {
  constructor(props) {
    super(props);
  }

	render() {
		return (
			<div className="wrapper">
        <BannerTops/>
        <Headers/>
        <Search/>
    	  <section class="container">
          <div class="col-sm-12">
            <h2 class="page-heading">Gallery</h2>
            <div class="row">
            <div class="gallery-wrapper">
              <div class="col-sm-4 col-md-3">
                <div class="gallery-item">
                  <a href='http://placehold.it/2150x1200' class="gallery-item__image gallery-item--photo">
                    <img alt='' src="http://placehold.it/524x524"/>
                  </a>
                  <a href='http://placehold.it/2150x1200' class="gallery-item__descript gallery-item--photo-link">
                    <span class="gallery-item__icon"><i class="fa fa-camera"></i></span>
                    <p class="gallery-item__name">Marble Arch Odeon</p>
                  </a>
                </div>
              </div>

              <div class="col-sm-4 col-md-3">
                <div class="gallery-item">
                  <a href='http://placehold.it/2150x1200' class="gallery-item__image gallery-item--photo">
                    <img alt='' src="http://placehold.it/524x524"/>
                  </a>
                  <a href='http://placehold.it/2150x1200' class="gallery-item__descript gallery-item--photo-link">
                    <span class="gallery-item__icon"><i class="fa fa-camera"></i></span>
                    <p class="gallery-item__name">Camden Town Odeon</p>
                  </a>
                </div>
              </div>

              <div class="col-sm-4 col-md-3">
                <div class="gallery-item">
                  <a href='http://placehold.it/2150x1200' class="gallery-item__image gallery-item--photo">
                    <img alt='' src="http://placehold.it/524x524"/>
                  </a>
                  <a href='http://placehold.it/2150x1200' class="gallery-item__descript gallery-item--photo-link">
                    <span class="gallery-item__icon"><i class="fa fa-camera"></i></span>
                    <p class="gallery-item__name">Camden Town Odeon</p>
                  </a>
                </div>
              </div>

              <div class="col-sm-4 col-md-3">
                <div class="gallery-item">
                  <a href='https://www.youtube.com/watch?v=Y5AehBA3IsE' class="gallery-item__image gallery-item--video">
                    <img alt='' src="http://placehold.it/524x524"/>
                  </a>
                  <a href='https://www.youtube.com/watch?v=Y5AehBA3IsE' class="gallery-item__descript gallery-item--video-link">
                    <span class="gallery-item__icon"><i class="fa fa-video-camera"></i></span>
                    <p class="gallery-item__name">Camden Town Odeon</p>
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