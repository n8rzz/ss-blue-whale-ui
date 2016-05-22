import ava from 'ava';
import nock from 'nock';

import {
    VALID_TASK_ITEM_CREATION_REQUEST,
    VALID_TASK_ITEM_API_RESPONSE
} from '../../../../specHelper/mocks/taskItem/taskItemMocks';
import {
    TaskItemCreationType,
    TaskItemType
} from '../../../../../src/scripts/shared/domain/taskItem/types/TaskItemTypes';

import TaskItemRepository from '../../../../../src/scripts/shared/domain/taskItem/repositories/TaskItemRepository';

ava('createTaskItem returns a TaskItemType', async t => {
    const createTaskItem = nock(global.NOCK_SCOPE)
        .post('/taskItems', TaskItemCreationType)
        .reply(200, VALID_TASK_ITEM_API_RESPONSE);

    const response = await TaskItemRepository.createTaskItem(VALID_TASK_ITEM_CREATION_REQUEST);

    t.truthy(createTaskItem.isDone());
    t.truthy(response);
    t.truthy(TaskItemType.is(response));
});

ava('createTaskItem completes request if there is a network error', async t => {
    const errorToThrow = new Error();
    const createTaskItem = nock(global.NOCK_SCOPE)
        .post('/taskItems')
        .reply(500, errorToThrow);

    const error = await TaskItemRepository.createTaskItem(VALID_TASK_ITEM_CREATION_REQUEST)
        .then(() => false)
        .catch(response => response.status === 500);

    t.truthy(createTaskItem.isDone());
    t.truthy(error);
});
