import ava from 'ava';

import {
    GET_PROJECT_TYPE_LIST_START,
    GET_PROJECT_TYPE_LIST_SUCCESS,
    GET_PROJECT_TYPE_LIST_FAIL
} from '../../../../../src/scripts/shared/domain/projectType/actions/ProjectTypeListActions';

import reducer from '../../../../../src/scripts/shared/domain/projectType/reducers/projectTypeListReducer';

import {
    ProjectTypeListType
} from '../../../../specHelper/fixtures/projectType/ProjectTypeTypes';

ava('ProjectTypeList reducer goes into loading state until data is resolved', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: GET_PROJECT_TYPE_LIST_START
        });
    });

    const loadingState = reducer(undefined, {
        type: GET_PROJECT_TYPE_LIST_START
    });

    t.true(loadingState.isLoading);
    t.is(loadingState.errors, null);
});

ava('ProjectTypeList reducer sets payload', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: GET_PROJECT_TYPE_LIST_SUCCESS,
            payload: ProjectTypeListType
        });
    });

    const loadingState = reducer(undefined, {
        type: GET_PROJECT_TYPE_LIST_SUCCESS,
        payload: ProjectTypeListType
    });

    t.false(loadingState.isLoading);
    t.is(loadingState.errors, null);
});

ava('ProjectTypeList reducer handles network errors by returning error state', t => {
    const networkError = new Error('network error');
    t.notThrows(() => {
        reducer(undefined, {
            type: GET_PROJECT_TYPE_LIST_FAIL,
            errors: networkError
        });
    });

    const errorState = reducer(undefined, {
        type: GET_PROJECT_TYPE_LIST_FAIL,
        errors: networkError
    });

    t.false(errorState.isLoading);
    t.is(errorState.errors, networkError);
});
