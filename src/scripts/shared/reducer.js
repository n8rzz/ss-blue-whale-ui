import { combineReducers } from 'redux';
import clients from './domain/client/reducers/clientListReducer';
import projectTypes from './domain/projectType/reducers/projectTypeListReducer';
import taskItems from './domain/taskItem/reducers/taskItemListReducer';

export default () => combineReducers({
    clients,
    projectTypes,
    taskItems
});
