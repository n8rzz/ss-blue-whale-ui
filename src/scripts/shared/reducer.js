import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';

import clients from './domain/client/reducers/clientListReducer';
import client from './domain/client/reducers/ClientSingleReducer';
import projectTypes from './domain/projectType/reducers/projectTypeListReducer';
import taskItems from './domain/taskItem/reducers/taskItemListReducer';

export default () => combineReducers({
    routing: routeReducer,
    clients,
    client,
    projectTypes,
    taskItems
});
