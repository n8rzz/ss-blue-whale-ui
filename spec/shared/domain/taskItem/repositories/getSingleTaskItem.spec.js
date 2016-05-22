import ava from 'ava';
import nock from 'nock';

import { VALID_TASK_ITEM_API_RESPONSE } from '../../../../specHelper/mocks/taskItem/taskItemMocks';
import { TaskItemType } from '../../../../../src/scripts/shared/domain/taskItem/types/TaskItemTypes';

import TaskItemRepository from '../../../../../src/scripts/shared/domain/taskItem/repositories/TaskItemRepository';

const TASK_ITEM_ID = 1;

ava('getSingleTaskItem returns a TaskItemType', async t => {
    const getSingleTaskItem = nock(global.NOCK_SCOPE)
        .get('/taskItems/1')
        .reply(200, VALID_TASK_ITEM_API_RESPONSE);

    const response = await TaskItemRepository.getSingleTaskItem(TASK_ITEM_ID);

    t.truthy(getSingleTaskItem.isDone());
    t.truthy(response);
    t.truthy(TaskItemType.is(response));
});

ava('getSingleTaskItem completes request if there is a network error', async t => {
    const errorToThrow = new Error();
    const getSingleTaskItem = nock(global.NOCK_SCOPE)
        .get('/taskItems/1')
        .reply(500, errorToThrow);

    const error = await TaskItemRepository.getSingleTaskItem(TASK_ITEM_ID)
        .then(() => false)
        .catch(response => response.status === 500);

    t.truthy(getSingleTaskItem.isDone());
    t.truthy(error);
});
