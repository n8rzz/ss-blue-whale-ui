import ava from 'ava';
import sinon from 'sinon';
import 'sinon-as-promised';

import {
    GET_PROJECT_LIST_START,
    GET_PROJECT_LIST_SUCCESS,
    GET_PROJECT_LIST_FAIL,
    getProjectList
} from '../../../../../src/scripts/shared/domain/project/actions/ProjectListActions';

import ProjectRepository from '../../../../../src/scripts/shared/domain/project/repositories/ProjectRepository';

import { ValidProjectList } from '../../../../specHelper/fixtures/project/ProjectFixtures';

ava('getProjectList dispatches start action', async t => {
    const dispatchSpy = sinon.spy();
    ProjectRepository.getProjectList = sinon.stub().resolves(ValidProjectList);
    await getProjectList()(dispatchSpy);

    t.truthy(dispatchSpy.calledWith({ type: GET_PROJECT_LIST_START }));
});

ava('getProjectList calls the Project repository', async t => {
    const dispatchSpy = sinon.spy();
    ProjectRepository.getProjectList = sinon.stub().resolves(ValidProjectList);
    await getProjectList()(dispatchSpy);

    t.truthy(ProjectRepository.getProjectList.called);
});

ava('getProjectList dispatches success action when data resolves successfully', async t => {
    const dispatchSpy = sinon.spy();
    ProjectRepository.getProjectList = sinon.stub().resolves(ValidProjectList);
    await getProjectList()(dispatchSpy);

    t.truthy(dispatchSpy.callCount === 2);
    const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

    t.truthy(objectPassedToSecondDispatch.type === GET_PROJECT_LIST_SUCCESS);
    t.truthy(objectPassedToSecondDispatch.payload === ValidProjectList);
});

ava.before(() => {
    sinon.stub(global.console, 'error', ()=> {});
});

ava.after(() => {
    global.console.error.restore();
});

ava('getProjectList dispatches fail action when there is a failure', async t => {
    const errorToThrow = new Error();
    const dispatchSpy = sinon.spy();

    ProjectRepository.getProjectList = sinon.stub().rejects(errorToThrow);

    try {
        await getProjectList()(dispatchSpy);
    } catch (e) {
        t.truthy(dispatchSpy.callCount === 2);
        const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

        t.truthy(objectPassedToSecondDispatch.type === GET_PROJECT_LIST_FAIL);
        t.truthy(objectPassedToSecondDispatch.payload === null);
        t.truthy(objectPassedToSecondDispatch.errors === errorToThrow);
    }
});
