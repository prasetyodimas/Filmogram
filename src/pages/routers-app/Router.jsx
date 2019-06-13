import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '../../App';
import Movies from '../../pages/movies/MovieLayouts';
import DetailMovies from '../../pages/movies/MovieDetail';
import CommingSoon from '../../pages/comingsoon/SoonMovie';
import RatingMovies from '../../pages/ratings/RatingMovies';
import GalleryMovies from '../../pages/gallery/GalleryMovies';
import NewsMovies from '../../pages/news/NewsMovies';
import AboutUs from '../../pages/aboutus/AboutUs';
import NoMatch from '../../components/ErorrBoundary';

const RouterApps = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={App}></Route>
			<Route path="/movie" component={Movies}></Route>
			<Route path="/movie/detail-movies" component={DetailMovies}></Route>
			<Route path="/comingsoon" component={CommingSoon}></Route>
			<Route path="/rates" component={RatingMovies}></Route>
			<Route path="/gallery" component={GalleryMovies}></Route>
			<Route path="/news" component={NewsMovies}></Route>
			<Route path="/about-us" component={AboutUs}></Route>
			<Route component={NoMatch}></Route>
		</Switch>
	</BrowserRouter>
);

export default RouterApps;
