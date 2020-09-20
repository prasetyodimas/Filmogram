import React, { Component } from 'react';
import BannerAdstop from './components/BannerAdstop';
import Headers from './components/Headers';
import Search from './components/Searchbar';
// import SidebarRightApp from './components/SidebarRight';
import MoviebestLanding from './components/MoviebestLanding';
import FooterApp from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';

library.add(faIgloo);

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <BannerAdstop/>
        <Headers/>
        <Search/>
        <section className="container">
          <div className="container-filmograms">
              <div className="col-sm-8 col-md-9">
                <div className="row">
                  <h2 className="page-heading">Filmaja.com</h2>
                </div>
              </div>
          </div>
        {/* <SidebarRightApp/> */}
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
