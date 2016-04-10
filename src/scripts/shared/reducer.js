import { combineReducers } from 'redux';
import clients from './domain/client/reducers/clientListReducer';
import taskItems from './domain/taskItem/reducers/taskItemListReducer';

export default () => combineReducers({
    clients,
    taskItems
});
