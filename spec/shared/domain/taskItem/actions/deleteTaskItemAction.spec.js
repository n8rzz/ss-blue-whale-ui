import ava from 'ava';
import sinon from 'sinon';
import 'sinon-as-promised';
import {
    DELETE_TASK_ITEM_START,
    DELETE_TASK_ITEM_SUCCESS,
    DELETE_TASK_ITEM_FAIL,
    deleteTaskItem
} from '../../../../../src/scripts/shared/domain/taskItem/actions/TaskItemSingleActions';
import TaskItemRepository from '../../../../../src/scripts/shared/domain/taskItem/repositories/TaskItemRepository';
import { ValidTaskItemType } from '../../../../specHelper/fixtures/taskItem/TaskItemFixtures';

const ROUTER_HISTORY_METHOD = '@@router/CALL_HISTORY_METHOD';

const TASK_ITEM_ID = ValidTaskItemType.id;

ava('deleteTaskItem dispatches start action', async t => {
    const dispatchSpy = sinon.spy();
    TaskItemRepository.deleteTaskItem = sinon.stub().resolves();
    await deleteTaskItem(TASK_ITEM_ID)(dispatchSpy);

    t.truthy(dispatchSpy.calledWith({ type: DELETE_TASK_ITEM_START }));
});

ava('deleteTaskItem calls the Client repository', async t => {
    const dispatchSpy = sinon.spy();
    TaskItemRepository.deleteTaskItem = sinon.stub().resolves();
    await deleteTaskItem(TASK_ITEM_ID)(dispatchSpy);

    t.truthy(TaskItemRepository.deleteTaskItem.called);
});

ava('deleteTaskItem dispatches success action when data resolves successfully', async t => {
    const dispatchSpy = sinon.spy();
    TaskItemRepository.deleteTaskItem = sinon.stub().resolves();
    await deleteTaskItem(TASK_ITEM_ID)(dispatchSpy);

    t.truthy(dispatchSpy.callCount === 4);
    const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

    t.truthy(objectPassedToSecondDispatch.type === DELETE_TASK_ITEM_SUCCESS);
});

ava('deleteTaskItem dispatches showFlashMessageWithTimedRemoval', async t => {
    const dispatchSpy = sinon.spy();
    TaskItemRepository.deleteTaskItem = sinon.stub().resolves();
    await deleteTaskItem(TASK_ITEM_ID)(dispatchSpy);

    const objectPassedToSecondDispatch = dispatchSpy.getCall(2).args[0];

    t.truthy(typeof objectPassedToSecondDispatch === 'function');
});

ava('deleteTaskItem dispatches react-router-redux `push` action that routes to `/taskItems` url', async t => {
    const dispatchSpy = sinon.spy();
    TaskItemRepository.deleteTaskItem = sinon.stub().resolves();
    await deleteTaskItem(TASK_ITEM_ID)(dispatchSpy);

    const objectPassedToSecondDispatch = dispatchSpy.getCall(3).args[0];

    t.truthy(objectPassedToSecondDispatch.type === ROUTER_HISTORY_METHOD);
    t.truthy(objectPassedToSecondDispatch.payload.args[0] === '/taskItems');
});

ava.before(() => {
    sinon.stub(global.console, 'error', ()=> {});
});

ava.after(() => {
    global.console.error.restore();
});

ava('deleteTaskItem dispatches fail action when there is a failure', async t => {
    const errorToThrow = new Error();
    const dispatchSpy = sinon.spy();

    TaskItemRepository.deleteTaskItem = sinon.stub().rejects(errorToThrow);

    try {
        await deleteTaskItem(TASK_ITEM_ID)(dispatchSpy);
    } catch (e) {
        t.truthy(dispatchSpy.callCount === 2);
        const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

        t.truthy(objectPassedToSecondDispatch.type === DELETE_TASK_ITEM_FAIL);
        t.truthy(objectPassedToSecondDispatch.payload === null);
        t.truthy(objectPassedToSecondDispatch.errors === errorToThrow);
    }
});
