import ava from 'ava';
import nock from 'nock';

import { VALID_TASK_ITEM_LIST_API_RESPONSE } from '../../../../specHelper/mocks/taskItem/taskItemMocks';
import { TaskItemListType } from '../../../../../src/scripts/shared/domain/taskItem/types/TaskItemTypes';

import TaskItemRepository from '../../../../../src/scripts/shared/domain/taskItem/repositories/TaskItemRepository';

ava('getTaskItemList returns a TaskItemListType', async t => {
    const getTaskItemList = nock(global.NOCK_SCOPE)
        .get('/taskItems')
        .reply(200, VALID_TASK_ITEM_LIST_API_RESPONSE);

    const response = await TaskItemRepository.getTaskItemList();

    t.ok(getTaskItemList.isDone());
    t.ok(response);
    t.ok(TaskItemListType.is(response));
});

ava('getTaskItemList completes request if there is a network error', async t => {
    const errorToThrow = new Error();
    const getTaskItemList = nock(global.NOCK_SCOPE)
        .get('/taskItems')
        .reply(500, errorToThrow);

    const error = await TaskItemRepository.getTaskItemList()
        .then(() => false)
        .catch(response => response.status === 500);

    t.ok(getTaskItemList.isDone());
    t.ok(error);
});
