import ava from 'ava';
import nock from 'nock';

import TaskItemRepository from '../../../../../src/scripts/shared/domain/taskItem/repositories/TaskItemRepository';

const TASK_ITEM_ID = 1;

ava('deleteTaskItem accepts and id and sends the request', async t => {
    const deleteTaskItem = nock(global.NOCK_SCOPE)
        .delete('/taskItems/1')
        .reply(204);

    const response = await TaskItemRepository.deleteTaskItem(TASK_ITEM_ID);

    t.truthy(deleteTaskItem.isDone());
    t.truthy(response);
});

ava('deleteTaskItem completes request if there is a network error', async t => {
    const errorToThrow = new Error();
    const deleteTaskItem = nock(global.NOCK_SCOPE)
        .delete('/taskItems/1')
        .reply(500, errorToThrow);

    const error = await TaskItemRepository.deleteTaskItem(TASK_ITEM_ID)
        .then(() => false)
        .catch(response => response.status === 500);

    t.truthy(deleteTaskItem.isDone());
    t.truthy(error);
});
