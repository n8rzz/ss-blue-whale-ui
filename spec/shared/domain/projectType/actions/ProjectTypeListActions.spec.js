import ava from 'ava';
import sinon from 'sinon';
import 'sinon-as-promised';

import {
    GET_PROJECT_TYPE_LIST_START,
    GET_PROJECT_TYPE_LIST_SUCCESS,
    GET_PROJECT_TYPE_LIST_FAIL,
    getProjectTypeList
} from '../../../../../src/scripts/shared/domain/projectType/actions/ProjectTypeListActions';

import ProjectTypeRepository from '../../../../../src/scripts/shared/domain/projectType/repositories/ProjectTypeRepository';

import { ValidProjectTypeList } from '../../../../specHelper/fixtures/projectType/ProjectTypeTypes';

ava('getProjectTypeList dispatches start action', async t => {
    const dispatchSpy = sinon.spy();
    ProjectTypeRepository.getProjectTypeList = sinon.stub().resolves();
    await getProjectTypeList()(dispatchSpy);

    t.ok(dispatchSpy.calledWith({ type: GET_PROJECT_TYPE_LIST_START }));
});

ava('getProjectTypeList calls the hierarchies repository', async t => {
    const dispatchSpy = sinon.spy();
    ProjectTypeRepository.getProjectTypeList = sinon.stub().resolves(ValidProjectTypeList);
    await getProjectTypeList()(dispatchSpy);

    t.ok(ProjectTypeRepository.getProjectTypeList.called);
});

ava('getProjectTypeList dispatches success action when data resolves successfully', async t => {
    const dispatchSpy = sinon.spy();
    ProjectTypeRepository.getProjectTypeList = sinon.stub().resolves(ValidProjectTypeList);
    await getProjectTypeList()(dispatchSpy);

    t.ok(dispatchSpy.callCount === 2);
    const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

    t.ok(objectPassedToSecondDispatch.type === GET_PROJECT_TYPE_LIST_SUCCESS);
    t.ok(objectPassedToSecondDispatch.payload === ValidProjectTypeList);
});

ava.before(() => {
    sinon.stub(global.console, 'error', ()=> {});
});

ava.after(() => {
    global.console.error.restore();
});

ava('getProjectTypeList dispatches fail action when there is a failure', async t => {
    const errorToThrow = new Error();
    const dispatchSpy = sinon.spy();

    ProjectTypeRepository.getProjectTypeList = sinon.stub().rejects(errorToThrow);

    try {
        await getProjectTypeList()(dispatchSpy);
    } catch (e) {
        t.ok(dispatchSpy.callCount === 2);
        const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

        t.ok(objectPassedToSecondDispatch.type === GET_PROJECT_TYPE_LIST_FAIL);
        t.ok(objectPassedToSecondDispatch.payload === null);
        t.ok(objectPassedToSecondDispatch.errors === errorToThrow);
    }
});
