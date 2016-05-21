import ava from 'ava';
import sinon from 'sinon';
import 'sinon-as-promised';

import {
    CREATE_TASK_ITEM_START,
    CREATE_TASK_ITEM_SUCCESS,
    CREATE_TASK_ITEM_FAIL,
    createTaskItem
} from '../../../../../src/scripts/shared/domain/taskItem/actions/TaskItemSingleActions';

import TaskItemRepository from '../../../../../src/scripts/shared/domain/taskItem/repositories/TaskItemRepository';

import { ValidTaskItemCreationType } from '../../../../specHelper/fixtures/taskItem/TaskItemFixtures';

const ROUTER_HISTORY_METHOD = '@@router/CALL_HISTORY_METHOD';

ava('createTaskItem throws if data is not `ClientCreateType`', async t => {
    const dispatchSpy = sinon.spy();
    TaskItemRepository.createTaskItem = sinon.stub().resolves();
    try {
        await createTaskItem('');
    } catch (error) {
        t.notOk(dispatchSpy.calledWith({ type: CREATE_TASK_ITEM_START }));
    }
});

ava('createTaskItem dispatches start action', async t => {
    const dispatchSpy = sinon.spy();
    TaskItemRepository.createTaskItem = sinon.stub().resolves();
    await createTaskItem(ValidTaskItemCreationType)(dispatchSpy);

    t.truthy(dispatchSpy.calledWith({ type: CREATE_TASK_ITEM_START }));
});

ava('createTaskItem calls the Client repository', async t => {
    const dispatchSpy = sinon.spy();
    TaskItemRepository.createTaskItem = sinon.stub().resolves(ValidTaskItemCreationType);
    await createTaskItem(ValidTaskItemCreationType)(dispatchSpy);

    t.truthy(TaskItemRepository.createTaskItem.called);
});

ava('createTaskItem dispatches success action when data resolves successfully', async t => {
    const dispatchSpy = sinon.spy();
    TaskItemRepository.createTaskItem = sinon.stub().resolves(ValidTaskItemCreationType);
    await createTaskItem(ValidTaskItemCreationType)(dispatchSpy);

    t.truthy(dispatchSpy.callCount === 3);
    const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

    t.truthy(objectPassedToSecondDispatch.type === CREATE_TASK_ITEM_SUCCESS);
    t.truthy(objectPassedToSecondDispatch.payload === ValidTaskItemCreationType);
});

ava('createTaskItem dispatches react-router-redux `push` action that routes to `/clients` url', async t => {
    const dispatchSpy = sinon.spy();
    TaskItemRepository.createTaskItem = sinon.stub().resolves(ValidTaskItemCreationType);
    await createTaskItem(ValidTaskItemCreationType)(dispatchSpy);

    const objectPassedToSecondDispatch = dispatchSpy.getCall(2).args[0];

    t.truthy(objectPassedToSecondDispatch.type === ROUTER_HISTORY_METHOD);
    t.truthy(objectPassedToSecondDispatch.payload.args[0] === '/clients');
});

ava.before(() => {
    sinon.stub(global.console, 'error', ()=> {});
});

ava.after(() => {
    global.console.error.restore();
});

ava('createTaskItem dispatches fail action when there is a failure', async t => {
    const errorToThrow = new Error();
    const dispatchSpy = sinon.spy();

    TaskItemRepository.createTaskItem = sinon.stub().rejects(errorToThrow);

    try {
        await createTaskItem(ValidTaskItemCreationType)(dispatchSpy);
    } catch (e) {
        t.truthy(dispatchSpy.callCount === 2);
        const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

        t.truthy(objectPassedToSecondDispatch.type === CREATE_TASK_ITEM_FAIL);
        t.truthy(objectPassedToSecondDispatch.payload === null);
        t.truthy(objectPassedToSecondDispatch.errors === errorToThrow);
    }
});
