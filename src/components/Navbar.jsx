import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

	render() {
		return (
			<div className="NavbarApps">
				<nav id="navigation-box">
					<Link to="/" id="navigation-toggle">
						<span className="menu-icon">
						<span className="icon-toggle" role="button" aria-label="Toggle Navigation">
							<span className="lines"></span>
						</span>
						</span>
					</Link>
					<ul id="navigation">
						<li>
							<span className="sub-nav-toggle plus"></span>
							<Link to="/movie">Movie</Link>
							<ul>
								<li className="menu__nav-item"><Link to="/newmovie">New movie</Link></li>
							</ul>
						</li>
						<li>
							<span className="sub-nav-toggle plus"></span>
							<Link to="/comingsoon">Coming Soon</Link>
							<ul>
								<li className="menu__nav-item"><Link to="/comingsoon">Latest Hits</Link></li>
							</ul>
						</li>
							<li>
							<span className="sub-nav-toggle plus"></span>
							<Link to="/rates">Rating</Link>
							<ul>
								<li className="menu__nav-item"><Link to="/high-rates">High Rating</Link></li>
							</ul>
						</li>
						<li>
							<span className="sub-nav-toggle plus"></span>
							<Link to="/gallery">Gallery</Link>
							<ul>
								<li className="menu__nav-item"><Link to="/gallery"> gallery</Link></li>
							</ul>
						</li>
						<li>
							<span className="sub-nav-toggle plus"></span>
							<Link to="/news">News</Link>
							<ul>
								<li className="menu__nav-item"><Link to="/news">News </Link></li>
							</ul>
						</li>
						<li>
							<span className="sub-nav-toggle plus"></span>
							<Link to="/about-us">About us</Link>
						</li>
						<div className="col-xs-12 col-md-6">
							<div className="overlay overlay-hugeinc">
								<section className="container">
									<div className="col-sm-4 col-sm-offset-4">
										<button type="button" className="overlay-close">Close</button>
										<form id="login-form" className="login" method='get'>
											<p className="login__title">sign in <br/><span className="login-edition">welcome to A.Movie</span></p>
											<div className="social social--colored">
												<Link to="/facebook" className="social__variant fa fa-facebook"></Link>
												<Link to="/twitter" className="social__variant fa fa-twitter"></Link>
												<Link to="/social-variant" className="social__variant fa fa-tumblr"></Link>
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
												<Link to="/" className="login__tracker form__tracker">Forgot password?</Link>
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