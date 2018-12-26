import React, { Component } from 'react';
//components
import Headers from './component/Headers';
import Search from './component/Searchbar';
import ContainerApp from './component/ContainerApp';
import SidebarRightApp from './component/SidebarRight';
import FooterApps from './component/Footer';
//library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';
import BannerTops from './assets/images/banners/banner-tops.png';

library.add(faIgloo)

class App extends Component {
  render() {
    return (
        /* Parents App !*/
        <div className="wrapper">
            <div className="banner-top">
                <img className="banner-explisit" alt='top banner' src={BannerTops}/>
                <Headers/>
                <Search/>
                <div className="container">
                    <ContainerApp/>
                    <SidebarRightApp/>
                </div>
            </div>
            <div className="row">
                <FooterApps/>
            </div>
        </div>
    );
  }
}

export default App;