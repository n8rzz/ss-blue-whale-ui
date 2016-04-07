import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './content';

export default function(store) {
    return (
        <Route component={ App } path="/">
            <IndexRoute component={ App } />
        </Route>
    );
}

