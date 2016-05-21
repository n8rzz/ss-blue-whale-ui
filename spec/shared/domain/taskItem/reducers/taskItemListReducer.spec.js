import ava from 'ava';

import {
    GET_TASK_ITEM_LIST_START,
    GET_TASK_ITEM_LIST_SUCCESS,
    GET_TASK_ITEM_LIST_FAIL
} from '../../../../../src/scripts/shared/domain/taskItem/actions/TaskItemListActions';

import reducer from '../../../../../src/scripts/shared/domain/taskItem/reducers/taskItemListReducer';

import {
    TaskItemListType
} from '../../../../specHelper/fixtures/taskItem/TaskItemFixtures';

ava('TaskItemList reducer goes into loading state until data is resolved', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: GET_TASK_ITEM_LIST_START
        });
    });

    const loadingState = reducer(undefined, {
        type: GET_TASK_ITEM_LIST_START
    });

    t.true(loadingState.isLoading);
    t.is(loadingState.errors, null);
});

ava('TaskItemList reducer sets payload', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: GET_TASK_ITEM_LIST_SUCCESS,
            payload: TaskItemListType
        });
    });

    const loadingState = reducer(undefined, {
        type: GET_TASK_ITEM_LIST_SUCCESS,
        payload: TaskItemListType
    });

    t.false(loadingState.isLoading);
    t.is(loadingState.errors, null);
});

ava('TaskItemList reducer handles network errors by returning error state', t => {
    const networkError = new Error('network error');
    t.notThrows(() => {
        reducer(undefined, {
            type: GET_TASK_ITEM_LIST_FAIL,
            errors: networkError
        });
    });

    const errorState = reducer(undefined, {
        type: GET_TASK_ITEM_LIST_FAIL,
        errors: networkError
    });

    t.false(errorState.isLoading);
    t.is(errorState.errors, networkError);
});
