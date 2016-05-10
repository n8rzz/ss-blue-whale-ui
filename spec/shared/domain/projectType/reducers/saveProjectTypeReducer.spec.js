import ava from 'ava';

import {
    SAVE_PROJECT_TYPE_START,
    SAVE_PROJECT_TYPE_SUCCESS,
    SAVE_PROJECT_TYPE_FAIL
} from '../../../../../src/scripts/shared/domain/projectType/actions/ProjectTypeActions';

import reducer from '../../../../../src/scripts/shared/domain/projectType/reducers/projectTypeReducer';

import {
    ValidProjectTypeType
} from '../../../../specHelper/fixtures/projectType/ProjectTypeTypes';

ava('saveProjectType reducer goes into loading state until data is resolved', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: SAVE_PROJECT_TYPE_START
        });
    });

    const loadingState = reducer(undefined, {
        type: SAVE_PROJECT_TYPE_START
    });

    t.true(loadingState.isLoading);
    t.is(loadingState.errors, null);
});

ava('saveProjectType reducer sets payload', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: SAVE_PROJECT_TYPE_SUCCESS,
            payload: ValidProjectTypeType
        });
    });

    const state = reducer(undefined, {
        type: SAVE_PROJECT_TYPE_SUCCESS,
        payload: ValidProjectTypeType
    });

    t.false(state.isLoading);
    t.is(state.errors, null);
});

ava('saveProjectType reducer handles network errors by returning error state', t => {
    const networkError = new Error('network error');
    t.notThrows(() => {
        reducer(undefined, {
            type: SAVE_PROJECT_TYPE_FAIL,
            errors: networkError
        });
    });

    const errorState = reducer(undefined, {
        type: SAVE_PROJECT_TYPE_FAIL,
        errors: networkError
    });

    t.false(errorState.isLoading);
    t.is(errorState.errors, networkError);
});
