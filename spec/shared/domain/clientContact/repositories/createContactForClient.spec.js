import ava from 'ava';
import nock from 'nock';

import {
    VALID_CLIENT_CONTACT_CREATION_REQUEST_TYPE,
    VALID_CLIENT_CONTACT_API_RESPONSE
} from '../../../../specHelper/mocks/clientContact/clientContactMocks';
import {
    ClientContactType
} from '../../../../../src/scripts/shared/domain/clientContact/types/ClientContactTypes';

import ClientContactRepository from '../../../../../src/scripts/shared/domain/clientContact/repositories/ClientContactRepository';

ava('createContactForClient returns a ClientType', async t => {
    const createContactForClient = nock(global.NOCK_SCOPE)
        .post('/clientContacts')
        .reply(200, VALID_CLIENT_CONTACT_API_RESPONSE);

    const response = await ClientContactRepository.createContactForClient(VALID_CLIENT_CONTACT_CREATION_REQUEST_TYPE);

    t.ok(createContactForClient.isDone());
    t.ok(response);
    t.ok(ClientContactType.is(response));
});

ava('createContactForClient completes request if there is a network error', async t => {
    const errorToThrow = new Error();
    const createContactForClient = nock(global.NOCK_SCOPE)
        .post('/clientContacts')
        .reply(500, errorToThrow);

    const error = await ClientContactRepository.createContactForClient(VALID_CLIENT_CONTACT_CREATION_REQUEST_TYPE)
        .then(() => false)
        .catch(response => response.status === 500);

    t.ok(createContactForClient.isDone());
    t.ok(error);
});
