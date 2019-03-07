import React, { Component } from 'react';
//components
import BannerTops from '../../components/BannerAdstop';
import Headers from '../../components/Headers';
import Search from '../../components/Searchbar';
import MovieBox from '../../components/MovieListBox';
import SidebarRightApp from '../../components/SidebarRight';
import FooterApp from '../../components/Footer';
//library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';

library.add(faIgloo)

class MovieLayouts extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      person:[]
    }
  }

  componentDidMount() {
    this.foo.fetchApiOmdb();
  }

  render() {
    return (
      /* Parents App !*/
      <div className="wrapper">
        <BannerTops/>
        <Headers/>
        <Search/>
        <section className="container">
          <MovieBox ref={foo => this.foo = foo}/>         
        </section>
        <FooterApp/>
      </div>
    );
  }
}

export default MovieLayouts;