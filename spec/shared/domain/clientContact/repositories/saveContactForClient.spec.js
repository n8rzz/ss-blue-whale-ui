import ava from 'ava';
import nock from 'nock';

import {
    VALID_CLIENT_CONTACT_REQUEST_TYPE,
    VALID_CLIENT_CONTACT_API_RESPONSE
} from '../../../../specHelper/mocks/clientContact/clientContactMocks';
import {
    ClientContactType
} from '../../../../../src/scripts/shared/domain/clientContact/types/ClientContactTypes';

import ClientContactRepository from '../../../../../src/scripts/shared/domain/clientContact/repositories/ClientContactRepository';

const CLIENT_CONTACT_ID = 1;

ava('saveContactForClient returns a ClientType', async t => {
    const saveContactForClient = nock(global.NOCK_SCOPE)
        .put('/clientContacts/1', VALID_CLIENT_CONTACT_REQUEST_TYPE)
        .reply(200, VALID_CLIENT_CONTACT_API_RESPONSE);

    const response = await ClientContactRepository.saveContactForClient(CLIENT_CONTACT_ID, VALID_CLIENT_CONTACT_REQUEST_TYPE);

    t.ok(saveContactForClient.isDone());
    t.ok(response);
    t.ok(ClientContactType.is(response));
});

ava('saveContactForClient completes request if there is a network error', async t => {
    const errorToThrow = new Error();
    const saveContactForClient = nock(global.NOCK_SCOPE)
        .put('/clientContacts/1', VALID_CLIENT_CONTACT_REQUEST_TYPE)
        .reply(500, errorToThrow);

    const error = await ClientContactRepository.saveContactForClient(CLIENT_CONTACT_ID, VALID_CLIENT_CONTACT_REQUEST_TYPE)
        .then(() => false)
        .catch(response => response.status === 500);

    t.ok(saveContactForClient.isDone());
    t.ok(error);
});
