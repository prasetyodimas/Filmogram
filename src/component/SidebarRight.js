import React, { Component } from 'react';

class SidebarRight extends Component {
  render() {
    return (
        <aside className="col-sm-4 col-md-3">
          <div className="sitebar">
              <div className="banner-wrap">
              </div>

               <div className="banner-wrap">
              </div>

               <div className="banner-wrap banner-wrap--last">
              </div>

              <div className="promo marginb-sm">
                <div className="promo__head">A.Movie app</div>
                <div className="promo__describe">for all smartphones<br/> and tablets</div>
                <div className="promo__content">
                    <ul>
                        <li className="store-variant"><a href="#"><img alt='' src="images/apple-store.svg"/></a></li>
                        <li className="store-variant"><a href="#"><img alt='' src="images/google-play.svg"/></a></li>
                        <li className="store-variant"><a href="#"><img alt='' src="images/windows-store.svg"/></a></li>
                    </ul>
                </div>
            </div>

              <div className="category category--discuss category--count marginb-sm mobile-category ls-cat">
                  <h3 className="category__title">the Most <br/><span className="title-edition">discussed posts</span></h3>
                  <ol>
                      <li><a href="#" className="category__item">Gravity</a></li>
                      <li><a href="#" className="category__item">The Counselor</a></li>
                      <li><a href="#" className="category__item">Bad Grandpa</a></li>
                      <li><a href="#" className="category__item">Blue Is the Warmest Color</a></li>
                      <li><a href="#" className="category__item">Rush</a></li>
                      <li><a href="#" className="category__item">Captain Phillips</a></li>
                      <li><a href="#" className="category__item">Escape Plan</a></li>
                      <li><a href="#" className="category__item">Cloudy with a Chance of Meatballs 2</a></li>
                      <li><a href="#" className="category__item">Prisoners</a></li>
                      <li><a href="#" className="category__item">The Fifth Estate</a></li>
                  </ol>
              </div>

              <div className="category category--cooming category--count marginb-sm mobile-category rs-cat">
                  <h3 className="category__title">coming soon<br/><span className="title-edition">movies</span></h3>
                  <ol>
                      <li><a href="#" className="category__item">Ender's Game</a></li>
                      <li><a href="#" className="category__item">About Time</a></li>
                      <li><a href="#" className="category__item">Last Vegas</a></li>
                      <li><a href="#" className="category__item">Free Birds</a></li>
                      <li><a href="#" className="category__item">The Wolf of Wall Street</a></li>
                      <li><a href="#" className="category__item">The Best Man Holiday</a></li>
                      <li><a href="#" className="category__item">The Book Thief</a></li>
                      <li><a href="#" className="category__item">The Hunger Games: Catching Fire</a></li>
                      <li><a href="#" className="category__item">Delivery Man</a></li>
                      <li><a href="#" className="category__item">Nebraska</a></li>
                  </ol>
              </div>
          </div>
        </aside>
    );
  }
}

export default SidebarRight;