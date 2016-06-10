import ava from 'ava';
import sinon from 'sinon';

import { retrieveSessionToken } from '../../../../src/scripts/shared/lib/AuthenticationMiddleware/tokenStorageHelper';
import SessionService from '../../../../src/scripts/shared/lib/SessionService/SessionService';

import { ValidSessionResponseType } from '../../../specHelper/fixtures/session/SessionFixutes';

const sessionService = new SessionService();

ava('.retrieveSessionToken() returns null if no session exists in cache or localStorage', t => {
    const result = retrieveSessionToken(sessionService);

    t.truthy(result === null);
});

ava('.retrieveSessionToken() calls sessionService.retrieveSessionFromStorage() via .rehydrateCacheWithStoredSession() if no token exists in cache', t => {
    const spy = sinon.spy(sessionService, 'retrieveSessionFromStorage');
    retrieveSessionToken(sessionService);

    t.truthy(spy.calledOnce);
});

ava('.retrieveSessionToken() returns a session token if one exists in cache', t => {
    sessionService._session = ValidSessionResponseType;
    const result = retrieveSessionToken(sessionService);

    t.truthy(result === ValidSessionResponseType.access_token);
});
