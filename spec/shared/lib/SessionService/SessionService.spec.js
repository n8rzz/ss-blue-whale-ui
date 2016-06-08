import ava from 'ava';
import sinon from 'sinon';
import _isEmpty from 'lodash/isEmpty';

import { ValidSessionResponseType } from '../../../specHelper/fixtures/session/SessionFixutes';
import SessionService from '../../../../src/scripts/shared/lib/SessionService/SessionService';
import { SessionResponseType } from '../../../../src/scripts/shared/domain/session/types/SessionTypes';

ava.beforeEach(() => {
    global.sessionService = new SessionService();
    localStorage.removeItem('session');
});

ava.afterEach(() => {
    global.sessionService = null;
});

ava('SessionService initializes _session as null', t => {
    t.truthy(typeof sessionService._session === 'object');
    t.truthy(_isEmpty(sessionService._session));
});

ava('.token returns null if no access_token exists', t => {
    t.truthy(sessionService.token === null);
});

ava('.token returns a cached access_token', t => {
    sessionService._session = ValidSessionResponseType;

    t.truthy(sessionService.token === ValidSessionResponseType.access_token);
});

ava('#retrieveSessionFromStorage() returns null if no session exists in localStorage', t => {
    t.truthy(sessionService.retrieveSessionFromStorage() === null);
});

ava('#retrieveSessionFromStorage() returns a stored session if one exists in localStorage', t => {
    localStorage.setItem('session', ValidSessionResponseType);
    const result = sessionService.retrieveSessionFromStorage();

    t.truthy(SessionResponseType.is(result));
    t.truthy(result.access_token === ValidSessionResponseType.access_token);
});

ava('#_hasSessionInStorage() returns a boolean', t => {
    localStorage.removeItem('session');

    t.falsy(sessionService._hasSessionInStorage());

    localStorage.setItem('session', ValidSessionResponseType);

    t.truthy(sessionService._hasSessionInStorage());
});

ava('#_getSessionFromStorage() returns null if no session exists in localStorage', t => {
    localStorage.removeItem('session');
    const result = sessionService._getSessionFromStorage();

    t.truthy(result === null);
});

ava('#_getSessionFromStorage() retrieves a stored session from localStorage', t => {
    localStorage.setItem('session', ValidSessionResponseType);
    const result = sessionService._getSessionFromStorage();

    t.truthy(result.access_token === ValidSessionResponseType.access_token);
});

ava('#_getSessionFromStorage() returns a SessionResponseType', t => {
    localStorage.setItem('session', ValidSessionResponseType);
    const result = sessionService._getSessionFromStorage();

    t.truthy(SessionResponseType.is(result));
});

ava('#storeSession() throws if called with invalid params', t => {
    t.throws(() => sessionService.storeSession());
});

ava('#storeSession() accepts a SessionResponseType as a paramater', t => {
    sessionService.storeSession(ValidSessionResponseType);

    t.notThrows(() => sessionService.storeSession(ValidSessionResponseType));
    t.truthy(sessionService._session.access_token === ValidSessionResponseType.access_token);
});

ava('#storeSession() calls #_addSessionToStorage()', t => {
    const spy = sinon.spy(sessionService, '_addSessionToStorage');
    sessionService.storeSession(ValidSessionResponseType);

    t.truthy(spy.calledOnce);
});

ava('#_addSessionToStorage() adds the current _session to localStorage', t => {
    sessionService._session = ValidSessionResponseType;
    sessionService._addSessionToStorage();

    const result = JSON.parse(localStorage.getItem('session'));

    t.truthy(result !== null);
    t.truthy(result.access_token === ValidSessionResponseType.access_token);
});

ava('#clearSession() calls #_clearSessionInStorage()', t => {
    const spy = sinon.spy(sessionService, '_clearSessionInStorage');

    sessionService.clearSession();

    t.truthy(spy.calledOnce);
});

ava('#clearSession() resets _session to an empty object', t => {
    sessionService._session = ValidSessionResponseType;

    sessionService.clearSession();
    t.truthy(_isEmpty(sessionService._session));
});

ava('#_clearSessionInStorage() removes a stored session from localStorage', t => {
    localStorage.setItem('session', ValidSessionResponseType);
    sessionService._session = ValidSessionResponseType;

    sessionService.clearSession();
    const sessionInStorage = JSON.parse(localStorage.getItem('session'));

    t.truthy(sessionInStorage === null);
});
