import ava from 'ava';
import sinon from 'sinon';
import 'sinon-as-promised';

import {
    CREATE_PROJECT_START,
    CREATE_PROJECT_SUCCESS,
    CREATE_PROJECT_FAIL,
    createProject
} from '../../../../../src/scripts/shared/domain/project/actions/ProjectSingleActions';

import ProjectRepository from '../../../../../src/scripts/shared/domain/project/repositories/ProjectRepository';

import { ValidProjectCreationRequestType } from '../../../../specHelper/fixtures/project/ProjectFixtures';

const ROUTER_HISTORY_METHOD = '@@router/CALL_HISTORY_METHOD';

ava('createProject throws if data is not `ProjectCreationRequestType`', async t => {
    const dispatchSpy = sinon.spy();
    ProjectRepository.createProject = sinon.stub().resolves();
    try {
        await createProject('');
    } catch (error) {
        t.notOk(dispatchSpy.calledWith({ type: CREATE_PROJECT_START }));
    }
});

ava('createProject dispatches start action', async t => {
    const dispatchSpy = sinon.spy();
    ProjectRepository.createProject = sinon.stub().resolves();
    await createProject(ValidProjectCreationRequestType)(dispatchSpy);

    t.truthy(dispatchSpy.calledWith({ type: CREATE_PROJECT_START }));
});

ava('createProject calls the Project repository', async t => {
    const dispatchSpy = sinon.spy();
    ProjectRepository.createProject = sinon.stub().resolves(ValidProjectCreationRequestType);
    await createProject(ValidProjectCreationRequestType)(dispatchSpy);

    t.truthy(ProjectRepository.createProject.called);
});

ava('createProject dispatches success action when data resolves successfully', async t => {
    const dispatchSpy = sinon.spy();
    ProjectRepository.createProject = sinon.stub().resolves(ValidProjectCreationRequestType);
    await createProject(ValidProjectCreationRequestType)(dispatchSpy);

    t.truthy(dispatchSpy.callCount === 3);
    const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

    t.truthy(objectPassedToSecondDispatch.type === CREATE_PROJECT_SUCCESS);
    t.truthy(objectPassedToSecondDispatch.payload === ValidProjectCreationRequestType);
});

ava('createProject dispatches showFlashMessageWithTimedRemoval', async t => {
    const dispatchSpy = sinon.spy();
    ProjectRepository.createProject = sinon.stub().resolves(ValidProjectCreationRequestType);
    await createProject(ValidProjectCreationRequestType)(dispatchSpy);

    const objectPassedToSecondDispatch = dispatchSpy.getCall(2).args[0];

    t.truthy(typeof objectPassedToSecondDispatch === 'function');
});

// ava('createProject dispatches react-router-redux `push` action that routes to `/projects` url', async t => {
//     const dispatchSpy = sinon.spy();
//     ProjectRepository.createProject = sinon.stub().resolves(ValidProjectCreationRequestType);
//     await createProject(ValidProjectCreationRequestType)(dispatchSpy);
//
//     const objectPassedToSecondDispatch = dispatchSpy.getCall(3).args[0];
//
//     t.truthy(objectPassedToSecondDispatch.type === ROUTER_HISTORY_METHOD);
//     t.truthy(objectPassedToSecondDispatch.payload.args[0] === '/projects');
// });

ava.before(() => {
    sinon.stub(global.console, 'error', ()=> {});
});

ava.after(() => {
    global.console.error.restore();
});

ava('createProject dispatches fail action when there is a failure', async t => {
    const errorToThrow = new Error();
    const dispatchSpy = sinon.spy();

    ProjectRepository.createProject = sinon.stub().rejects(errorToThrow);

    try {
        await createProject(ValidProjectCreationRequestType)(dispatchSpy);
    } catch (e) {
        t.truthy(dispatchSpy.callCount === 2);
        const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

        t.truthy(objectPassedToSecondDispatch.type === CREATE_PROJECT_FAIL);
        t.truthy(objectPassedToSecondDispatch.payload === null);
        t.truthy(objectPassedToSecondDispatch.errors === errorToThrow);
    }
});
