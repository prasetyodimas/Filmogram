import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//component
import BannerTops from '../../components/BannerAdstop';
import Headers from '../../components/Headers';
import Search from '../../components/Searchbar';
import SidebarRightApp from '../../components/SidebarRight';
import FooterApp from '../../components/Footer';

class RatingMovies extends Component {
  constructor(props) {
    super(props);
  }

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
                      <td className="rates__obj"><a href="#" className="rates__obj-name">1. Thor: The Dark World</a></td>
                      <td className="rates__vote">233 546 votes</td>
                      <td className="rates__result">5.0</td>
                      <td className="rates__stars"><div className="score"></div></td>
                    </tr>

                    <tr className="rates rates--top">
                      <td className="rates__obj"><a href="#" className="rates__obj-name">2. The Book Thief</a></td>
                      <td className="rates__vote">163 546 votes</td>
                      <td className="rates__result">5.0</td>
                      <td className="rates__stars"><div className="score"></div></td>
                    </tr>

                    <tr className="rates rates--top">
                      <td className="rates__obj"><a href="#" className="rates__obj-name">3. How I Live Now</a></td>
                      <td className="rates__vote">843 546 votes</td>
                      <td className="rates__result">4.9</td>
                      <td className="rates__stars"><div className="score"></div></td>
                    </tr>

                    <tr className="rates">
                      <td className="rates__obj"><a href="#" className="rates__obj-name">4. The Armstrong Lie</a></td>
                      <td className="rates__vote">3 598 votes</td>
                      <td className="rates__result">4.9</td>
                      <td className="rates__stars"><div className="score"></div></td>
                    </tr>

                     <tr className="rates">
                      <td className="rates__obj"><a href="#" className="rates__obj-name">5. Ender's Game</a></td>
                      <td className="rates__vote">14 641 votes</td>
                      <td className="rates__result">4.8</td>
                      <td className="rates__stars"><div className="score"></div></td>
                    </tr>

                     <tr className="rates">
                      <td className="rates__obj"><a href="#" className="rates__obj-name">6. Jackass Presents: Bad Grandpa</a></td>
                      <td className="rates__vote">32 487 votes</td>
                      <td className="rates__result">4.7</td>
                      <td className="rates__stars"><div className="score"></div></td>
                    </tr>

                     <tr className="rates">
                      <td className="rates__obj"><a href="#" className="rates__obj-name">7. Last Vegas</a></td>
                      <td className="rates__vote">2 514 votes</td>
                      <td className="rates__result">4.7</td>
                      <td className="rates__stars"><div className="score"></div></td>
                    </tr>

                     <tr className="rates">
                      <td className="rates__obj"><a href="#" className="rates__obj-name">8. Free Birds</a></td>
                      <td className="rates__vote">62 841 votes</td>
                      <td className="rates__result">4.6</td>
                      <td className="rates__stars"><div className="score"></div></td>
                    </tr>

                     <tr className="rates">
                      <td className="rates__obj"><a href="#" className="rates__obj-name">9. Gravity</a></td>
                      <td className="rates__vote">6 885 votes</td>
                      <td className="rates__result">4.6</td>
                      <td className="rates__stars"><div className="score"></div></td>
                    </tr>

                     <tr className="rates">
                      <td className="rates__obj"><a href="#" className="rates__obj-name">10. Jackass Presents: Bad Grandpa</a></td>
                      <td className="rates__vote">7 122 votes</td>
                      <td className="rates__result">4.6</td>
                      <td className="rates__stars"><div className="score"></div></td>
                    </tr>

                     <tr className="rates">
                      <td className="rates__obj"><a href="#" className="rates__obj-name">11. Captain Phillips</a></td>
                      <td className="rates__vote">10 021 votes</td>
                      <td className="rates__result">4.4</td>
                      <td className="rates__stars"><div className="score"></div></td>
                    </tr>

                     <tr className="rates">
                      <td className="rates__obj"><a href="#" className="rates__obj-name">12. 12 Years a Slave</a></td>
                      <td className="rates__vote">541 votes</td>
                      <td className="rates__result">4.4</td>
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