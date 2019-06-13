import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//component
import BannerTops from '../../components/BannerAdstop';
import Headers from '../../components/Headers';
import Search from '../../components/Searchbar';
import SidebarRightApp from '../../components/SidebarRight';
import FooterApp from '../../components/Footer';

class RatingMovies extends Component {

	render() {
		return (
			<div className="wrapper">
				<BannerTops/>
				<Headers/>
				<Search/>
		   	<section className="container">
        	<div className="col-sm-12">
            <div className="row">
              <div className="col-sm-8 col-md-9">
              	<h2 className="page-heading">Rates</h2>
                <div className="rates-wrapper">
                  <table>
                    <colgroup className="col-width-lg"/>
                    <colgroup className="col-width"/>
                    <colgroup className="col-width-sm"/>
                    <colgroup className="col-width"/>
                    <tbody>
                      <tr className="rates rates--top">
                        <td className="rates__obj"><Link to="/" className="rates__obj-name">1. Thor: The Dark World</Link></td>
                        <td className="rates__vote">233 546 votes</td>
                        <td className="rates__result">5.0</td>
                        <td className="rates__stars"><div className="score"></div></td>
                      </tr>

                      <tr className="rates rates--top">
                        <td className="rates__obj"><Link to="/" className="rates__obj-name">2. The Book Thief</Link></td>
                        <td className="rates__vote">163 546 votes</td>
                        <td className="rates__result">5.0</td>
                        <td className="rates__stars"><div className="score"></div></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
           		<SidebarRightApp/>
            </div>
          </div>
        </section>
        <FooterApp/>
			</div>
		);
	}
}

export default RatingMovies;