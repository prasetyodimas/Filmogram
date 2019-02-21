import React, { Component } from 'react';
import { Link } from 'react-router-dom';	
import configSite from '../configSite';

class Footer extends Component {
  constructor(props){
    super(props);
    let configApp = [{
        title: 'FILMOGRAMINFO',
        url: '',
        author: '',
      },
    ];
  }

  render() {
  return (
    <div className="row">
      <div className="footer-apps">
        <footer className="footer-wrapper">
          <section className="container">
            <div className="col-xs-4 col-md-2 footer-nav">
              <ul className="nav-link">
                <li><Link to="cities" className="nav-link__item">Cities</Link></li>
                <li><Link to="movies" className="nav-link__item">Movies</Link></li>
              </ul>
            </div>
            <div className="col-xs-4 col-md-2 footer-nav">
              <ul className="nav-link">
                <li><Link to="/coming-soon" className="nav-link__item">Coming soon</Link></li>
                <li><Link to="/cinemas" className="nav-link__item">Cinemas</Link></li>
              </ul>
            </div>
            <div className="col-xs-4 col-md-2 footer-nav">
              <ul className="nav-link">
                <li><Link to="/term-of-use" className="nav-link__item">Terms of use</Link></li>
                <li><Link to="/gallery" className="nav-link__item">Gallery</Link></li>
                <li><Link to="/contacts" className="nav-link__item">Contacts</Link></li>
                <li><Link to="/shortcodes" className="nav-link__item">Shortcodes</Link></li>
              </ul>
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="footer-info">
                  <p className="heading-special--small">FILMOGRAMINFO <span className="title-edition">in the social media</span></p>
                  <div className="social">
                    <Link to="/facebook" className="social__variant fa fa-facebook"></Link>
                    <Link to="/twitter" className="social__variant fa fa-twitter"></Link>
                    <Link to="/visual-kuliah" className="social__variant fa fa-vk"></Link>
                    <Link to="/instagram" className="social__variant fa fa-instagram"></Link>
                    <Link to="/tumblr" className="social__variant fa fa-tumblr"></Link>
                    <Link to="/pinterest" className="social__variant fa fa-pinterest"></Link>
                  </div>
                  <div className="clearfix"></div>
                  <p className="copy">&copy; FILMOGRAMINFO, All rights reserved</p>
              </div>
            </div>
          </section>
        </footer>
      </div>
    </div>
    );
  }
}

export default Footer;