import { combineReducers } from 'redux';
import books from './reducers/books/BooksReducer.js';

export default () => combineReducers({
    books
});
