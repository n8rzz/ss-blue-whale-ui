import client from './client';
import reducer from '../shared/reducer';
import routes from '../shared/routes';

// application entry point
client(reducer, routes);