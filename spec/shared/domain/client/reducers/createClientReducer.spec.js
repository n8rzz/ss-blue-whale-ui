import ava from 'ava';

import {
    CREATE_CLIENT_START,
    CREATE_CLIENT_SUCCESS,
    CREATE_CLIENT_FAIL
} from '../../../../../src/scripts/shared/domain/client/actions/ClientSingleActions';

import reducer from '../../../../../src/scripts/shared/domain/client/reducers/clientSingleReducer';

import {
    ClientType
} from '../../../../specHelper/fixtures/client/ClientTypes';

ava('createClient reducer goes into loading state until data is resolved', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: CREATE_CLIENT_START
        });
    });

    const loadingState = reducer(undefined, {
        type: CREATE_CLIENT_START
    });

    t.true(loadingState.isLoading);
    t.is(loadingState.errors, null);
});

ava('createClient reducer sets payload', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: CREATE_CLIENT_SUCCESS,
            payload: ClientType
        });
    });

    const loadingState = reducer(undefined, {
        type: CREATE_CLIENT_SUCCESS,
        payload: ClientType
    });

    t.false(loadingState.isLoading);
    t.is(loadingState.errors, null);
});

ava('createClient reducer handles network errors by returning error state', t => {
    const networkError = new Error('network error');
    t.notThrows(() => {
        reducer(undefined, {
            type: CREATE_CLIENT_FAIL,
            errors: networkError
        });
    });

    const errorState = reducer(undefined, {
        type: CREATE_CLIENT_FAIL,
        errors: networkError
    });

    t.false(errorState.isLoading);
    t.is(errorState.errors, networkError);
});
