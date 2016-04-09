import ava from 'ava';

import {
    GET_CLIENT_LIST_START,
    GET_CLIENT_LIST_SUCCESS,
    GET_CLIENT_LIST_FAIL
} from '../../../../../src/scripts/shared/domain/client/actions/ClientListActions';

import reducer from '../../../../../src/scripts/shared/domain/client/reducers/ClientListReducer';

import {
    ClientListType
} from '../../../../specHelper/fixtures/client/ClientTypes';

ava('ClientList reducer goes into loading state until data is resolved', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: GET_CLIENT_LIST_START
        });
    });

    const loadingState = reducer(undefined, {
        type: GET_CLIENT_LIST_START
    });

    t.true(loadingState.isLoading);
    t.is(loadingState.errors, null);
});

ava('ClientList reducer sets payload', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: GET_CLIENT_LIST_SUCCESS,
            payload: ClientListType
        });
    });

    const loadingState = reducer(undefined, {
        type: GET_CLIENT_LIST_SUCCESS,
        payload: ClientListType
    });

    t.false(loadingState.isLoading);
    t.is(loadingState.errors, null);
});

ava('ClientList reducer handles network errors by returning error state', t => {
    const networkError = new Error('network error');
    t.notThrows(() => {
        reducer(undefined, {
            type: GET_CLIENT_LIST_FAIL,
            errors: networkError
        });
    });

    const errorState = reducer(undefined, {
        type: GET_CLIENT_LIST_FAIL,
        errors: networkError
    });

    t.false(errorState.isLoading);
    t.is(errorState.errors, networkError);
});
