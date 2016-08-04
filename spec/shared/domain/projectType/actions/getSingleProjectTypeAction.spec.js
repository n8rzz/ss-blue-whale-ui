import ava from 'ava';
import sinon from 'sinon';
import 'sinon-as-promised';
import {
    GET_PROJECT_TYPE_START,
    GET_PROJECT_TYPE_SUCCESS,
    GET_PROJECT_TYPE_FAIL,
    getProjectType
} from '../../../../../src/scripts/shared/domain/projectType/actions/ProjectTypeActions';
import ProjectTypeRepository from '../../../../../src/scripts/shared/domain/projectType/repositories/ProjectTypeRepository';
import { ValidProjectTypeType } from '../../../../specHelper/fixtures/projectType/ProjectTypeTypes';

const PROJECT_TYPE_ID = ValidProjectTypeType.id;

ava('getProjectType throws if data is not `ProjectTypeType`', async t => {
    const dispatchSpy = sinon.spy();
    ProjectTypeRepository.getProjectType = sinon.stub().resolves();
    try {
        await getProjectType('');
    } catch (error) {
        t.notOk(dispatchSpy.calledWith({ type: GET_PROJECT_TYPE_START }));
    }
});

ava('getProjectType dispatches start action', async t => {
    const dispatchSpy = sinon.spy();
    ProjectTypeRepository.getProjectType = sinon.stub().resolves();
    await getProjectType(PROJECT_TYPE_ID)(dispatchSpy);

    t.truthy(dispatchSpy.calledWith({ type: GET_PROJECT_TYPE_START }));
});

ava('getProjectType calls the Client repository', async t => {
    const dispatchSpy = sinon.spy();
    ProjectTypeRepository.getProjectType = sinon.stub().resolves(ValidProjectTypeType);
    await getProjectType(PROJECT_TYPE_ID)(dispatchSpy);

    t.truthy(ProjectTypeRepository.getProjectType.called);
});

ava('getProjectType dispatches success action when data resolves successfully', async t => {
    const dispatchSpy = sinon.spy();
    ProjectTypeRepository.getProjectType = sinon.stub().resolves(ValidProjectTypeType);
    await getProjectType(PROJECT_TYPE_ID)(dispatchSpy);

    t.truthy(dispatchSpy.callCount === 3);
    const objectPassedToSecondDispatch = dispatchSpy.getCall(2).args[0];

    t.truthy(objectPassedToSecondDispatch.type === GET_PROJECT_TYPE_SUCCESS);
    t.truthy(objectPassedToSecondDispatch.payload === ValidProjectTypeType);
});

ava.before(() => {
    sinon.stub(global.console, 'error', ()=> {});
});

ava.after(() => {
    global.console.error.restore();
});

ava('getProjectType dispatches fail action when there is a failure', async t => {
    const errorToThrow = new Error();
    const dispatchSpy = sinon.spy();

    ProjectTypeRepository.getProjectType = sinon.stub().rejects(errorToThrow);

    try {
        await getProjectType(PROJECT_TYPE_ID)(dispatchSpy);
    } catch (e) {
        t.truthy(dispatchSpy.callCount === 2);
        const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

        t.truthy(objectPassedToSecondDispatch.type === GET_PROJECT_TYPE_FAIL);
        t.truthy(objectPassedToSecondDispatch.payload === null);
        t.truthy(objectPassedToSecondDispatch.errors === errorToThrow);
    }
});
