import ava from 'ava';

import {
    GET_PROJECT_LIST_START,
    GET_PROJECT_LIST_SUCCESS,
    GET_PROJECT_LIST_FAIL
} from '../../../../../src/scripts/shared/domain/project/actions/ProjectListActions';

import reducer from '../../../../../src/scripts/shared/domain/project/reducers/projectListReducer';

import {
    ProjectListType
} from '../../../../specHelper/fixtures/project/ProjectFixtures';

ava('ProjectList reducer goes into loading state until data is resolved', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: GET_PROJECT_LIST_START
        });
    });

    const loadingState = reducer(undefined, {
        type: GET_PROJECT_LIST_START
    });

    t.true(loadingState.isLoading);
    t.is(loadingState.errors, null);
});

ava('ProjectList reducer sets payload', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: GET_PROJECT_LIST_SUCCESS,
            payload: ProjectListType
        });
    });

    const loadingState = reducer(undefined, {
        type: GET_PROJECT_LIST_SUCCESS,
        payload: ProjectListType
    });

    t.false(loadingState.isLoading);
    t.is(loadingState.errors, null);
});

ava('ProjectList reducer handles network errors by returning error state', t => {
    const networkError = new Error('network error');
    t.notThrows(() => {
        reducer(undefined, {
            type: GET_PROJECT_LIST_FAIL,
            errors: networkError
        });
    });

    const errorState = reducer(undefined, {
        type: GET_PROJECT_LIST_FAIL,
        errors: networkError
    });

    t.false(errorState.isLoading);
    t.is(errorState.errors, networkError);
});
