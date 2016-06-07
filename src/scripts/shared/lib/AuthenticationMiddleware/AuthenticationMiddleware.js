import t from 'tcomb';

import {
    CREATE_SESSION_START,
    CREATE_SESSION_SUCCESS,
    UNAUTHORIZED_SESSION,
    unauthorizedSession
} from '../../domain/session/actions/SessionActions';
import { ErrorType } from '../../domain/BaseTypes';

/**
 * @property authError
 * @return {ErrorType}
 */
const authError = new ErrorType({
    status: 401,
    statusText: 'Unauthorized'
});

/**
 * Write a console.group with information pretaining to `AuthenticationMiddleware`.
 *
 * Should be used only for development.
 *
 * @function writeAuthenticationMiddlewareLog
 * @param  {Object} action
 * @param  {String} token
 * @param  {Object} session
 */
const writeAuthenticationMiddlewareLog = (action, token, session) => {
    if (!console || !console.log) {
        return;
    }

    console.groupCollapsed('AuthenticationMiddleware: ', action.type);
    console.log('authenticated:\t\t ', token !== null, token);
    console.log('sessionState:\t\t ', session.payload);
    console.log('sessionStateErrors:\t ', session.errors);
    console.groupEnd();
};

/**
 * Determine if a session token exists in localStorage or in the current state.
 *
 * Redirect to `/login` if no token is found.
 *
 * @function authenticationMiddleware
 * @param {Function} push
 * @param {Boolean} shouldUseLogger
 * @return {Function}
 */
export const authenticationMiddleware = (push, shouldUseLogger = true) => {
    return ({ dispatch, getState }) => next => action => {
        const session = getState().session;
        const { type, payload } = action;
        const token = localStorage.getItem('token');

        const isLoginPathname = type === '@@router/LOCATION_CHANGE' &&
            payload.hasOwnProperty('pathname') &&
            payload.pathname === '/login';

        const isAllowedActionWithoutToken = type === CREATE_SESSION_START ||
            type === CREATE_SESSION_SUCCESS ||
            type === UNAUTHORIZED_SESSION;

        if (isLoginPathname || isAllowedActionWithoutToken) {
            return next(action);
        }

        if (t.Nil.is(token) && t.Nil.is(session.payload)) {
            if (shouldUseLogger) {
                writeAuthenticationMiddlewareLog(action, token, session);
            }

            dispatch(unauthorizedSession(authError));
            return dispatch(push('/login'));
        }

        next(action);
    };
};
