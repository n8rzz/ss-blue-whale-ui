import ava from 'ava';
import nock from 'nock';

import ClientContactRepository from '../../../../../src/scripts/shared/domain/clientContact/repositories/ClientContactRepository';

const CLIENT_CONTACT_ID = 1;

ava('deleteContactForClient requires a clientId and a clientContactId', async t => {
    const deleteContactForClient = nock(global.NOCK_SCOPE)
        .delete('/clientContacts/1')
        .reply(204);

    const response = await ClientContactRepository.deleteContactForClient(CLIENT_CONTACT_ID);

    t.ok(deleteContactForClient.isDone());
    t.ok(response);
});

ava('deleteContactForClient completes request if there is a network error', async t => {
    const errorToThrow = new Error();
    const deleteContactForClient = nock(global.NOCK_SCOPE)
        .delete('/clientContacts/1')
        .reply(500, errorToThrow);

    const error = await await ClientContactRepository.deleteContactForClient(CLIENT_CONTACT_ID)
        .then(() => false)
        .catch(response => response.status === 500);

    t.ok(deleteContactForClient.isDone());
    t.ok(error);
});
