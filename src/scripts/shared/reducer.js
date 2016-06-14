import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import session from './domain/session/reducers/sessionReducer';
import createUser from './domain/registration/reducers/registrationReducer';
import flashMessage from './domain/flashMessage/reducers/flashMessageReducer';
import clients from './domain/client/reducers/clientListReducer';
import client from './domain/client/reducers/ClientSingleReducer';
import projects from './domain/project/reducers/projectListReducer';
import projectTypes from './domain/projectType/reducers/projectTypeListReducer';
import projectType from './domain/projectType/reducers/projectTypeReducer';
import taskItems from './domain/taskItem/reducers/taskItemListReducer';
import taskItem from './domain/taskItem/reducers/taskItemSingleReducer';

export default () => combineReducers({
    session,
    createUser,
    flashMessage,
    clients,
    client,
    projects,
    projectTypes,
    projectType,
    taskItems,
    taskItem,
    routing: routerReducer
});
