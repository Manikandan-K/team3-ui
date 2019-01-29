import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './store';
import createHistory from 'history/createBrowserHistory'
import Header from './Header'
import Home from './Home'
import MovieDetail from '../movie-detail/MovieDetail';
import Footer from "./Footer";

const browserHistory = createHistory()

const store = configureStore(browserHistory);

const Routes = () => (
  <ConnectedRouter history={browserHistory}>
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={MovieDetail} path="/movies/id" />
  </Switch>
  </ConnectedRouter>
);

const Main = () => (
    <div>
        <Header/>
        <Routes/>
        <Footer/>
    </div>
);

const App = () => (
    <Provider store={store}>
        <Main/>
    </Provider>
);

export default App;
