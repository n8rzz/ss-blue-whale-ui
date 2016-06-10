/**
 * Write a console.group with information pretaining to `AuthenticationMiddleware`.
 *
 * Should be used only for development.
 *
 * @function writeAuthenticationMiddlewareLog
 * @param  {Boolean} shouldUseLogger
 * @param  {Object} action
 * @param  {String} token
 * @param  {Object} session
 */
const writeAuthenticationMiddlewareLog = (shouldUseLogger, action, token, session) => {
    if (!shouldUseLogger) {
        return;
    }

    console.groupCollapsed('AuthenticationMiddleware: ', action.type);
    console.log('isAuthenticated:\t ', token !== null, token);
    console.log('sessionState:\t\t ', session.payload);
    console.log('sessionStateErrors:\t ', session.errors);
    console.groupEnd();
};

export default writeAuthenticationMiddlewareLog;
