import React, { Component } from 'react';
//components
import BannerAdstop from './components/BannerAdstop';
import Headers from './components/Headers';
import Search from './components/Searchbar';
import SidebarRightApp from './components/SidebarRight';
import FooterApp from './components/Footer';
//library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';


library.add(faIgloo)

class App extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
  }

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
        <FooterApp/>
      </div>
    );
  }
}

export default App;