import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//component
import BannerTops from '../../components/BannerAdstop';
import Headers from '../../components/Headers';
import Search from '../../components/Searchbar';
import SidebarRightApp from '../../components/SidebarRight';
import FooterApp from '../../components/Footer';

class NewsMovies extends Component {
	render() {
		return (
			<div className="wrapper">
				<BannerTops/>
				<Headers/>
				<Search/>
				<section class="container">
          <div class="overflow-wrapper">
            <div class="col-sm-8 col-md-9">
              <h2 class="page-heading">News</h2>
              <article class="post post--news">
                <a href='single-page-left.html' class="post__image-link">
                  <img alt='' src="http://placehold.it/1600x600"/>
                </a>
                <h1><a href="single-page-left.html" class="post__title-link">Donec eu mollis augue, ut egestas leo</a></h1>
                <p class="post__date">29 October 2013 </p>
                <div class="wave-devider"></div>
                  <p class="post__text">Mauris gravida ipsum vitae libero molestie eget dignissim ipsum egestas. Quisque in eros id velit molestie placerat a ut arcu. Etiam consequat, turpis ac commodo rhoncus, justo enim consequat tortor, vitae interdum odio tellus at sem. Aliquam lacus quam, lobortis sed lacus eget, commodo volutpat nunc. Text link sample. Proin accumsan diam vel nulla ultrices congue.</p> 
                  <div class="tags">
                    <ul>
                      <li class="item-wrap"><a href="#" class="tags__item">news</a></li>
                      <li class="item-wrap"><a href="#" class="tags__item">movie</a></li>
                      <li class="item-wrap"><a href="#" class="tags__item">ceremony</a></li>
                      <li class="item-wrap"><a href="#" class="tags__item">award</a></li>
                    </ul>
                  </div>
                  <div class="devider-huge"></div>
              	</article> 
          		</div>
						<SidebarRightApp/>
        	</div>
        </section>
				<FooterApp/>
			</div>
		);
	}
}

export default NewsMovies;