import { combineReducers } from 'redux';
import clients from './domain/client/reducers/clientListReducer';

export default () => combineReducers({
    clients
});
