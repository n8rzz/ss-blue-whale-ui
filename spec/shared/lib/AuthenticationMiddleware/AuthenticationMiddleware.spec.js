import ava from 'ava';
import sinon from 'sinon';

import SessionService from '../../../../src/scripts/shared/lib/SessionService/SessionService';
import { ValidSessionResponseType } from '../../../specHelper/fixtures/session/SessionFixutes';

import { authenticationMiddleware } from '../../../../src/scripts/shared/lib/AuthenticationMiddleware';

import {
    isLoginPathname,
    isAllowedActionWithoutToken,
    sessionActionSuccessInterceptor
} from '../../../../src/scripts/shared/lib/AuthenticationMiddleware/actionInterceptor';

const POSSIBLE_ACTIONS = [
    'CREATE_SESSION_START',
    'GET_CLIENT_LIST',
];

const pushStub = sinon.stub();
const sessionServiceStub = sinon.stub();
const dispatchStub = action => sinon.stub().returns(action);

const reduxMiddlewareStub = {
    dispatch: (action) => sinon.stub().returns(action),
    getState: sinon.stub().returns({ session: '12345' })
};


const nextHandler = authenticationMiddleware(pushStub, sessionServiceStub)(reduxMiddlewareStub);

ava('authenticationMiddleware returns a function to handle next', t => {
    t.truthy(typeof nextHandler === 'function');
    t.is(nextHandler.length, 1);
});

ava('authenticationMiddleware handle next', t => {
    const actionHandler = nextHandler();
    t.truthy(typeof actionHandler === 'function');
    t.is(actionHandler.length, 1);
});

ava('authenticationMiddleware returns an action if a session token exists', t => {
    const sessionService = new SessionService();
    sessionService._session = ValidSessionResponseType;

    const mockNext = action => {
        t.truthy(action.type === POSSIBLE_ACTIONS[0])

        return action
    };

    t.plan(2);

    const result = authenticationMiddleware(pushStub, sessionService)(reduxMiddlewareStub)(mockNext)({
        type: POSSIBLE_ACTIONS[0]
    });

    t.deepEqual(result.type, POSSIBLE_ACTIONS[0]);
});

ava('authenticationMiddleware redirects to `/login` if no token exists', t => {
    const sessionService = new SessionService();

    let calledNextAction;
    const mockNext = action => {
        calledNextAction = action
        return action
    };

    const result = authenticationMiddleware(pushStub, sessionService)(reduxMiddlewareStub)(mockNext)({
        type: POSSIBLE_ACTIONS[1]
    });

    t.truthy(typeof calledNextAction === 'undefined');
    t.truthy(typeof result === 'undefined');
});
