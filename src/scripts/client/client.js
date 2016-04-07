import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export default function(reducer, routes) {
    const store = applyMiddleware(thunk)(createStore)(reducer());

    ReactDOM.render(
      <Provider store={store}>
            <Router children={routes(store)} history={browserHistory} />
      </Provider>,
      document.getElementById('root')
    );
}
