import React, { Component } from 'react';
//component
import BannerTops from '../../components/BannerAdstop';
import Headers from '../../components/Headers';
import Search from '../../components/Searchbar';

class SoonMovie extends Component {
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
           <h2 class="page-heading">Best offers</h2>
	          <div class="offers-block">
           		<p class="offer-place">Odeon West End offers </p>
              <div class="col-xs-6 col-sm-4 col-md-3 offers-wrap">
                 <a href='#' class="offer offer--winter">
                  	<div class="offer__head">
                      <p class="offer__name">Christmas<br/></p>
                      <span class="offer__datail">with <br/> Odeon West End  </span>
                   	</div>
                   	<p class="offer__full">We’re open all day, everyday this Christmas! (Except Christmas day ‘coz we’re helping Santa).</p>
                 </a>
              </div>
              <div class="col-xs-6 col-sm-4 col-md-3 offers-wrap">
                  <a href='#' class="offer offer--family">
                    <div class="offer__head">
                      <p class="offer__name">family <br/> ticket</p>
                   	</div>
                    <p class="offer__full">Everyone pays the child price!</p>
                  </a>
              </div>
							<div class="col-xs-6 col-sm-4 col-md-3 offers-wrap">
								<a href='#' class="offer offer--day">
									<div class="offer__head">
							    	<p class="offer__name">super<br/> tuesday</p>
								 	</div>
								  <p class="offer__full">Up to 1/3 off adult tickets all day, sign up nowand claim your discount.</p>
								</a>
							</div>
              <div class="col-xs-6 col-sm-4 col-md-3 offers-wrap">
                <a href='#' class="offer offer--teen">
                 	  <div class="offer__head">
                      <p class="offer__name">teen<br/> tickets</p>
                   	</div>
                  <p class="offer__full">Aged 13 -18? Save up to 20% on the adult ticket price with our teen ticket.</p>
                </a>
              </div>
							<div class="col-xs-6 col-sm-4 col-md-3 offers-wrap">
							 <a href='#' class="offer offer--gift">
							    <div class="offer__head">
							        <p class="offer__name">Christmas<br/></p>
							        <span class="offer__datail">with <br/> Odeon West End  </span>
							    </div>
							    <p class="offer__full">Spread Christmas cheer with the perfect gift for everyone.</p>
							 </a>
							</div>
	          </div>

            <div class="offers-block">
               <p class="offer-place">Vue Islington offers  </p>
               	<div class="col-xs-6 col-sm-4 col-md-3 offers-wrap">
                 	<a href='#' class="offer offer--winter">
	                  <div class="offer__head">
	                    <p class="offer__name">giftcard<br/></p>
	                    <span class="offer__datail">from <br/> Odeon West End  </span>
	                  </div>
	                  <p class="offer__full">We’re open all day, everyday this Christmas! (Except Christmas day ‘coz we’re helping Santa).</p>
                 	</a>
                </div>

               <div class="col-xs-6 col-sm-4 col-md-3 offers-wrap">
                  <a href='#' class="offer offer--family">
                    <div class="offer__head">
                      <p class="offer__name">family <br/> ticket</p>
                    </div>
                    <p class="offer__full">Everyone pays the child price!</p>
                  </a>
               </div>

               <div class="col-xs-6 col-sm-4 col-md-3 offers-wrap">
									<a href='#' class="offer offer--day">
										<div class="offer__head">
									    <p class="offer__name">super<br/> tuesday</p>
										</div>
									 	<p class="offer__full">Up to 1/3 off adult tickets all day, sign up nowand claim your discount.</p>
									</a>
               </div>
               <div class="col-xs-6 col-sm-4 col-md-3 offers-wrap">
									<a href='#' class="offer offer--teen">
										<div class="offer__head">
									    <p class="offer__name">teen<br/> tickets</p>
									 	</div>
									 	<p class="offer__full">Aged 13 -18? Save up to 20% on the adult ticket price with our teen ticket.</p>
									</a>
               </div>
            </div>
 
           	<div class="offers-block offers-block--last">
               <p class="offer-place">Marble Arch Odeon offers </p>
               <div class="col-xs-6 col-sm-4 col-md-3 offers-wrap">
								<a href='#' class="offer offer--winter">
								  <div class="offer__head">
							      <p class="offer__name">Christmas<br/></p>
							      <span class="offer__datail">with <br/> Odeon West End  </span>
							    </div>
							    <p class="offer__full">We’re open all day, everyday this Christmas! (Except Christmas day ‘coz we’re helping Santa).</p>
								</a>
               </div>
               <div class="col-xs-6 col-sm-4 col-md-3 offers-wrap">
                 <a href='#' class="offer offer--family">
                  	<div class="offer__head">
                      <p class="offer__name">family <br/> ticket</p>
                   	</div>
                   	<p class="offer__full">Everyone pays the child price!</p>
                 </a>
               </div>
           	</div>
            </div>
        </section>
			</div>
		);
	}
}

export default SoonMovie;
