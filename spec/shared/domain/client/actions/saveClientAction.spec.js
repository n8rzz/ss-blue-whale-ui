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
import { ValidClientType } from '../../../../specHelper/fixtures/client/ClientTypes';

ava('saveClient throws if data is not `ClientType`', async t => {
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
    await saveClient(ValidClientType.id, ValidClientType)(dispatchSpy);

    t.ok(dispatchSpy.calledWith({ type: SAVE_CLIENT_START }));
});

ava('saveClient calls the hierarchies repository', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.saveClient = sinon.stub().resolves(ValidClientType);
    await saveClient(ValidClientType.id, ValidClientType)(dispatchSpy);

    t.ok(ClientRepository.saveClient.called);
});

ava('saveClient dispatches success action when data resolves successfully', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.saveClient = sinon.stub().resolves(ValidClientType);
    await saveClient(ValidClientType.id, ValidClientType)(dispatchSpy);

    t.ok(dispatchSpy.callCount === 2);
    const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

    t.ok(objectPassedToSecondDispatch.type === SAVE_CLIENT_SUCCESS);
    t.ok(objectPassedToSecondDispatch.payload === ValidClientType);
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
        await saveClient(ValidClientType.id, ValidClientType)(dispatchSpy);
    } catch (e) {
        t.ok(dispatchSpy.callCount === 2);
        const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

        t.ok(objectPassedToSecondDispatch.type === SAVE_CLIENT_FAIL);
        t.ok(objectPassedToSecondDispatch.payload === null);
        t.ok(objectPassedToSecondDispatch.errors === errorToThrow);
    }
});
