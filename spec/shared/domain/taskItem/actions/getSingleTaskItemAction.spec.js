import ava from 'ava';
import sinon from 'sinon';
import 'sinon-as-promised';
import {
    GET_SINGLE_TASK_ITEM_START,
    GET_SINGLE_TASK_ITEM_SUCCESS,
    GET_SINGLE_TASK_ITEM_FAIL,
    getSingleTaskItem
} from '../../../../../src/scripts/shared/domain/taskItem/actions/TaskItemSingleActions';
import TaskItemRepository from '../../../../../src/scripts/shared/domain/taskItem/repositories/TaskItemRepository';
import { ValidTaskItemType } from '../../../../specHelper/fixtures/taskItem/TaskItemTypes';

ava('getSingleTaskItem throws if data is not `TaskItemType`', async t => {
    const dispatchSpy = sinon.spy();
    TaskItemRepository.getSingleTaskItem = sinon.stub().resolves();
    try {
        await getSingleTaskItem('');
    } catch (error) {
        t.notOk(dispatchSpy.calledWith({ type: GET_SINGLE_TASK_ITEM_START }));
    }
});

ava('getSingleTaskItem dispatches start action', async t => {
    const dispatchSpy = sinon.spy();
    TaskItemRepository.getSingleTaskItem = sinon.stub().resolves();
    await getSingleTaskItem(ValidTaskItemType.id)(dispatchSpy);

    t.truthy(dispatchSpy.calledWith({ type: GET_SINGLE_TASK_ITEM_START }));
});

ava('getSingleTaskItem calls the TaskItem repository', async t => {
    const dispatchSpy = sinon.spy();
    TaskItemRepository.getSingleTaskItem = sinon.stub().resolves(ValidTaskItemType);
    await getSingleTaskItem(ValidTaskItemType.id)(dispatchSpy);

    t.truthy(TaskItemRepository.getSingleTaskItem.called);
});

ava('getSingleTaskItem dispatches success action when data resolves successfully', async t => {
    const dispatchSpy = sinon.spy();
    TaskItemRepository.getSingleTaskItem = sinon.stub().resolves(ValidTaskItemType);
    await getSingleTaskItem(ValidTaskItemType.id)(dispatchSpy);

    t.truthy(dispatchSpy.callCount === 2);
    const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

    t.truthy(objectPassedToSecondDispatch.type === GET_SINGLE_TASK_ITEM_SUCCESS);
    t.truthy(objectPassedToSecondDispatch.payload === ValidTaskItemType);
});

ava.before(() => {
    sinon.stub(global.console, 'error', ()=> {});
});

ava.after(() => {
    global.console.error.restore();
});

ava('getSingleTaskItem dispatches fail action when there is a failure', async t => {
    const errorToThrow = new Error();
    const dispatchSpy = sinon.spy();

    TaskItemRepository.getSingleTaskItem = sinon.stub().rejects(errorToThrow);

    try {
        await getSingleTaskItem(ValidTaskItemType.id)(dispatchSpy);
    } catch (e) {
        t.truthy(dispatchSpy.callCount === 2);
        const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

        t.truthy(objectPassedToSecondDispatch.type === GET_SINGLE_TASK_ITEM_FAIL);
        t.truthy(objectPassedToSecondDispatch.payload === null);
        t.truthy(objectPassedToSecondDispatch.errors === errorToThrow);
    }
});
