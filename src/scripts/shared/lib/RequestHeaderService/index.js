import axios from 'axios';

const AUTH_HEADER_KEY = 'Authorization';

/**
 * @function addSessionTokenToDefaultHeaders
 * @param {String} token
 */
export const addSessionTokenToDefaultHeaders = token => {
    axios.defaults.headers.common[AUTH_HEADER_KEY] = token;
};

/**
 * @function removeSessionTokenFromDefaultHeaders
 */
export const removeSessionTokenFromDefaultHeaders = () => {
    axios.defaults.headers.common[AUTH_HEADER_KEY] = null;
};
