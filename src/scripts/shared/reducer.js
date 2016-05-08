import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import clients from './domain/client/reducers/clientListReducer';
import client from './domain/client/reducers/ClientSingleReducer';
import projectTypes from './domain/projectType/reducers/projectTypeListReducer';
import projectType from './domain/projectType/reducers/projectTypeReducer';
import taskItems from './domain/taskItem/reducers/taskItemListReducer';

export default () => combineReducers({
    clients,
    client,
    projectTypes,
    projectType,
    taskItems,
    routing: routerReducer
});
