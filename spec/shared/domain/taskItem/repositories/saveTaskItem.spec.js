import ava from 'ava';
import nock from 'nock';
import {
    VALID_TASK_ITEM_REQUEST,
    VALID_TASK_ITEM_API_RESPONSE
} from '../../../../specHelper/mocks/taskItem/taskItemMocks';
import { TaskItemType } from '../../../../../src/scripts/shared/domain/taskItem/types/TaskItemTypes';
import TaskItemRepository from '../../../../../src/scripts/shared/domain/taskItem/repositories/TaskItemRepository';

const CLIENT_ID = 1;

ava('saveClient returns a TaskItemType', async t => {
    const saveClient = nock(global.NOCK_SCOPE)
        .put('/taskItems/1')
        .reply(200, VALID_TASK_ITEM_API_RESPONSE);

    const response = await TaskItemRepository.saveClient(CLIENT_ID, VALID_TASK_ITEM_REQUEST);

    t.truthy(saveClient.isDone());
    t.truthy(response);
    t.truthy(TaskItemType.is(response));
});

ava('saveClient completes request if there is a network error', async t => {
    const errorToThrow = new Error();
    const saveClient = nock(global.NOCK_SCOPE)
        .put('/taskItems/1')
        .reply(500, errorToThrow);

    const error = await TaskItemRepository.saveClient(CLIENT_ID, VALID_TASK_ITEM_REQUEST)
        .then(() => false)
        .catch(response => response.status === 500);

    t.truthy(saveClient.isDone());
    t.truthy(error);
});
