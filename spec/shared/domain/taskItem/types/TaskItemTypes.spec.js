/* eslint-disable */
import ava from 'ava';

import {
    TaskItemType,
    TaskItemListType,
    TaskItemListStateType
} from '../../../../../src/scripts/shared/domain/taskItem/types/TaskItemTypes';

import {
    VALID_TASK_ITEM_API_RESPONSE,
    VALID_TASK_ITEM_LIST_API_RESPONSE
} from '../../../../specHelper/mocks/taskItem/taskItemMocks';

import { ValidTaskItemListStateType } from '../../../../specHelper/fixtures/taskItem/TaskItemTypes';

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
