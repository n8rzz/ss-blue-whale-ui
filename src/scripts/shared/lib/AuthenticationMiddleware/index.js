import t from 'tcomb';

import logger from './logger';
import { retrieveSessionToken } from './tokenStorageHelper';
import {
    isLoginPathname,
    isAllowedActionWithoutToken,
    sessionActionSuccessInterceptor
} from './actionInterceptor';

import { unauthorizedSession } from '../../domain/session/actions/SessionActions';
import { ErrorType } from '../../domain/BaseTypes';

/**
 * @property authError
 * @type {ErrorType|Object}
 */
const authError = new ErrorType({
    status: 401,
    statusText: 'Unauthorized.  Please Login.'
});

/**
 *
 * @method redirectToLogin
 * @param {Function} dispatch
 * @param {Function} push
 */
const redirectToLogin = (dispatch, push) => {
    dispatch(unauthorizedSession(authError));
    dispatch(push('/login'));
};

/**
 * Determine if a session token exists in localStorage or the current application state.
 *
 * Redirect to `/login` if no token is found.
 *
 * @function authenticationMiddleware
 * @param {Function} push
 * @param {Boolean} shouldUseLogger
 * @return {Function}
 */
export const authenticationMiddleware = (push, sessionService, shouldUseLogger = true) => {
    return ({ dispatch, getState }) => next => action => {
        const session = getState().session;
        const token = retrieveSessionToken(sessionService);

        logger(shouldUseLogger, action, token, session);
        sessionActionSuccessInterceptor(action, sessionService);

        if (isLoginPathname(action) || isAllowedActionWithoutToken(action)) {
            return next(action);
        }

        if (t.Nil.is(token) && t.Nil.is(session.payload)) {
            return redirectToLogin(dispatch, push);
        }

        next(action);
    };
};
