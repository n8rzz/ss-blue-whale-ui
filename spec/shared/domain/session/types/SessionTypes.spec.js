/* eslint-disable new-cap */
import ava from 'ava';

import {
    SessionRequestType,
    SessionResponseType,
    SessionStateType
} from '../../../../../src/scripts/shared/domain/session/types/SessionTypes';

import {
    ValidSessionRequestType,
    ValidSessionResponseType,
    ValidSessionStateType
} from '../../../../specHelper/fixtures/session/SessionFixutes';

import {
    VALID_SESSION_CREATION_REQUEST,
    VALID_SESSION_RESPONSE
} from '../../../../specHelper/mocks/session/SessionMocks';

ava('SessionRequestType', t => {
    t.throws(() => SessionRequestType(''));
    t.notThrows(() => SessionRequestType(VALID_SESSION_CREATION_REQUEST));
    t.notThrows(() => SessionRequestType.is(ValidSessionRequestType));
});

ava('SessionResponseType', t => {
    t.throws(() => SessionResponseType(''));
    t.notThrows(() => SessionResponseType(VALID_SESSION_RESPONSE));
    t.notThrows(() => SessionResponseType.is(ValidSessionResponseType));
});

ava('ValidSessionStateType', t => {
    t.throws(() => SessionStateType(''));
    t.notThrows(() => SessionStateType.is(ValidSessionStateType));
});
