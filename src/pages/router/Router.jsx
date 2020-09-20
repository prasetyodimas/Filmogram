import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../../App';
import Movies from '../movies/MovieLayouts';
import DetailMovies from '../movies/MovieDetail';
import CommingSoon from '../comingsoon/SoonMovie';
import RatingMovies from '../ratings/RatingMovies';
import GalleryMovies from '../gallery/GalleryMovies';
import NewsMovies from '../news/NewsMovies';
import AboutUs from '../aboutus/AboutUs';
import NoMatch from '../../components/ErorrBoundary';
import InitTrackers from '../../utils/trackerGa/trackPageViews';

const RouterApps = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={InitTrackers(App)}></Route>
			<Route path="/movie" component={InitTrackers(Movies)}></Route>
			<Route path="/movie/detail-movies" component={InitTrackers(DetailMovies)}></Route>
			<Route path="/comingsoon" component={InitTrackers(CommingSoon)}></Route>
			<Route path="/rates" component={InitTrackers(RatingMovies)}></Route>
			<Route path="/gallery" component={InitTrackers(GalleryMovies)}></Route>
			<Route path="/news" component={InitTrackers(NewsMovies)}></Route>
			<Route path="/about-us" component={InitTrackers(AboutUs)}></Route>
			<Route component={InitTrackers(NoMatch)}></Route>
		</Switch>
	</BrowserRouter>
);

export default RouterApps;
