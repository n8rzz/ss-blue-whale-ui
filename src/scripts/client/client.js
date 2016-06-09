import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { routerMiddleware, syncHistoryWithStore, push } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { authenticationMiddleware } from '../shared/lib/AuthenticationMiddleware';
import SessionService from '../shared/lib/SessionService/SessionService';

let sessionService = new SessionService();

export default function(reducer, routes) {
    const shouldUseAuthLogger = false;
    const store = applyMiddleware(
        thunk,
        routerMiddleware(browserHistory),
        authenticationMiddleware(push, sessionService, shouldUseAuthLogger)
    )((global.devToolsExtension ? global.devToolsExtension()(createStore) : createStore))(reducer());

    // connect redux-simple-router to the app's history and store
    const history = syncHistoryWithStore(browserHistory, store);

    ReactDOM.render(
        <Provider store={ store }>
            <Router children={ routes(store) } history={ history } />
        </Provider>,
        document.getElementById('root')
    );
}
