import ava from 'ava';

import {
    DELETE_TASK_ITEM_START,
    DELETE_TASK_ITEM_SUCCESS,
    DELETE_TASK_ITEM_FAIL
} from '../../../../../src/scripts/shared/domain/taskItem/actions/TaskItemSingleActions';

import reducer from '../../../../../src/scripts/shared/domain/taskItem/reducers/taskItemSingleReducer';

ava('deleteTaskItem reducer goes into loading state until data is resolved', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: DELETE_TASK_ITEM_START
        });
    });

    const loadingState = reducer(undefined, {
        type: DELETE_TASK_ITEM_START
    });

    t.true(loadingState.isLoading);
    t.is(loadingState.errors, null);
});

ava('deleteTaskItem reducer sets payload', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: DELETE_TASK_ITEM_SUCCESS
        });
    });

    const loadingState = reducer(undefined, {
        type: DELETE_TASK_ITEM_SUCCESS
    });

    t.false(loadingState.isLoading);
    t.is(loadingState.errors, null);
});

ava('deleteTaskItem reducer handles network errors by returning error state', t => {
    const networkError = new Error('network error');
    t.notThrows(() => {
        reducer(undefined, {
            type: DELETE_TASK_ITEM_FAIL,
            errors: networkError
        });
    });

    const errorState = reducer(undefined, {
        type: DELETE_TASK_ITEM_FAIL,
        errors: networkError
    });

    t.false(errorState.isLoading);
    t.is(errorState.errors, networkError);
});
