import ava from 'ava';

import {  ALLOWED_ACTION_TYPES } from '../../../../src/scripts/shared/lib/AuthenticationMiddleware/allowedActionTypes';

import {
    isLoginPathname,
    isAllowedActionWithoutToken
} from '../../../../src/scripts/shared/lib/AuthenticationMiddleware/actionInterceptor';

ava('.isAllowedActionWithoutToken() returns true if type is included in ALLOWED_ACTION_TYPES', t => {
    t.plan(ALLOWED_ACTION_TYPES.length);

    for (let i = 0; i < ALLOWED_ACTION_TYPES.length; i++) {
        const actionToDispatch = ALLOWED_ACTION_TYPES[i];

        const middlewareApiMock = {
            type: actionToDispatch
        };

        const result = isAllowedActionWithoutToken(middlewareApiMock);

        t.truthy(result);
    }
});

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

ava('.isAllowedActionWithoutToken() returns false if some other type', t => {
    const middlewareApiMock = {
        type: 'SOME_OTHER_TYPE'
    };

    const result = isAllowedActionWithoutToken(middlewareApiMock);

    t.falsy(result);
});
