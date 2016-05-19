import ava from 'ava';
import nock from 'nock';

import {
    VALID_CLIENT_CREATION_REQUEST,
    VALID_SINGLE_CLIENT_API_RESPONSE
} from '../../../../specHelper/mocks/client/clientMocks';
import {
    ClientCreationType,
    ClientType
} from '../../../../../src/scripts/shared/domain/client/types/ClientTypes';

import ClientRepository from '../../../../../src/scripts/shared/domain/client/repositories/ClientRepository';

ava('createClient returns a ClientType', async t => {
    const createClient = nock(global.NOCK_SCOPE)
        .post('/clients')
        .reply(200, VALID_SINGLE_CLIENT_API_RESPONSE);

    const response = await ClientRepository.createClient(VALID_CLIENT_CREATION_REQUEST);

    t.truthy(createClient.isDone());
    t.truthy(response);
    t.truthy(ClientType.is(response));
});

ava('createClient completes request if there is a network error', async t => {
    const errorToThrow = new Error();
    const createClient = nock(global.NOCK_SCOPE)
        .post('/clients')
        .reply(500, errorToThrow);

    const error = await ClientRepository.createClient(VALID_CLIENT_CREATION_REQUEST)
        .then(() => false)
        .catch(response => response.status === 500);

    t.truthy(createClient.isDone());
    t.truthy(error);
});
