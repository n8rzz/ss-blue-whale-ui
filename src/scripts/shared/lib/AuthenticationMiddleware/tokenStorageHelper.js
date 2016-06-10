/**
 * @function retrieveSessionToken
 * @param  {SessionService|class} sessionService
 */
const rehydrateCacheWithStoredSession = sessionService => {
    sessionService.retrieveSessionFromStorage();
};

/**
 * @function retrieveSessionToken
 * @param  {SessionService|class} sessionService
 * @return {SessionResponseType|null} token
 */
export const retrieveSessionToken = sessionService => {
    if (sessionService.token === null) {
        rehydrateCacheWithStoredSession(sessionService);
    }

    return sessionService.token;
};
