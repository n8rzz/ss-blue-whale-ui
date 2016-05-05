import ava from 'ava';

import {
    SAVE_CLIENT_START,
    SAVE_CLIENT_SUCCESS,
    SAVE_CLIENT_FAIL
} from '../../../../../src/scripts/shared/domain/client/actions/ClientSingleActions';

import reducer from '../../../../../src/scripts/shared/domain/client/reducers/clientSingleReducer';

import {
    ClientType
} from '../../../../specHelper/fixtures/client/ClientTypes';

ava('saveClient reducer goes into loading state until data is resolved', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: SAVE_CLIENT_START
        });
    });

    const loadingState = reducer(undefined, {
        type: SAVE_CLIENT_START
    });

    t.true(loadingState.isLoading);
    t.is(loadingState.errors, null);
});

ava('saveClient reducer sets payload', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: SAVE_CLIENT_SUCCESS,
            payload: ClientType
        });
    });

    const loadingState = reducer(undefined, {
        type: SAVE_CLIENT_SUCCESS,
        payload: ClientType
    });

    t.false(loadingState.isLoading);
    t.is(loadingState.errors, null);
});

ava('saveClient reducer handles network errors by returning error state', t => {
    const networkError = new Error('network error');
    t.notThrows(() => {
        reducer(undefined, {
            type: SAVE_CLIENT_FAIL,
            errors: networkError
        });
    });

    const errorState = reducer(undefined, {
        type: SAVE_CLIENT_FAIL,
        errors: networkError
    });

    t.false(errorState.isLoading);
    t.is(errorState.errors, networkError);
});
