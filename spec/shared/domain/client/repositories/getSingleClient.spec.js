import ava from 'ava';
import nock from 'nock';

import { VALID_CLIENT_API_RESPONSE } from '../../../../specHelper/mocks/client/clientMocks';
import { ClientType } from '../../../../../src/scripts/shared/domain/client/types/ClientTypes';

import ClientRepository from '../../../../../src/scripts/shared/domain/client/repositories/ClientRepository';

const CLIENT_ID = 1;

ava('getSingleClient returns a ClientType', async t => {
    const getSingleClient = nock(global.NOCK_SCOPE)
        .get('/clients/1')
        .reply(200, VALID_CLIENT_API_RESPONSE);

    const response = await ClientRepository.getSingleClient(CLIENT_ID);

    t.ok(getSingleClient.isDone());
    t.ok(response);
    t.ok(ClientType.is(response));
});

ava('getSingleClient completes request if there is a network error', async t => {
    const errorToThrow = new Error();
    const getSingleClient = nock(global.NOCK_SCOPE)
        .get('/clients/1')
        .reply(500, errorToThrow);

    const error = await ClientRepository.getSingleClient(CLIENT_ID)
        .then(() => false)
        .catch(response => response.status === 500);

    t.ok(getSingleClient.isDone());
    t.ok(error);
});
