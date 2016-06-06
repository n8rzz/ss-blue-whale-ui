import ava from 'ava';

import {
    CREATE_SESSION_START,
    CREATE_SESSION_SUCCESS,
    CREATE_SESSION_FAIL
} from '../../../../../src/scripts/shared/domain/session/actions/SessionActions';

import reducer from '../../../../../src/scripts/shared/domain/session/reducers/sessionReducer';

import {
    ValidSessionResponseType
} from '../../../../specHelper/fixtures/session/SessionFixutes';

ava('createUser reducer goes into loading state until data is resolved', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: CREATE_SESSION_START
        });
    });

    const loadingState = reducer(undefined, {
        type: CREATE_SESSION_START
    });

    t.true(loadingState.isLoading);
    t.is(loadingState.errors, null);
});

ava('createUser reducer sets payload', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: CREATE_SESSION_SUCCESS,
            payload: ValidSessionResponseType
        });
    });

    const loadingState = reducer(undefined, {
        type: CREATE_SESSION_SUCCESS,
        payload: ValidSessionResponseType
    });

    t.false(loadingState.isLoading);
    t.is(loadingState.errors, null);
});

ava('createUser reducer handles network errors by returning error state', t => {
    const networkError = new Error('network error');
    t.notThrows(() => {
        reducer(undefined, {
            type: CREATE_SESSION_FAIL,
            errors: networkError
        });
    });

    const errorState = reducer(undefined, {
        type: CREATE_SESSION_FAIL,
        errors: networkError
    });

    t.false(errorState.isLoading);
    t.is(errorState.errors, networkError);
});
