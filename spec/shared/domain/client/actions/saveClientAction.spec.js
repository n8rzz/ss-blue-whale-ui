import ava from 'ava';
import sinon from 'sinon';
import 'sinon-as-promised';
import {
    SAVE_CLIENT_START,
    SAVE_CLIENT_SUCCESS,
    SAVE_CLIENT_FAIL,
    saveClient
} from '../../../../../src/scripts/shared/domain/client/actions/ClientSingleActions';
import ClientRepository from '../../../../../src/scripts/shared/domain/client/repositories/ClientRepository';
import { ValidClientType, ValidClientPreviewType } from '../../../../specHelper/fixtures/client/ClientTypes';

const CLIENT_ID = ValidClientPreviewType.id;

ava('saveClient throws if data is not `ClientPreviewType`', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.saveClient = sinon.stub().resolves();
    try {
        await saveClient('');
    } catch (error) {
        t.notOk(dispatchSpy.calledWith({ type: SAVE_CLIENT_START }));
    }
});

ava('saveClient dispatches start action', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.saveClient = sinon.stub().resolves();
    await saveClient(CLIENT_ID, ValidClientPreviewType)(dispatchSpy);

    t.truthy(dispatchSpy.calledWith({ type: SAVE_CLIENT_START }));
});

ava('saveClient calls the Client repository', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.saveClient = sinon.stub().resolves(ValidClientType);
    await saveClient(CLIENT_ID, ValidClientPreviewType)(dispatchSpy);

    t.truthy(ClientRepository.saveClient.called);
});

ava('saveClient dispatches success action when data resolves successfully', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.saveClient = sinon.stub().resolves(ValidClientType);
    await saveClient(CLIENT_ID, ValidClientPreviewType)(dispatchSpy);

    t.truthy(dispatchSpy.callCount === 3);
    const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

    t.truthy(objectPassedToSecondDispatch.type === SAVE_CLIENT_SUCCESS);
    t.truthy(objectPassedToSecondDispatch.payload === ValidClientType);
});

ava('saveClient dispatches showFlashMessageWithTimedRemoval', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.saveClient = sinon.stub().resolves(ValidClientType);
    await saveClient(CLIENT_ID, ValidClientPreviewType)(dispatchSpy);

    const objectPassedToSecondDispatch = dispatchSpy.getCall(2).args[0];

    t.truthy(typeof objectPassedToSecondDispatch === 'function');
});

ava.before(() => {
    sinon.stub(global.console, 'error', ()=> {});
});

ava.after(() => {
    global.console.error.restore();
});

ava('saveClient dispatches fail action when there is a failure', async t => {
    const errorToThrow = new Error();
    const dispatchSpy = sinon.spy();

    ClientRepository.saveClient = sinon.stub().rejects(errorToThrow);

    try {
        await saveClient(CLIENT_ID, ValidClientPreviewType)(dispatchSpy);
    } catch (e) {
        t.truthy(dispatchSpy.callCount === 2);
        const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

        t.truthy(objectPassedToSecondDispatch.type === SAVE_CLIENT_FAIL);
        t.truthy(objectPassedToSecondDispatch.payload === null);
        t.truthy(objectPassedToSecondDispatch.errors === errorToThrow);
    }
});
