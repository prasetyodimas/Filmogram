import React, { Component } from 'react';
import ReactGA from 'react-ga';
//components
import BannerAdstop from './components/BannerAdstop';
import Headers from './components/Headers';
import Search from './components/Searchbar';
import SidebarRightApp from './components/SidebarRight';
import MoviebestLanding from './components/MoviebestLanding';
import FooterApp from './components/Footer';
//library
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';

//initialize Google analytics
ReactGA.initialize('UA-131344166-1');
ReactGA.ga('send','pageview','home');

library.add(faIgloo)

class App extends Component {
  render() {
    return (
      /* Parents App !*/
      <div className="wrapper">
        <BannerAdstop/>
        <Headers/>
        <Search/>
        <section className="container">
          <div className="container-filmograms">
              <div className="col-sm-8 col-md-9">
                <div className="row">
                  <h2 className="page-heading">Movies</h2>
                </div>

              </div>
          </div>
        <SidebarRightApp/>
        </section>
        <div className="container">
          <MoviebestLanding/>
        </div>
        <FooterApp/>
      </div>
    );
  }
}

export default App;