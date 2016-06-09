import ava from 'ava';
import sinon from 'sinon';
import _isEmpty from 'lodash/isEmpty';

import {
    CREATE_SESSION_SUCCESS,
    DESTROY_SESSION_SUCCESS
} from '../../../../src/scripts/shared/domain/session/actions/SessionActions';

import {
    sessionActionSuccessInterceptor
} from '../../../../src/scripts/shared/lib/AuthenticationMiddleware/actionInterceptor';

import SessionService from '../../../../src/scripts/shared/lib/SessionService/SessionService';
import { ValidSessionResponseType } from '../../../specHelper/fixtures/session/SessionFixutes';

const sessionService = new SessionService();

ava('.sessionActionSuccessInterceptor() does nothing if type is irrelevent', t => {
    const storeSessionSpy = sinon.spy(sessionService, 'storeSession');
    const clearSessionSpy = sinon.spy(sessionService, 'clearSession');

    const middlewareApiMock = {
        type: 'SOME_OTHER_TYPE',
        payload: ValidSessionResponseType
    };

    sessionActionSuccessInterceptor(middlewareApiMock, sessionService);

    t.falsy(storeSessionSpy.called);
    t.falsy(clearSessionSpy.called);

    storeSessionSpy.restore();
    clearSessionSpy.restore();
});

ava('.sessionActionSuccessInterceptor() calls sessionService.storeSession() via .captureNewSessionInStorage() if type === CREATE_SESSION_SUCCESS', t => {
    const storeSessionSpy = sinon.spy(sessionService, 'storeSession');

    const middlewareApiMock = {
        type: CREATE_SESSION_SUCCESS,
        payload: ValidSessionResponseType
    };

    sessionActionSuccessInterceptor(middlewareApiMock, sessionService);

    t.truthy(storeSessionSpy.calledOnce);
    t.truthy(sessionService._session.access_token === ValidSessionResponseType.access_token);
    storeSessionSpy.restore();
});

ava('.sessionActionSuccessInterceptor() calls sessionService.clearSession() via .destroyCurrentSessionInStorage() if type === DESTROY_SESSION_SUCCESS', t => {
    const clearSessionSpy = sinon.spy(sessionService, 'clearSession');

    const middlewareApiMock = {
        type: DESTROY_SESSION_SUCCESS
    };

    sessionActionSuccessInterceptor(middlewareApiMock, sessionService);

    t.truthy(clearSessionSpy.calledOnce);
    t.truthy(_isEmpty(sessionService._session));
    clearSessionSpy.restore();
});
