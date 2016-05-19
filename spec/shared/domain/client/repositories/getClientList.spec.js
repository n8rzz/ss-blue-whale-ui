import ava from 'ava';
import nock from 'nock';

import { VALID_CLIENT_LIST_API_RESPONSE } from '../../../../specHelper/mocks/client/clientMocks';
import { ClientListType } from '../../../../../src/scripts/shared/domain/client/types/ClientTypes';

import ClientRepository from '../../../../../src/scripts/shared/domain/client/repositories/ClientRepository';

ava('getClientList returns a ClientListType', async t => {
    const getClientList = nock(global.NOCK_SCOPE)
        .get('/clients')
        .reply(200, VALID_CLIENT_LIST_API_RESPONSE);

    const response = await ClientRepository.getClientList();

    t.truthy(getClientList.isDone());
    t.truthy(response);
    t.truthy(ClientListType.is(response));
});

ava('getClientList completes request if there is a network error', async t => {
    const errorToThrow = new Error();
    const getClientList = nock(global.NOCK_SCOPE)
        .get('/clients')
        .reply(500, errorToThrow);

    const error = await ClientRepository.getClientList()
        .then(() => false)
        .catch(response => response.status === 500);

    t.truthy(getClientList.isDone());
    t.truthy(error);
});
