import ava from 'ava';
import sinon from 'sinon';

import { authenticationMiddleware } from '../../../../src/scripts/shared/lib/AuthenticationMiddleware';

const pushStub = sinon.stub();
const sessionServiceStub = sinon.stub();
const reduxMiddlewareStub = {
    dispatch: (action) => sinon.stub().returns(action),
    getState: sinon.stub().returns({ session: '12345' })
};

const nextHandler = authenticationMiddleware(pushStub, sessionServiceStub, false)(reduxMiddlewareStub);

ava('authenticationMiddleware returns a function to handle next', t => {
    t.truthy(typeof nextHandler === 'function');
    t.is(nextHandler.length, 1);
});

ava('authenticationMiddleware handle next', t => {
    const actionHandler = nextHandler();
    t.truthy(typeof actionHandler === 'function');
    t.is(actionHandler.length, 1);
});
