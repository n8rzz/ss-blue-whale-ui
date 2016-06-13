import ava from 'ava';
import sinon from 'sinon';
import 'sinon-as-promised';
import {
    SAVE_PROJECT_TYPE_START,
    SAVE_PROJECT_TYPE_SUCCESS,
    SAVE_PROJECT_TYPE_FAIL,
    saveProjectType
} from '../../../../../src/scripts/shared/domain/projectType/actions/ProjectTypeActions';
import ProjectTypeRepository from '../../../../../src/scripts/shared/domain/projectType/repositories/ProjectTypeRepository';
import { ValidProjectTypeType } from '../../../../specHelper/fixtures/projectType/ProjectTypeTypes';

const PROJECT_TYPE_ID = ValidProjectTypeType.id;

ava('saveProjectType throws if data is not `ProjectTypeType`', async t => {
    const dispatchSpy = sinon.spy();
    ProjectTypeRepository.saveProjectType = sinon.stub().resolves();
    try {
        await saveProjectType('invalid paramater')(dispatchSpy);
    } catch (error) {
        t.notOk(dispatchSpy.calledWith({ type: SAVE_PROJECT_TYPE_START }));
    }
});

ava('saveProjectType dispatches start action', async t => {
    const dispatchSpy = sinon.spy();
    ProjectTypeRepository.saveProjectType = sinon.stub().resolves(ValidProjectTypeType);
    await saveProjectType(PROJECT_TYPE_ID, ValidProjectTypeType)(dispatchSpy);

    t.truthy(dispatchSpy.calledWith({ type: SAVE_PROJECT_TYPE_START }));
});

ava('saveProjectType calls the ProjectType repository', async t => {
    const dispatchSpy = sinon.spy();
    ProjectTypeRepository.saveProjectType = sinon.stub().resolves(ValidProjectTypeType);
    await saveProjectType(PROJECT_TYPE_ID, ValidProjectTypeType)(dispatchSpy);

    t.truthy(ProjectTypeRepository.saveProjectType.called);
});

ava('saveProjectType dispatches success action when data resolves successfully', async t => {
    const dispatchSpy = sinon.spy();
    ProjectTypeRepository.saveProjectType = sinon.stub().resolves(ValidProjectTypeType);
    await saveProjectType(PROJECT_TYPE_ID, ValidProjectTypeType)(dispatchSpy);

    t.truthy(dispatchSpy.callCount === 3);
    const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

    t.truthy(objectPassedToSecondDispatch.type === SAVE_PROJECT_TYPE_SUCCESS);
    t.truthy(objectPassedToSecondDispatch.payload === ValidProjectTypeType);
});

ava('saveProjectType dispatches showFlashMessageWithTimedRemoval', async t => {
    const dispatchSpy = sinon.spy();
    ProjectTypeRepository.saveProjectType = sinon.stub().resolves(ValidProjectTypeType);
    await saveProjectType(PROJECT_TYPE_ID, ValidProjectTypeType)(dispatchSpy);

    const objectPassedToSecondDispatch = dispatchSpy.getCall(2).args[0];

    t.truthy(typeof objectPassedToSecondDispatch === 'function');
});

ava.before(() => {
    sinon.stub(global.console, 'error', ()=> {});
});

ava.after(() => {
    global.console.error.restore();
});

ava('saveProjectType dispatches fail action when there is a failure', async t => {
    const errorToThrow = new Error();
    const dispatchSpy = sinon.spy();

    ProjectTypeRepository.saveProjectType = sinon.stub().rejects(errorToThrow);

    try {
        await saveProjectType(PROJECT_TYPE_ID, ValidProjectTypeType)(dispatchSpy);
    } catch (e) {
        t.truthy(dispatchSpy.callCount === 2);
        const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

        t.truthy(objectPassedToSecondDispatch.type === SAVE_PROJECT_TYPE_FAIL);
        t.truthy(objectPassedToSecondDispatch.payload === null);
        t.truthy(objectPassedToSecondDispatch.errors === errorToThrow);
    }
});
