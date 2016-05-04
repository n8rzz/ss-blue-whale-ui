import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncReduxAndRouter } from 'redux-simple-router';
import { createHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export default function(reducer, routes) {
    const history = createHistory();
    
    const store = applyMiddleware(
        thunk
    )((global.devToolsExtension ? global.devToolsExtension()(createStore) : createStore))(reducer());

    // connect redux-simple-router to the app's history and store
    syncReduxAndRouter(history, store);

    ReactDOM.render(
      <Provider store={store}>
            <Router children={routes(store)} history={browserHistory} />
      </Provider>,
      document.getElementById('root')
    );
}
