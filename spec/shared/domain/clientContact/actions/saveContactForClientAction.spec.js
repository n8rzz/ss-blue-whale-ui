import ava from 'ava';
import sinon from 'sinon';
import 'sinon-as-promised';

import {
    SAVE_CONTACT_FOR_CLIENT_START,
    SAVE_CONTACT_FOR_CLIENT_SUCCESS,
    SAVE_CONTACT_FOR_CLIENT_FAIL,
    saveContactForClient
} from '../../../../../src/scripts/shared/domain/clientContact/actions/ClientContactSingleActions';
import ClientRepository from '../../../../../src/scripts/shared/domain/clientContact/repositories/ClientContactRepository';
import {
    ValidClientContactType
} from '../../../../specHelper/fixtures/clientContact/ClientContactFixtures';

const CLIENT_ID = 1;

ava('saveContactForClient throws if data is not `ClientContactType`', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.saveContactForClient = sinon.stub().resolves();
    try {
        await saveContactForClient('');
    } catch (error) {
        t.notOk(dispatchSpy.calledWith({ type: SAVE_CONTACT_FOR_CLIENT_START }));
    }
});

ava('saveContactForClient dispatches start action', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.saveContactForClient = sinon.stub().resolves(ValidClientContactType);
    await saveContactForClient(CLIENT_ID, ValidClientContactType)(dispatchSpy);

    t.truthy(dispatchSpy.calledWith({ type: SAVE_CONTACT_FOR_CLIENT_START }));
});

ava('saveContactForClient calls the ClientContact repository', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.saveContactForClient = sinon.stub().resolves(ValidClientContactType);
    await saveContactForClient(CLIENT_ID, ValidClientContactType)(dispatchSpy);

    t.truthy(ClientRepository.saveContactForClient.called);
});

ava('saveContactForClient dispatches success action when data resolves successfully', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.saveContactForClient = sinon.stub().resolves(ValidClientContactType);
    await saveContactForClient(CLIENT_ID, ValidClientContactType)(dispatchSpy);

    t.truthy(dispatchSpy.callCount === 3);
    const objectPassedToSecondDispatch = dispatchSpy.getCall(2).args[0];

    t.truthy(objectPassedToSecondDispatch.type === SAVE_CONTACT_FOR_CLIENT_SUCCESS);
    t.truthy(objectPassedToSecondDispatch.payload === ValidClientContactType);
});

ava.before(() => {
    sinon.stub(global.console, 'error', ()=> {});
});

ava.after(() => {
    global.console.error.restore();
});

ava('saveContactForClient dispatches fail action when there is a failure', async t => {
    const errorToThrow = new Error();
    const dispatchSpy = sinon.spy();

    ClientRepository.saveContactForClient = sinon.stub().rejects(errorToThrow);

    try {
        await saveContactForClient(CLIENT_ID, ValidClientContactType)(dispatchSpy);
    } catch (e) {
        t.truthy(dispatchSpy.callCount === 2);
        const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

        t.truthy(objectPassedToSecondDispatch.type === SAVE_CONTACT_FOR_CLIENT_FAIL);
        t.truthy(objectPassedToSecondDispatch.payload === null);
        t.truthy(objectPassedToSecondDispatch.errors === errorToThrow);
    }
});
