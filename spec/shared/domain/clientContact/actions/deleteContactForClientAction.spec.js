import ava from 'ava';
import sinon from 'sinon';
import 'sinon-as-promised';

import {
    DELETE_CONTACT_FOR_CLIENT_START,
    DELETE_CONTACT_FOR_CLIENT_SUCCESS,
    DELETE_CONTACT_FOR_CLIENT_FAIL,
    deleteContactForClient
} from '../../../../../src/scripts/shared/domain/clientContact/actions/ClientContactSingleActions';
import ClientRepository from '../../../../../src/scripts/shared/domain/clientContact/repositories/ClientContactRepository';
import {
    ValidClientContactType
} from '../../../../specHelper/fixtures/clientContact/ClientContactFixtures';

const CLIENT_ID = ValidClientContactType.client_id;
const CLIENT_CONTACT_ID = ValidClientContactType.id;

ava('deleteContactForClient dispatches start action', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.deleteContactForClient = sinon.stub().resolves();
    await deleteContactForClient(CLIENT_ID, CLIENT_CONTACT_ID)(dispatchSpy);

    t.ok(dispatchSpy.calledWith({ type: DELETE_CONTACT_FOR_CLIENT_START }));
});

ava('deleteContactForClient calls the ClientContact repository', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.deleteContactForClient = sinon.stub().resolves();
    await deleteContactForClient(CLIENT_ID, CLIENT_CONTACT_ID)(dispatchSpy);

    t.ok(ClientRepository.deleteContactForClient.called);
});

ava('deleteContactForClient dispatches success action when data resolves successfully', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.deleteContactForClient = sinon.stub().resolves();
    await deleteContactForClient(CLIENT_ID, CLIENT_CONTACT_ID)(dispatchSpy);

    t.ok(dispatchSpy.callCount === 3);
    const objectPassedToSecondDispatch = dispatchSpy.getCall(2).args[0];

    t.ok(objectPassedToSecondDispatch.type === DELETE_CONTACT_FOR_CLIENT_SUCCESS);
});

ava.before(() => {
    sinon.stub(global.console, 'error', () => {});
});

ava.after(() => {
    global.console.error.restore();
});

ava('deleteContactForClient dispatches fail action when there is a failure', async t => {
    const errorToThrow = new Error();
    const dispatchSpy = sinon.spy();

    ClientRepository.deleteContactForClient = sinon.stub().rejects(errorToThrow);

    try {
        await deleteContactForClient(CLIENT_ID, CLIENT_CONTACT_ID)(dispatchSpy);
    } catch (e) {
        t.ok(dispatchSpy.callCount === 2);
        const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

        t.ok(objectPassedToSecondDispatch.type === DELETE_CONTACT_FOR_CLIENT_FAIL);
        t.ok(objectPassedToSecondDispatch.payload === null);
        t.ok(objectPassedToSecondDispatch.errors === errorToThrow);
    }
});
