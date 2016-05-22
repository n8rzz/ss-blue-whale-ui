import ava from 'ava';
import nock from 'nock';
import {
    VALID_TASK_ITEM_REQUEST,
    VALID_TASK_ITEM_API_RESPONSE
} from '../../../../specHelper/mocks/taskItem/taskItemMocks';
import { TaskItemType } from '../../../../../src/scripts/shared/domain/taskItem/types/TaskItemTypes';
import TaskItemRepository from '../../../../../src/scripts/shared/domain/taskItem/repositories/TaskItemRepository';

const TASK_ITEM_ID = 1;

ava('saveTaskItem returns a TaskItemType', async t => {
    const saveTaskItem = nock(global.NOCK_SCOPE)
        .put('/taskItems/1')
        .reply(200, VALID_TASK_ITEM_API_RESPONSE);

    const response = await TaskItemRepository.saveTaskItem(TASK_ITEM_ID, VALID_TASK_ITEM_REQUEST);

    t.truthy(saveTaskItem.isDone());
    t.truthy(response);
    t.truthy(TaskItemType.is(response));
});

ava('saveTaskItem completes request if there is a network error', async t => {
    const errorToThrow = new Error();
    const saveTaskItem = nock(global.NOCK_SCOPE)
        .put('/taskItems/1')
        .reply(500, errorToThrow);

    const error = await TaskItemRepository.saveTaskItem(TASK_ITEM_ID, VALID_TASK_ITEM_REQUEST)
        .then(() => false)
        .catch(response => response.status === 500);

    t.truthy(saveTaskItem.isDone());
    t.truthy(error);
});
