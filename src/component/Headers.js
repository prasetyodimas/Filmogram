import React, { Component } from 'react';
import NavbarApps from '../component/Navbar';
import logoAmovie from '../assets/images/logo.png';

class Headers extends Component {
    render() {
        return (
            <header className="header-wrapper">
                <div className="container">
                    <a className="logo">
                        <img className="logo-branding" alt='logo' src={logoAmovie}/>
                    </a>
                    <NavbarApps/>
                    <div className="control-panel">
                        <a href="#" className="btn btn--sign">Sign in</a>
                        <a href="#" className="btn btn-md btn--warning btn--book">Book a ticket</a>
                    </div>
                </div>
            </header>
        );
    }
}

export default Headers;