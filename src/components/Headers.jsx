import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NavbarApps from '../components/Navbar';
import logoAmovie from '../assets/images/logo.png';

class Headers extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <header className="header-wrapper">
        <div className="container">
          <Link to="/" className="logo">
            <img className="logo-branding" alt='logo' src={logoAmovie}/>
          </Link>
          <NavbarApps/>
          <div className="control-panel">
            <Link to="/sign-in" className="btn btn--sign"> Sign in</Link>
            <Link to="/book-ticket" className="btn btn-md btn--warning btn--book"> Book a ticket</Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Headers;