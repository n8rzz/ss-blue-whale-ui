/* eslint-disable */
import ava from 'ava';

import {
    TaskItemCreationType,
    TaskItemType,
    TaskItemListType,
    TaskItemListStateType,
    TaskItemStateType
} from '../../../../../src/scripts/shared/domain/taskItem/types/TaskItemTypes';

import {
    VALID_TASK_ITEM_CREATION_REQUEST,
    VALID_TASK_ITEM_API_RESPONSE,
    VALID_TASK_ITEM_LIST_API_RESPONSE
} from '../../../../specHelper/mocks/taskItem/taskItemMocks';

import {
    ValidTaskItemListStateType,
    ValidTaskItemStateType
} from '../../../../specHelper/fixtures/taskItem/TaskItemTypes';

ava('TaskItemCreationType', t => {
    t.notThrows(() => TaskItemCreationType(VALID_TASK_ITEM_CREATION_REQUEST));
    t.throws(() => TaskItemCreationType(''));
});

ava('TaskItemType', t => {
    t.notThrows(() => TaskItemType(VALID_TASK_ITEM_API_RESPONSE));
    t.throws(() => TaskItemType(''));
});

ava('TaskItemListType', t => {
    t.notThrows(() => TaskItemListType(VALID_TASK_ITEM_LIST_API_RESPONSE));
    t.throws(() => TaskItemListType(''));
});

ava('ValidTaskItemListStateType', t => {
    t.notThrows(() => TaskItemListStateType.is(ValidTaskItemListStateType));
    t.throws(() => TaskItemListStateType(''));
});

ava('TaskItemStateType', t => {
    t.notThrows(() => TaskItemStateType.is(ValidTaskItemStateType));
    t.throws(() => TaskItemStateType(''));
});
