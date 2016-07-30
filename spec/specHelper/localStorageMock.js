import { VALID_SESSION_RESPONSE } from '../specHelper/mocks/session/sessionMocks';

const localStorageMock = (() => {
    let store = {};
    return {
        getItem: (key) => {
            if (typeof store[key] === 'undefined') {
                return null;
            }

            return store[key];
        },

        setItem: (key, value) => {
            store[key] = typeof value === 'object' ? JSON.stringify(value) : value.toString();
        },

        removeItem: (key) => {
            if (typeof store[key] === 'undefined') {
                return null;
            }

            store[key] = null;
        },

        clear: () => {
            store = {};
        }
    };
})();

Object.defineProperty(global, 'localStorage', { value: localStorageMock });
localStorage.setItem('token', VALID_SESSION_RESPONSE.access_token);

/**
 * @method signInUser
 */
const signInUser = () => {
    if (localStorage.getItem('token') === null) {
        localStorage.setItem('token', VALID_SESSION_RESPONSE.access_token);
    }
};

Object.defineProperty(global, 'signInUser', { value: signInUser });
