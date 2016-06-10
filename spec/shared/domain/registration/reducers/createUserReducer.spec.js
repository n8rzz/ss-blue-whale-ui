import ava from 'ava';

import {
    CREATE_USER_START,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL
} from '../../../../../src/scripts/shared/domain/registration/actions/RegistrationActions';

import reducer from '../../../../../src/scripts/shared/domain/registration/reducers/registrationReducer';

import {
    ValidRegistrationResponseType
} from '../../../../specHelper/fixtures/registration/RegistrationFixtures';

ava('createUser reducer goes into loading state until data is resolved', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: CREATE_USER_START
        });
    });

    const loadingState = reducer(undefined, {
        type: CREATE_USER_START
    });

    t.true(loadingState.isLoading);
    t.is(loadingState.errors, null);
});

ava('createUser reducer sets payload', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: CREATE_USER_SUCCESS,
            payload: ValidRegistrationResponseType
        });
    });

    const loadingState = reducer(undefined, {
        type: CREATE_USER_SUCCESS,
        payload: ValidRegistrationResponseType
    });

    t.false(loadingState.isLoading);
    t.is(loadingState.errors, null);
});

ava('createUser reducer handles network errors by returning error state', t => {
    const networkError = new Error('network error');
    t.notThrows(() => {
        reducer(undefined, {
            type: CREATE_USER_FAIL,
            errors: networkError
        });
    });

    const errorState = reducer(undefined, {
        type: CREATE_USER_FAIL,
        errors: networkError
    });

    t.false(errorState.isLoading);
    t.is(errorState.errors, networkError);
});
