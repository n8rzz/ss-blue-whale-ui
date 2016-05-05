import ava from 'ava';

import {
    DELETE_CLIENT_START,
    DELETE_CLIENT_SUCCESS,
    DELETE_CLIENT_FAIL
} from '../../../../../src/scripts/shared/domain/client/actions/ClientSingleActions';

import reducer from '../../../../../src/scripts/shared/domain/client/reducers/clientSingleReducer';

ava('deleteClient reducer goes into loading state until data is resolved', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: DELETE_CLIENT_START
        });
    });

    const loadingState = reducer(undefined, {
        type: DELETE_CLIENT_START
    });

    t.true(loadingState.isLoading);
    t.is(loadingState.errors, null);
});

ava('deleteClient reducer sets payload', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: DELETE_CLIENT_SUCCESS
        });
    });

    const loadingState = reducer(undefined, {
        type: DELETE_CLIENT_SUCCESS
    });

    t.false(loadingState.isLoading);
    t.is(loadingState.errors, null);
});

ava('deleteClient reducer handles network errors by returning error state', t => {
    const networkError = new Error('network error');
    t.notThrows(() => {
        reducer(undefined, {
            type: DELETE_CLIENT_FAIL,
            errors: networkError
        });
    });

    const errorState = reducer(undefined, {
        type: DELETE_CLIENT_FAIL,
        errors: networkError
    });

    t.false(errorState.isLoading);
    t.is(errorState.errors, networkError);
});
