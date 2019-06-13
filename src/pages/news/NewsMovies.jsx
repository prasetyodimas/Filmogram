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
				<section className="container">
          <div className="overflow-wrapper">
            <div className="col-sm-8 col-md-9">
              <h2 className="page-heading">News</h2>
              <article className="post post--news">
                <Link to="/" className="post__image-link">
                  <img alt='' src="http://placehold.it/1600x600"/>
                </Link>
                <h1><Link to="/" className="post__title-link">Donec eu mollis augue, ut egestas leo</Link></h1>
                <p className="post__date">29 October 2013 </p>
                <div className="wave-devider"></div>
                  <p className="post__text">Mauris gravida ipsum vitae libero molestie eget dignissim ipsum egestas. Quisque in eros id velit molestie placerat a ut arcu. Etiam consequat, turpis ac commodo rhoncus, justo enim consequat tortor, vitae interdum odio tellus at sem. Aliquam lacus quam, lobortis sed lacus eget, commodo volutpat nunc. Text link sample. Proin accumsan diam vel nulla ultrices congue.</p>
                  <div className="tags">
                    <ul>
                      <li className="item-wrap"><Link to="/" className="tags__item">news</Link></li>
                      <li className="item-wrap"><Link to="/" className="tags__item">movie</Link></li>
                      <li className="item-wrap"><Link to="/"  className="tags__item">ceremony</Link></li>
                      <li className="item-wrap"><Link to="/" className="tags__item">award</Link></li>
                    </ul>
                  </div>
                  <div className="devider-huge"></div>
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