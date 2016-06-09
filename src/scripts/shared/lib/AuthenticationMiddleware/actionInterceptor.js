import {
    CREATE_SESSION_START,
    CREATE_SESSION_SUCCESS,

    DESTROY_SESSION_SUCCESS,

    UNAUTHORIZED_SESSION,
} from '../../domain/session/actions/SessionActions';

/**
 *
 * @function captureNewSessionInStorage
 * @param  {SessionResponseType|Object} newSessionResponse
 * @param  {SessionService|class} sessionService
 */
const captureNewSessionInStorage = (newSessionResponse, sessionService) => {
    sessionService.storeSession(newSessionResponse);
};

/**
 * @function destroyCurrentSessionInStorage
 * @param  {SessionService|class} sessionService
 */
const destroyCurrentSessionInStorage = sessionService => {
    sessionService.clearSession();
};

/**
 * @function isLoginPathname
 * @param {String} type
 * @param {Object} payload
 * @return {Boolean}
 */
export const isLoginPathname = ({ type, payload }) => {
    return type === '@@router/LOCATION_CHANGE' && payload.hasOwnProperty('pathname') && payload.pathname === '/login';
};

/**
 *
 * @function isLoginPathname
 * @param {String} type
 * @return {Boolean}
 */
export const isAllowedActionWithoutToken = ({ type }) => {
    return type === CREATE_SESSION_START || type === CREATE_SESSION_SUCCESS || type === UNAUTHORIZED_SESSION;
};

/**
 * @function sessionActionSuccessInterceptor
 * @param {String} type
 * @param {Object} payload
 * @param {SessionService|class} sessionService
 */
export const sessionActionSuccessInterceptor = ({ type, payload }, sessionService) => {
    if (type === CREATE_SESSION_SUCCESS) {
        captureNewSessionInStorage(payload, sessionService);
    }

    if (type === DESTROY_SESSION_SUCCESS) {
        destroyCurrentSessionInStorage(sessionService);
    }
};
