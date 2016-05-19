import ava from 'ava';
import sinon from 'sinon';
import 'sinon-as-promised';

import {
    GET_TASK_ITEM_LIST_START,
    GET_TASK_ITEM_LIST_SUCCESS,
    GET_TASK_ITEM_LIST_FAIL,
    getTaskItemList
} from '../../../../../src/scripts/shared/domain/taskItem/actions/TaskItemListActions';

import TaskItemRepository from '../../../../../src/scripts/shared/domain/taskItem/repositories/TaskItemRepository';

import { ValidTaskItemList } from '../../../../specHelper/fixtures/taskItem/TaskItemTypes';

ava('getTaskItemList dispatches start action', async t => {
    const dispatchSpy = sinon.spy();
    TaskItemRepository.getTaskItemList = sinon.stub().resolves();
    await getTaskItemList()(dispatchSpy);

    t.truthy(dispatchSpy.calledWith({ type: GET_TASK_ITEM_LIST_START }));
});

ava('getTaskItemList calls the Client repository', async t => {
    const dispatchSpy = sinon.spy();
    TaskItemRepository.getTaskItemList = sinon.stub().resolves(ValidTaskItemList);
    await getTaskItemList()(dispatchSpy);

    t.truthy(TaskItemRepository.getTaskItemList.called);
});

ava('getTaskItemList dispatches success action when data resolves successfully', async t => {
    const dispatchSpy = sinon.spy();
    TaskItemRepository.getTaskItemList = sinon.stub().resolves(ValidTaskItemList);
    await getTaskItemList()(dispatchSpy);

    t.truthy(dispatchSpy.callCount === 2);
    const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

    t.truthy(objectPassedToSecondDispatch.type === GET_TASK_ITEM_LIST_SUCCESS);
    t.truthy(objectPassedToSecondDispatch.payload === ValidTaskItemList);
});

ava.before(() => {
    sinon.stub(global.console, 'error', ()=> {});
});

ava.after(() => {
    global.console.error.restore();
});

ava('getTaskItemList dispatches fail action when there is a failure', async t => {
    const errorToThrow = new Error();
    const dispatchSpy = sinon.spy();

    TaskItemRepository.getTaskItemList = sinon.stub().rejects(errorToThrow);

    try {
        await getTaskItemList()(dispatchSpy);
    } catch (e) {
        t.truthy(dispatchSpy.callCount === 2);
        const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

        t.truthy(objectPassedToSecondDispatch.type === GET_TASK_ITEM_LIST_FAIL);
        t.truthy(objectPassedToSecondDispatch.payload === null);
        t.truthy(objectPassedToSecondDispatch.errors === errorToThrow);
    }
});
