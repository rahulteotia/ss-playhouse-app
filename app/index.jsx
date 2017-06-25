import './styles/main.css';
import injectTapEventPlugin from 'react-tap-event-plugin';


import React from 'react';
import { render } from 'react-dom';
import Router, {IndexRoute, Route, Link } from 'react-router';
import {createHashHistory } from 'history';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import Home from './components/Home.jsx';
import App from './components/App.jsx';

import NotFound from './components/util/NotFound.jsx';

import RouterContainer from './services/RouterContainer';


import 'array.prototype.findindex';

import {APP_BASE_PATH} from './util/Constant';
import alt from './libs/alt';
import storage from './libs/storage';
import persist from './libs/persist';
import { createHistory, useBasename } from 'history';


//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();
main();

function main() {

    const app = document.createElement('div');
    app.id = 'app-base-container';
    document.body.appendChild(app);



    const history = createBrowserHistory();

    var router = (
        <Router history={history}>
            <Route displayName="Home" path={APP_BASE_PATH} component={App}>
                <IndexRoute displayName="Home" component={Home} />


                {/*NOT FOUND ROUTE*/}
                <Route path="*" component={NotFound}/>
            </Route>
        </Router>
    );

    RouterContainer.setRoutes(router);
    render(router, app);

}


