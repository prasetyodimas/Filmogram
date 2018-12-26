import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
		<div className="footer-apps">
			<footer className="footer-wrapper">
	            <section className="container">
	                <div className="col-xs-4 col-md-2 footer-nav">
	                    <ul className="nav-link">
	                        <li><a href="#" className="nav-link__item">Cities</a></li>
	                        <li><a href="movie-list-left.html" className="nav-link__item">Movies</a></li>
	                        <li><a href="trailer.html" className="nav-link__item">Trailers</a></li>
	                        <li><a href="rates-left.html" className="nav-link__item">Rates</a></li>
	                    </ul>
	                </div>
	                <div className="col-xs-4 col-md-2 footer-nav">
	                    <ul className="nav-link">
	                        <li><a href="coming-soon.html" className="nav-link__item">Coming soon</a></li>
	                        <li><a href="cinema-list.html" className="nav-link__item">Cinemas</a></li>
	                        <li><a href="offers.html" className="nav-link__item">Best offers</a></li>
	                        <li><a href="news-left.html" className="nav-link__item">News</a></li>
	                    </ul>
	                </div>
	                <div className="col-xs-4 col-md-2 footer-nav">
	                    <ul className="nav-link">
	                        <li><a href="#" className="nav-link__item">Terms of use</a></li>
	                        <li><a href="gallery-four.html" className="nav-link__item">Gallery</a></li>
	                        <li><a href="contact.html" className="nav-link__item">Contacts</a></li>
	                        <li><a href="page-elements.html" className="nav-link__item">Shortcodes</a></li>
	                    </ul>
	                </div>
	                <div className="col-xs-12 col-md-6">
	                    <div className="footer-info">
	                        <p className="heading-special--small">FILMOGRAMINFO <span className="title-edition">in the social media</span></p>
	                        <div className="social">
	                            <a href='#' className="social__variant fa fa-facebook"></a>
	                            <a href='#' className="social__variant fa fa-twitter"></a>
	                            <a href='#' className="social__variant fa fa-vk"></a>
	                            <a href='#' className="social__variant fa fa-instagram"></a>
	                            <a href='#' className="social__variant fa fa-tumblr"></a>
	                            <a href='#' className="social__variant fa fa-pinterest"></a>
	                        </div>
	                        
	                        <div className="clearfix"></div>
	                        <p className="copy">&copy; FILMOGRAMINFO, All rights reserved</p>
	                    </div>
	                </div>
	            </section>
    		</footer>
		</div>
		);
	}
}

export default Footer;