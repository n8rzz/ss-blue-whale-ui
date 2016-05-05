import ava from 'ava';
import nock from 'nock';

import ClientRepository from '../../../../../src/scripts/shared/domain/client/repositories/ClientRepository';

const CLIENT_ID = 1;

ava('deleteClient accepts and id and sends the request', async t => {
    const deleteClient = nock(global.NOCK_SCOPE)
        .delete('/clients/1')
        .reply(204);

    const response = await ClientRepository.deleteClient(CLIENT_ID);

    t.ok(deleteClient.isDone());
    t.ok(response);
});

ava('deleteClient completes request if there is a network error', async t => {
    const errorToThrow = new Error();
    const deleteClient = nock(global.NOCK_SCOPE)
        .delete('/clients/1')
        .reply(500, errorToThrow);

    const error = await ClientRepository.deleteClient(CLIENT_ID)
        .then(() => false)
        .catch(response => response.status === 500);

    t.ok(deleteClient.isDone());
    t.ok(error);
});
