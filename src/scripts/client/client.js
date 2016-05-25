import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { push } from 'react-router-redux';

// const authenticationMiddleware = store => next => action => {
//     if (action.type === '@@router/LOCATION_CHANGE') {
//         return next(action);
//     } else if (!localStorage.getItem('token')) {
//         console.log('denied');
//         debugger;
//
//         next(store.dispatch(push('/projects')));
//     }
//
//     next(action);
// };

export default function(reducer, routes) {
    const store = applyMiddleware(
        thunk,
        routerMiddleware(browserHistory)
        // ,
        // authenticationMiddleware
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
