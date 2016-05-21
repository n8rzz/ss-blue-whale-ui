import ava from 'ava';

import {
    CREATE_TASK_ITEM_START,
    CREATE_TASK_ITEM_SUCCESS,
    CREATE_TASK_ITEM_FAIL
} from '../../../../../src/scripts/shared/domain/taskItem/actions/TaskItemSingleActions';

import reducer from '../../../../../src/scripts/shared/domain/taskItem/reducers/taskItemSingleReducer';

import {
    ValidTaskItemType
} from '../../../../specHelper/fixtures/taskItem/TaskItemFixtures';

ava('createTaskItem reducer goes into loading state until data is resolved', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: CREATE_TASK_ITEM_START
        });
    });

    const loadingState = reducer(undefined, {
        type: CREATE_TASK_ITEM_START
    });

    t.true(loadingState.isLoading);
    t.is(loadingState.errors, null);
});

ava('createTaskItem reducer sets payload', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: CREATE_TASK_ITEM_SUCCESS,
            payload: ValidTaskItemType
        });
    });

    const loadingState = reducer(undefined, {
        type: CREATE_TASK_ITEM_SUCCESS,
        payload: ValidTaskItemType
    });

    t.false(loadingState.isLoading);
    t.is(loadingState.errors, null);
});

ava('createTaskItem reducer handles network errors by returning error state', t => {
    const networkError = new Error('network error');
    t.notThrows(() => {
        reducer(undefined, {
            type: CREATE_TASK_ITEM_FAIL,
            errors: networkError
        });
    });

    const errorState = reducer(undefined, {
        type: CREATE_TASK_ITEM_FAIL,
        errors: networkError
    });

    t.false(errorState.isLoading);
    t.is(errorState.errors, networkError);
});
