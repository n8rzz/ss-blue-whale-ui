import ava from 'ava';

import {
    GET_PROJECT_TYPE_START,
    GET_PROJECT_TYPE_SUCCESS,
    GET_PROJECT_TYPE_FAIL
} from '../../../../../src/scripts/shared/domain/projectType/actions/ProjectTypeActions';

import reducer from '../../../../../src/scripts/shared/domain/projectType/reducers/projectTypeReducer';

import {
    ProjectTypeType
} from '../../../../specHelper/fixtures/projectType/ProjectTypeTypes';

ava('getProjectType reducer goes into loading state until data is resolved', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: GET_PROJECT_TYPE_START
        });
    });

    const loadingState = reducer(undefined, {
        type: GET_PROJECT_TYPE_START
    });

    t.true(loadingState.isLoading);
    t.is(loadingState.errors, null);
});

ava('getProjectType reducer sets payload', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: GET_PROJECT_TYPE_SUCCESS,
            payload: ProjectTypeType
        });
    });

    const loadingState = reducer(undefined, {
        type: GET_PROJECT_TYPE_SUCCESS,
        payload: ProjectTypeType
    });

    t.false(loadingState.isLoading);
    t.is(loadingState.errors, null);
});

ava('getProjectType reducer handles network errors by returning error state', t => {
    const networkError = new Error('network error');
    t.notThrows(() => {
        reducer(undefined, {
            type: GET_PROJECT_TYPE_FAIL,
            errors: networkError
        });
    });

    const errorState = reducer(undefined, {
        type: GET_PROJECT_TYPE_FAIL,
        errors: networkError
    });

    t.false(errorState.isLoading);
    t.is(errorState.errors, networkError);
});
