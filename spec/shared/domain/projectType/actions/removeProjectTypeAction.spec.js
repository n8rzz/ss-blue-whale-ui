import ava from 'ava';
import sinon from 'sinon';
import 'sinon-as-promised';

import {
    REMOVE_PROJECT_TYPE_START,
    REMOVE_PROJECT_TYPE_SUCCESS,
    REMOVE_PROJECT_TYPE_FAIL,
    removeProjectType
} from '../../../../../src/scripts/shared/domain/projectType/actions/ProjectTypeActions';

import ProjectTypeRepository from '../../../../../src/scripts/shared/domain/projectType/repositories/ProjectTypeRepository';

import { ValidProjectTypeType } from '../../../../specHelper/fixtures/projectType/ProjectTypeTypes';

const ROUTER_HISTORY_METHOD = '@@router/CALL_HISTORY_METHOD';

const PROJECT_TYPE_ID = ValidProjectTypeType.id;

ava('removeProjectType dispatches start action', async t => {
    const dispatchSpy = sinon.spy();
    ProjectTypeRepository.removeProjectType = sinon.stub().resolves();
    await removeProjectType(PROJECT_TYPE_ID)(dispatchSpy);

    t.ok(dispatchSpy.calledWith({ type: REMOVE_PROJECT_TYPE_START }));
});

ava('removeProjectType calls the ProjectType repository', async t => {
    const dispatchSpy = sinon.spy();
    ProjectTypeRepository.removeProjectType = sinon.stub().resolves();
    await removeProjectType(PROJECT_TYPE_ID)(dispatchSpy);

    t.ok(ProjectTypeRepository.removeProjectType.called);
});

ava('removeProjectType dispatches success action when data resolves successfully', async t => {
    const dispatchSpy = sinon.spy();
    ProjectTypeRepository.removeProjectType = sinon.stub().resolves();
    await removeProjectType(PROJECT_TYPE_ID)(dispatchSpy);

    t.ok(dispatchSpy.callCount === 3);
    const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

    t.ok(objectPassedToSecondDispatch.type === REMOVE_PROJECT_TYPE_SUCCESS);
});

ava('removeProjectType dispatches success action with a `null` payload', async t => {
    const dispatchSpy = sinon.spy();
    ProjectTypeRepository.removeProjectType = sinon.stub().resolves();
    await removeProjectType(PROJECT_TYPE_ID)(dispatchSpy);

    const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

    t.ok(objectPassedToSecondDispatch.payload === null);
});

ava('removeProjectType dispatches react-router-redux `push` action that routes to `/projectTypes` url', async t => {
    const dispatchSpy = sinon.spy();
    ProjectTypeRepository.removeProjectType = sinon.stub().resolves();
    await removeProjectType(PROJECT_TYPE_ID)(dispatchSpy);

    const objectPassedToSecondDispatch = dispatchSpy.getCall(2).args[0];

    t.ok(objectPassedToSecondDispatch.type === ROUTER_HISTORY_METHOD);
    t.ok(objectPassedToSecondDispatch.payload.args[0] === '/projectTypes');
});

ava.before(() => {
    sinon.stub(global.console, 'error', ()=> {});
});

ava.after(() => {
    global.console.error.restore();
});

ava('removeProjectType dispatches fail action when there is a failure', async t => {
    const errorToThrow = new Error();
    const dispatchSpy = sinon.spy();

    ProjectTypeRepository.removeProjectType = sinon.stub().rejects(errorToThrow);

    try {
        await removeProjectType(ValidProjectTypeType)(dispatchSpy);
    } catch (e) {
        t.ok(dispatchSpy.callCount === 2);
        const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

        t.ok(objectPassedToSecondDispatch.type === REMOVE_PROJECT_TYPE_FAIL);
        t.ok(objectPassedToSecondDispatch.payload === null);
        t.ok(objectPassedToSecondDispatch.errors === errorToThrow);
    }
});
