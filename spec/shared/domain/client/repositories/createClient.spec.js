import ava from 'ava';
import nock from 'nock';

import {
    VALID_CLIENT_CREATION_REQUEST,
    VALID_CLIENT_API_RESPONSE
} from '../../../../specHelper/mocks/client/clientMocks';
import {
    ClientCreationType,
    ClientType
} from '../../../../../src/scripts/shared/domain/client/types/ClientTypes';

import ClientRepository from '../../../../../src/scripts/shared/domain/client/repositories/ClientRepository';

ava('createClient returns a ClientType', async t => {
    const createClient = nock(global.NOCK_SCOPE)
        .post('/clients')
        .reply(200, VALID_CLIENT_API_RESPONSE);

    const response = await ClientRepository.createClient(VALID_CLIENT_CREATION_REQUEST);

    t.ok(createClient.isDone());
    t.ok(response);
    t.ok(ClientType.is(response));
});

ava('createClient completes request if there is a network error', async t => {
    const errorToThrow = new Error();
    const createClient = nock(global.NOCK_SCOPE)
        .post('/clients')
        .reply(500, errorToThrow);

    const error = await ClientRepository.createClient(VALID_CLIENT_CREATION_REQUEST)
        .then(() => false)
        .catch(response => response.status === 500);

    t.ok(createClient.isDone());
    t.ok(error);
});
