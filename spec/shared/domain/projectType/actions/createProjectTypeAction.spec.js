import ava from 'ava';
import sinon from 'sinon';
import 'sinon-as-promised';

import {
    CREATE_PROJECT_TYPE_START,
    CREATE_PROJECT_TYPE_SUCCESS,
    CREATE_PROJECT_TYPE_FAIL,
    createProjectType
} from '../../../../../src/scripts/shared/domain/projectType/actions/ProjectTypeActions';

import ProjectTypeRepository from '../../../../../src/scripts/shared/domain/projectType/repositories/ProjectTypeRepository';

import { ValidProjectTypeCreationType } from '../../../../specHelper/fixtures/projectType/ProjectTypeTypes';

const ROUTER_HISTORY_METHOD = '@@router/CALL_HISTORY_METHOD';

ava('createProjectType throws if data is not `ProjectTypeCreationType`', async t => {
    const dispatchSpy = sinon.spy();
    ProjectTypeRepository.createProjectType = sinon.stub().resolves();
    try {
        await createProjectType('');
    } catch (error) {
        t.notOk(dispatchSpy.calledWith({ type: CREATE_PROJECT_TYPE_START }));
    }
});

ava('createProjectType dispatches start action', async t => {
    const dispatchSpy = sinon.spy();
    ProjectTypeRepository.createProjectType = sinon.stub().resolves();
    await createProjectType(ValidProjectTypeCreationType)(dispatchSpy);

    t.truthy(dispatchSpy.calledWith({ type: CREATE_PROJECT_TYPE_START }));
});

ava('createProjectType calls the ProjectType repository', async t => {
    const dispatchSpy = sinon.spy();
    ProjectTypeRepository.createProjectType = sinon.stub().resolves(ValidProjectTypeCreationType);
    await createProjectType(ValidProjectTypeCreationType)(dispatchSpy);

    t.truthy(ProjectTypeRepository.createProjectType.called);
});

ava('createProjectType dispatches success action when data resolves successfully', async t => {
    const dispatchSpy = sinon.spy();
    ProjectTypeRepository.createProjectType = sinon.stub().resolves(ValidProjectTypeCreationType);
    await createProjectType(ValidProjectTypeCreationType)(dispatchSpy);

    t.truthy(dispatchSpy.callCount === 3);
    const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

    t.truthy(objectPassedToSecondDispatch.type === CREATE_PROJECT_TYPE_SUCCESS);
    t.truthy(objectPassedToSecondDispatch.payload === ValidProjectTypeCreationType);
});

ava('createProjectType dispatches react-router-redux `push` action that routes to `/projectTypes` url', async t => {
    const dispatchSpy = sinon.spy();
    ProjectTypeRepository.createProjectType = sinon.stub().resolves(ValidProjectTypeCreationType);
    await createProjectType(ValidProjectTypeCreationType)(dispatchSpy);

    const objectPassedToSecondDispatch = dispatchSpy.getCall(2).args[0];

    t.truthy(objectPassedToSecondDispatch.type === ROUTER_HISTORY_METHOD);
    t.truthy(objectPassedToSecondDispatch.payload.args[0] === '/projectTypes');
});

ava.before(() => {
    sinon.stub(global.console, 'error', ()=> {});
});

ava.after(() => {
    global.console.error.restore();
});

ava('createProjectType dispatches fail action when there is a failure', async t => {
    const errorToThrow = new Error();
    const dispatchSpy = sinon.spy();

    ProjectTypeRepository.createProjectType = sinon.stub().rejects(errorToThrow);

    try {
        await createProjectType(ValidProjectTypeCreationType)(dispatchSpy);
    } catch (e) {
        t.truthy(dispatchSpy.callCount === 2);
        const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

        t.truthy(objectPassedToSecondDispatch.type === CREATE_PROJECT_TYPE_FAIL);
        t.truthy(objectPassedToSecondDispatch.payload === null);
        t.truthy(objectPassedToSecondDispatch.errors === errorToThrow);
    }
});
