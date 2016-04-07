import ava from 'ava';
import Fixtures from '../../../specHelper/fixtures';

import {
    GET_BOOK_LIST_START,
    GET_BOOK_LIST_SUCCESS,
    GET_BOOK_LIST_FAIL
} from '../../../../src/scripts/shared/actions/books/BookActions';

import reducer from '../../../../src/scripts/shared/reducers/books/BooksReducer';

const VALID_BOOK_LIST = Fixtures.book.VALID_BOOK_LIST;

ava('Books reducer goes into loading state until data is resolved', test => {
    test.notThrows(() => {
        reducer(undefined, {
            type: GET_BOOK_LIST_START
        });
    });

    const loadingState = reducer(undefined, {
        type: GET_BOOK_LIST_START
    });

    test.true(loadingState.isLoading);
    test.is(loadingState.errors, null);
});

ava('Books reducer sets payload', test => {
    test.notThrows(() => {
        reducer(undefined, {
            type: GET_BOOK_LIST_SUCCESS,
            payload: VALID_BOOK_LIST
        });
    });

    const loadingState = reducer(undefined, {
        type: GET_BOOK_LIST_SUCCESS,
        payload: VALID_BOOK_LIST
    });

    test.false(loadingState.isLoading);
    test.is(loadingState.errors, null);
});

ava('Books reducer handles network errors by returning error state', test => {
    const networkError = new Error('network error');
    test.notThrows(() => {
        reducer(undefined, {
            type: GET_BOOK_LIST_FAIL,
            errors: networkError
        });
    });

    const errorState = reducer(undefined, {
        type: GET_BOOK_LIST_FAIL,
        errors: networkError
    });

    test.false(errorState.isLoading);
    test.is(errorState.errors, networkError);
});
