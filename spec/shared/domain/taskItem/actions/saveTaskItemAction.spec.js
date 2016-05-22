import ava from 'ava';
import sinon from 'sinon';
import 'sinon-as-promised';
import {
    SAVE_TASK_ITEM_START,
    SAVE_TASK_ITEM_SUCCESS,
    SAVE_TASK_ITEM_FAIL,
    saveTaskItem
} from '../../../../../src/scripts/shared/domain/taskItem/actions/TaskItemSingleActions';
import TaskItemRepository from '../../../../../src/scripts/shared/domain/taskItem/repositories/TaskItemRepository';
import { ValidTaskItemType } from '../../../../specHelper/fixtures/taskItem/TaskItemFixtures';

const TASK_ITEM_ID = ValidTaskItemType.id;

ava('saveTaskItem throws if data is not `ClientPreviewType`', async t => {
    const dispatchSpy = sinon.spy();
    TaskItemRepository.saveTaskItem = sinon.stub().resolves();
    try {
        await saveTaskItem('');
    } catch (error) {
        t.notOk(dispatchSpy.calledWith({ type: SAVE_TASK_ITEM_START }));
    }
});

ava('saveTaskItem dispatches start action', async t => {
    const dispatchSpy = sinon.spy();
    TaskItemRepository.saveTaskItem = sinon.stub().resolves();
    await saveTaskItem(TASK_ITEM_ID, ValidTaskItemType)(dispatchSpy);

    t.truthy(dispatchSpy.calledWith({ type: SAVE_TASK_ITEM_START }));
});

ava('saveTaskItem calls the Client repository', async t => {
    const dispatchSpy = sinon.spy();
    TaskItemRepository.saveTaskItem = sinon.stub().resolves(ValidTaskItemType);
    await saveTaskItem(TASK_ITEM_ID, ValidTaskItemType)(dispatchSpy);

    t.truthy(TaskItemRepository.saveTaskItem.called);
});

ava('saveTaskItem dispatches success action when data resolves successfully', async t => {
    const dispatchSpy = sinon.spy();
    TaskItemRepository.saveTaskItem = sinon.stub().resolves(ValidTaskItemType);
    await saveTaskItem(TASK_ITEM_ID, ValidTaskItemType)(dispatchSpy);

    t.truthy(dispatchSpy.callCount === 2);
    const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

    t.truthy(objectPassedToSecondDispatch.type === SAVE_TASK_ITEM_SUCCESS);
    t.truthy(objectPassedToSecondDispatch.payload === ValidTaskItemType);
});

ava.before(() => {
    sinon.stub(global.console, 'error', ()=> {});
});

ava.after(() => {
    global.console.error.restore();
});

ava('saveTaskItem dispatches fail action when there is a failure', async t => {
    const errorToThrow = new Error();
    const dispatchSpy = sinon.spy();

    TaskItemRepository.saveTaskItem = sinon.stub().rejects(errorToThrow);

    try {
        await saveTaskItem(TASK_ITEM_ID, ValidTaskItemType)(dispatchSpy);
    } catch (e) {
        t.truthy(dispatchSpy.callCount === 2);
        const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

        t.truthy(objectPassedToSecondDispatch.type === SAVE_TASK_ITEM_FAIL);
        t.truthy(objectPassedToSecondDispatch.payload === null);
        t.truthy(objectPassedToSecondDispatch.errors === errorToThrow);
    }
});
