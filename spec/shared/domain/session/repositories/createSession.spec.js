import ava from 'ava';
import nock from 'nock';

import {
    VALID_SESSION_CREATION_REQUEST,
    VALID_SESSION_RESPONSE
} from '../../../../specHelper/mocks/session/SessionMocks';

import {
    SessionResponseType
} from '../../../../../src/scripts/shared/domain/session/types/SessionTypes';

import SessionRepository from '../../../../../src/scripts/shared/domain/session/repositories/SessionRepository';

ava('createSession returns a SessionResponseType', async t => {
    const createSession = nock(global.NOCK_SCOPE)
        .post('/login', VALID_SESSION_CREATION_REQUEST)
        .reply(200, VALID_SESSION_RESPONSE);

    const response = await SessionRepository.createSession(VALID_SESSION_CREATION_REQUEST);

    t.truthy(createSession.isDone());
    t.truthy(response);
    t.truthy(SessionResponseType.is(response));
});

ava('createSession completes request if there is a network error', async t => {
    const errorToThrow = new Error();
    const createSession = nock(global.NOCK_SCOPE)
        .post('/login')
        .reply(500, errorToThrow);

    const error = await SessionRepository.createSession(VALID_SESSION_CREATION_REQUEST)
        .then(() => false)
        .catch(response => response.status === 500);

    t.truthy(createSession.isDone());
    t.truthy(error);
});
