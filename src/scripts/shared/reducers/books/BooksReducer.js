import { createReducer } from 'redux-create-reducer';
import { BookListStateType } from '../../domain/book/BookTypes';
import {
    GET_BOOK_LIST_START,
    GET_BOOK_LIST_SUCCESS,
    GET_BOOK_LIST_FAIL
} from '../../actions/books/BookActions';

const INITIAL_STATE = new BookListStateType({
    isLoading: false,
    payload: [],
    errors: null
});

const mergeState = (state, updates) => BookListStateType.update(state, { $merge: updates });

export default createReducer(INITIAL_STATE, {
    [GET_BOOK_LIST_START]: () => mergeState(
        INITIAL_STATE,
        {
            isLoading: true
        }
    ),

    [GET_BOOK_LIST_SUCCESS]: (state, { payload }) => mergeState(
        state,
        {
            isLoading: false,
            payload: payload.data
        }
    ),

    [GET_BOOK_LIST_FAIL]: (state, { errors }) => mergeState(
        state,
        {
            isLoading: false,
            errors
        }
    )
});
