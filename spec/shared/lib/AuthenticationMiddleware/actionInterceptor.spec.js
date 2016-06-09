import ava from 'ava';
import sinon from 'sinon';

import {
    CREATE_SESSION_START,
    CREATE_SESSION_SUCCESS,
    UNAUTHORIZED_SESSION
} from '../../../../src/scripts/shared/domain/session/actions/SessionActions';

import {
    isLoginPathname,
    isAllowedActionWithoutToken
} from '../../../../src/scripts/shared/lib/AuthenticationMiddleware/actionInterceptor';

ava('.isLoginPathname() returns true if type === `@@router/LOCATION_CHANGE` and pathname === `/login`', t => {
    const middlewareApiMock = {
        type: '@@router/LOCATION_CHANGE',
        payload: {
            pathname: '/login'
        }
    };

    const result = isLoginPathname(middlewareApiMock);

    t.truthy(result);
});

ava('.isLoginPathname() returns false if type !== `@@router/LOCATION_CHANGE` and and pathname !== `/login`', t => {
    const middlewareApiMock = {
        type: 'SOME_OTHER_TYPE'
    };

    const result = isLoginPathname(middlewareApiMock);

    t.falsy(result);
});

ava('.isAllowedActionWithoutToken() returns true if type === CREATE_SESSION_START', t => {
    const middlewareApiMock = {
        type: CREATE_SESSION_START
    };

    const result = isAllowedActionWithoutToken(middlewareApiMock);

    t.truthy(result);
});

ava('.isAllowedActionWithoutToken() returns true if type === CREATE_SESSION_SUCCESS', t => {
    const middlewareApiMock = {
        type: CREATE_SESSION_SUCCESS
    };

    const result = isAllowedActionWithoutToken(middlewareApiMock);

    t.truthy(result);
});

ava('.isAllowedActionWithoutToken() returns true if type === UNAUTHORIZED_SESSION', t => {
    const middlewareApiMock = {
        type: UNAUTHORIZED_SESSION
    };

    const result = isAllowedActionWithoutToken(middlewareApiMock);

    t.truthy(result);
});

ava('.isAllowedActionWithoutToken() returns false if some other type', t => {
    const middlewareApiMock = {
        type: 'SOME_OTHER_TYPE'
    };

    const result = isAllowedActionWithoutToken(middlewareApiMock);

    t.falsy(result);
});
