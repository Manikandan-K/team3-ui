import React from 'react';
import { Provider } from 'react-redux';
import TabbedMain from "./TabbedMain";
import configureStore from './store';

import createHistory from 'history/createBrowserHistory'

const browserHistory = createHistory()

const store = configureStore(browserHistory);

const App = () => (
    <Provider store={store}>
        <TabbedMain history={browserHistory}/>
    </Provider>
);

export default App;
