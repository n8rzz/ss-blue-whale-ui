import ava from 'ava';

import {
    CREATE_PROJECT_START,
    CREATE_PROJECT_SUCCESS,
    CREATE_PROJECT_FAIL
} from '../../../../../src/scripts/shared/domain/project/actions/ProjectSingleActions';

import reducer from '../../../../../src/scripts/shared/domain/project/reducers/projectSingleReducer';

import {
    ValidProjectType
} from '../../../../specHelper/fixtures/project/ProjectFixtures';

ava('createProject reducer goes into loading state until data is resolved', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: CREATE_PROJECT_START
        });
    });

    const loadingState = reducer(undefined, {
        type: CREATE_PROJECT_START
    });

    t.true(loadingState.isLoading);
    t.is(loadingState.errors, null);
});

ava('createProject reducer sets payload', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: CREATE_PROJECT_SUCCESS,
            payload: ValidProjectType
        });
    });

    const loadingState = reducer(undefined, {
        type: CREATE_PROJECT_SUCCESS,
        payload: ValidProjectType
    });

    t.false(loadingState.isLoading);
    t.is(loadingState.errors, null);
});

ava('createProject reducer handles network errors by returning error state', t => {
    const networkError = new Error('network error');
    t.notThrows(() => {
        reducer(undefined, {
            type: CREATE_PROJECT_FAIL,
            errors: networkError
        });
    });

    const errorState = reducer(undefined, {
        type: CREATE_PROJECT_FAIL,
        errors: networkError
    });

    t.false(errorState.isLoading);
    t.is(errorState.errors, networkError);
});
