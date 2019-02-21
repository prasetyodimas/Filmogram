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
		   	<section class="container">
        	<div class="col-sm-12">
            <div class="row">
              <div class="col-sm-8 col-md-9">
              	<h2 class="page-heading">Rates</h2>
                <div class="rates-wrapper">
                  <table>
                    <colgroup class="col-width-lg"/>
                    <colgroup class="col-width"/>
                    <colgroup class="col-width-sm"/>
                    <colgroup class="col-width"/>

                    <tr class="rates rates--top">
                      <td class="rates__obj"><a href="#" class="rates__obj-name">1. Thor: The Dark World</a></td>
                      <td class="rates__vote">233 546 votes</td>
                      <td class="rates__result">5.0</td>
                      <td class="rates__stars"><div class="score"></div></td>
                    </tr>

                    <tr class="rates rates--top">
                      <td class="rates__obj"><a href="#" class="rates__obj-name">2. The Book Thief</a></td>
                      <td class="rates__vote">163 546 votes</td>
                      <td class="rates__result">5.0</td>
                      <td class="rates__stars"><div class="score"></div></td>
                    </tr>

                    <tr class="rates rates--top">
                      <td class="rates__obj"><a href="#" class="rates__obj-name">3. How I Live Now</a></td>
                      <td class="rates__vote">843 546 votes</td>
                      <td class="rates__result">4.9</td>
                      <td class="rates__stars"><div class="score"></div></td>
                    </tr>

                    <tr class="rates">
                      <td class="rates__obj"><a href="#" class="rates__obj-name">4. The Armstrong Lie</a></td>
                      <td class="rates__vote">3 598 votes</td>
                      <td class="rates__result">4.9</td>
                      <td class="rates__stars"><div class="score"></div></td>
                    </tr>

                     <tr class="rates">
                      <td class="rates__obj"><a href="#" class="rates__obj-name">5. Ender's Game</a></td>
                      <td class="rates__vote">14 641 votes</td>
                      <td class="rates__result">4.8</td>
                      <td class="rates__stars"><div class="score"></div></td>
                    </tr>

                     <tr class="rates">
                      <td class="rates__obj"><a href="#" class="rates__obj-name">6. Jackass Presents: Bad Grandpa</a></td>
                      <td class="rates__vote">32 487 votes</td>
                      <td class="rates__result">4.7</td>
                      <td class="rates__stars"><div class="score"></div></td>
                    </tr>

                     <tr class="rates">
                      <td class="rates__obj"><a href="#" class="rates__obj-name">7. Last Vegas</a></td>
                      <td class="rates__vote">2 514 votes</td>
                      <td class="rates__result">4.7</td>
                      <td class="rates__stars"><div class="score"></div></td>
                    </tr>

                     <tr class="rates">
                      <td class="rates__obj"><a href="#" class="rates__obj-name">8. Free Birds</a></td>
                      <td class="rates__vote">62 841 votes</td>
                      <td class="rates__result">4.6</td>
                      <td class="rates__stars"><div class="score"></div></td>
                    </tr>

                     <tr class="rates">
                      <td class="rates__obj"><a href="#" class="rates__obj-name">9. Gravity</a></td>
                      <td class="rates__vote">6 885 votes</td>
                      <td class="rates__result">4.6</td>
                      <td class="rates__stars"><div class="score"></div></td>
                    </tr>

                     <tr class="rates">
                      <td class="rates__obj"><a href="#" class="rates__obj-name">10. Jackass Presents: Bad Grandpa</a></td>
                      <td class="rates__vote">7 122 votes</td>
                      <td class="rates__result">4.6</td>
                      <td class="rates__stars"><div class="score"></div></td>
                    </tr>

                     <tr class="rates">
                      <td class="rates__obj"><a href="#" class="rates__obj-name">11. Captain Phillips</a></td>
                      <td class="rates__vote">10 021 votes</td>
                      <td class="rates__result">4.4</td>
                      <td class="rates__stars"><div class="score"></div></td>
                    </tr>

                     <tr class="rates">
                      <td class="rates__obj"><a href="#" class="rates__obj-name">12. 12 Years a Slave</a></td>
                      <td class="rates__vote">541 votes</td>
                      <td class="rates__result">4.4</td>
                      <td class="rates__stars"><div class="score"></div></td>
                    </tr>

                     <tr class="rates">
                      <td class="rates__obj"><a href="#" class="rates__obj-name">13. Cloudy with a Chance of Meatballs 2</a></td>
                      <td class="rates__vote">1 020 votes</td>
                      <td class="rates__result">4.4</td>
                      <td class="rates__stars"><div class="score"></div></td>
                    </tr>

                    <tr class="rates">
                      <td class="rates__obj"><a href="#" class="rates__obj-name">14. Carrie</a></td>
                      <td class="rates__vote">840 votes</td>
                      <td class="rates__result">4.4</td>
                      <td class="rates__stars"><div class="score"></div></td>
                    </tr>

                    <tr class="rates">
                      <td class="rates__obj"><a href="#" class="rates__obj-name">15. The Counselor</a></td>
                      <td class="rates__vote">14 023 votes</td>
                      <td class="rates__result">4.3</td>
                      <td class="rates__stars"><div class="score"></div></td>
                    </tr>

                    <tr class="rates">
                      <td class="rates__obj"><a href="#" class="rates__obj-name">16. The Best Man Holiday</a></td>
                      <td class="rates__vote">4 250 votes</td>
                      <td class="rates__result">4.3</td>
                      <td class="rates__stars"><div class="score"></div></td>
                    </tr>

                    <tr class="rates">
                      <td class="rates__obj"><a href="#" class="rates__obj-name">17. The Hunger Games: Catching Fire</a></td>
                      <td class="rates__vote">100 251 votes</td>
                      <td class="rates__result">4.3</td>
                      <td class="rates__stars"><div class="score"></div></td>
                    </tr>

                    <tr class="rates">
                      <td class="rates__obj"><a href="#" class="rates__obj-name">18. Delivery Man</a></td>
                      <td class="rates__vote">84 241 votes</td>
                      <td class="rates__result">4.1</td>
                      <td class="rates__stars"><div class="score"></div></td>
                    </tr>

                    <tr class="rates">
                        <td class="rates__obj"><a href="#" class="rates__obj-name">19. Frozen</a></td>
                        <td class="rates__vote">7 215 votes</td>
                        <td class="rates__result">4.0</td>
                        <td class="rates__stars"><div class="score"></div></td>
                    </tr>
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