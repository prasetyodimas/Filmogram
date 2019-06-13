import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SidebarRight extends Component {

  render() {
    return (
      <aside className="col-sm-4 col-md-3">
        <div className="sitebar">
          <div className="banner-wrap">
            <img alt="banner" src="http://placehold.it/500x500"/>
          </div>
          <div className="promo marginb-sm">
            <div className="promo__head">A.Movie app</div>
            <div className="promo__describe">for all smartphones<br/> and tablets</div>
            <div className="promo__content">
              <ul>
                <li className="store-variant"><Link to="/"><img alt='' src="images/apple-store.svg"/></Link></li>
                <li className="store-variant"><Link to="/"><img alt='' src="images/google-play.svg"/></Link></li>
                <li className="store-variant"><Link to="/"><img alt='' src="images/windows-store.svg"/></Link></li>
              </ul>
            </div>
          </div>

          <div className="category category--discuss category--count marginb-sm mobile-category ls-cat">
            <h3 className="category__title">the Most <br/><span className="title-edition">discussed posts</span></h3>
              <ol>
              <li><Link to="/" className="category__item">Gravity</Link></li>
              <li><Link to="/" className="category__item">The Counselor</Link></li>
              <li><Link to="/" className="category__item">Bad Grandpa</Link></li>
              <li><Link to="/" className="category__item">Blue Is the Warmest Color</Link></li>
              <li><Link to="/" className="category__item">Rush</Link></li>
              <li><Link to="/" className="category__item">Captain Phillips</Link></li>
              <li><Link to="/" className="category__item">Escape Plan</Link></li>
              <li><Link to="/" className="category__item">Cloudy with a Chance of Meatballs 2</Link></li>
              <li><Link to="/" className="category__item">Prisoners</Link></li>
              <li><Link to="/" className="category__item">The Fifth Estate</Link></li>
            </ol>
          </div>

          <div className="category category--cooming category--count marginb-sm mobile-category rs-cat">
            <h3 className="category__title">coming soon<br/><span className="title-edition">movies</span></h3>
            <ol>
              <li><Link to="/" className="category__item">Ender's Game</Link></li>
              <li><Link to="/" className="category__item">About Time</Link></li>
              <li><Link to="/" className="category__item">Last Vegas</Link></li>
              <li><Link to="/" className="category__item">Free Birds</Link></li>
              <li><Link to="/" className="category__item">The Wolf of Wall Street</Link></li>
              <li><Link to="/" className="category__item">The Best Man Holiday</Link></li>
              <li><Link to="/" className="category__item">The Book Thief</Link></li>
              <li><Link to="/" className="category__item">The Hunger Games: Catching Fire</Link></li>
              <li><Link to="/" className="category__item">Delivery Man</Link></li>
              <li><Link to="/" className="category__item">Nebraska</Link></li>
            </ol>
          </div>
        </div>
      </aside>
    );
  }
}

export default SidebarRight;