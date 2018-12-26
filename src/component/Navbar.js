import React, { Component } from 'react';

class Navbar extends Component {
	render() {
		return (
			<div className="NavbarApps">
			 	<nav id="navigation-box">
                    <a href="#" id="navigation-toggle">
                        <span className="menu-icon">
                            <span className="icon-toggle" role="button" aria-label="Toggle Navigation">
                                <span className="lines"></span>
                            </span>
                        </span>
                    </a>

                    <ul id="navigation">
                        <li>
                            <span className="sub-nav-toggle plus"></span>
                            <a href="#">Pages</a>
                            <ul>
                                <li className="menu__nav-item"><a href="movie-page-left.html">Single movie (rigth sidebar)</a></li>
                        
                            </ul>
                        </li>
                        <li>
                            <span className="sub-nav-toggle plus"></span>
                            <a href="page-elements.html">Features</a>
                            <ul>
                                <li className="menu__nav-item"><a href="typography.html">Typography</a></li>
                            </ul>
                        </li>
                        <li>
                            <span className="sub-nav-toggle plus"></span>
                            <a href="page-elements.html">Booking steps</a>
                            <ul>
                                <li className="menu__nav-item"><a href="book1.html">Booking step 1</a></li>
                            </ul>
                        </li>
                        <li>
                            <span className="sub-nav-toggle plus"></span>
                            <a href="gallery-four.html">Gallery</a>
                            <ul>
                                <li className="menu__nav-item"><a href="gallery-four.html">4 col gallery</a></li>
                            </ul>
                        </li>
                        <li>
                        <span className="sub-nav-toggle plus"></span>
                        <a href="news-left.html">News</a>
                            <ul>
                                <li className="menu__nav-item"><a href="news-left.html">News (rigth sidebar)</a></li>
                            </ul>
                        </li>
                        <div className="col-xs-12 col-md-6">
                            <div className="overlay overlay-hugeinc">
                                <section className="container">
                                    <div className="col-sm-4 col-sm-offset-4">
                                        <button type="button" className="overlay-close">Close</button>
                                        <form id="login-form" className="login" method='get'>
                                            <p className="login__title">sign in <br/><span className="login-edition">welcome to A.Movie</span></p>
                                            <div className="social social--colored">
                                                <a href='#' className="social__variant fa fa-facebook"></a>
                                                <a href='#' className="social__variant fa fa-twitter"></a>
                                                <a href='#' className="social__variant fa fa-tumblr"></a>
                                            </div>
                                            <p className="login__tracker">or</p>
                                            <div className="field-wrap">
                                                <input type='email' placeholder='Email' name='user-email' className="login__input"/>
                                                <input type='password' placeholder='Password' name='user-password' className="login__input"/>
                                                <input type='checkbox' id='#informed' className='login__check styled'/>
                                                <label for='#informed' className='login__check-info'>remember me</label>
                                            </div>
                                            <div className="login__control">
                                                <button type='submit' className="btn btn-md btn--warning btn--wider">sign in</button>
                                                <a href="#" className="login__tracker form__tracker">Forgot password?</a>
                                            </div>
                                        </form>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </ul>
                </nav>
			</div>
		);
	}
}

export default Navbar;