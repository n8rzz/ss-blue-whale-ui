import ava from 'ava';

import {
    DESTROY_SESSION_START,
    DESTROY_SESSION_SUCCESS,
    DESTROY_SESSION_FAIL
} from '../../../../../src/scripts/shared/domain/session/actions/SessionActions';

import reducer from '../../../../../src/scripts/shared/domain/session/reducers/sessionReducer';

// TODO: move to a fixtures file
const errorToThrow = {
    status: 404,
    statusText: 'No session found. Please log in.'
};

ava('destroySession reducer goes into loading state until data is resolved', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: DESTROY_SESSION_START
        });
    });

    const loadingState = reducer(undefined, {
        type: DESTROY_SESSION_START
    });

    t.true(loadingState.isLoading);
});

ava('destroySession reducer clears errors when in loading state', t => {
    const networkError = new Error('network error');

    reducer(undefined, {
        type: DESTROY_SESSION_FAIL,
        errors: networkError
    });

    t.notThrows(() => {
        reducer(undefined, {
            type: DESTROY_SESSION_START
        });
    });

    const loadingState = reducer(undefined, { type: DESTROY_SESSION_START });

    t.is(loadingState.errors, null);
});

ava('destroySession reducer resets state to it\'s INITIAL_STATE on success', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: DESTROY_SESSION_SUCCESS
        });
    });

    const loadingState = reducer(undefined, {
        type: DESTROY_SESSION_SUCCESS
    });

    t.false(loadingState.isLoading);
    t.is(loadingState.payload, null);
    t.is(loadingState.errors, null);
});

ava('destroySession reducer handles an error state', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: DESTROY_SESSION_FAIL,
            errors: errorToThrow
        });
    });

    const errorState = reducer(undefined, {
        type: DESTROY_SESSION_FAIL,
        errors: errorToThrow
    });

    t.false(errorState.isLoading);
    t.is(errorState.errors, errorToThrow);
});
