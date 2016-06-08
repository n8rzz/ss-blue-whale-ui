/* eslint dot-notation: 0 */
import _get from 'lodash/get';
import { SessionResponseType } from '../../domain/session/types/SessionTypes';

/**
 * @property AUTH_TOKEN_KEY
 * @type {string}
 * @final
 */
const AUTH_TOKEN_KEY = 'session';

/**
 * Provides methods to store/retrieve _session data in memory and/or localStorage
 *
 * @class SessionService
 */
export default class SessionService {
    /**
     * @for SessionService
     * @constructor
     */
    constructor() {
        /**
         * @private
         * @property _session
         * @type {Object}
         * @default {}
         */
        this._session = {};
    }

    /**
     * @for SessionService
     * @property token
     * @return {String} _session.access_token
     */
    get token() {
        return _get(this._session, 'access_token', null);
    }

    // ///////////////////////////////////////////////////////
    // PRIVATE METHODS
    // ///////////////////////////////////////////////////////

    /**
     * Check if a _session exists in localStorage
     *
     * @private
     * @for SessionService
     * @method _hasSessionInStorage
     * @return {Boolean}
     */
    _hasSessionInStorage() {
        const sessionInStorage = localStorage.getItem(AUTH_TOKEN_KEY);

        return sessionInStorage !== null;
    }

    /**
     * Get a previously saved _session from localStorage
     *
     * @private
     * @for SessionService
     * @method _getSessionFromStorage
     * @return {SessionResponseType|Object} session
     */
    _getSessionFromStorage() {
        if (!this._hasSessionInStorage()) {
            return null;
        }

        const session = JSON.parse(localStorage.getItem(AUTH_TOKEN_KEY));
        const sessionResponseType = new SessionResponseType(session);

        return sessionResponseType;
    }

    /**
     * Save the current _session to localStorage
     *
     * @private
     * @for SessionService
     * @method _addSessionToStorage
     */
    _addSessionToStorage() {
        localStorage.setItem(AUTH_TOKEN_KEY, this._session);
    }

    /**
     * Removes a stored session from localStorage if one exists
     *
     * @private
     * @for SessionService
     * @method _clearSessionInStorage
     */
    _clearSessionInStorage() {
        if (!this._hasSessionInStorage()) {
            return;
        }

        localStorage.removeItem(AUTH_TOKEN_KEY);
    }

    // ///////////////////////////////////////////////////////
    // PUBLIC METHODS
    // ///////////////////////////////////////////////////////

    /**
     * Store a current _session
     *
     * @for SessionService
     * @method storeSession
     * @param {SessionResponseType} session
     */
    storeSession(session) {
        if (!SessionResponseType.is(session)) {
            throw new TypeError('Invalid paramaters.  Expected session to be a SessionResponseType');
        }

        this._session = session;

        this._addSessionToStorage();
    }

    /**
     * Get a previous _session from localStorage
     *
     * @for SessionService
     * @method retrieveSessionFromStorage
     * @return {SessionResponseType|Object}
     */
    retrieveSessionFromStorage() {
        if (!this._hasSessionInStorage()) {
            return null;
        }

        // TODO: this should be moved out of this method into it's own setter
        this._session = this._getSessionFromStorage();

        return this._session;
    }

    /**
     * Clear any session data currently in cache or storage
     *
     * @for SessionService
     * @method clearSession
     */
    clearSession() {
        this._clearSessionInStorage();

        this._session = {};
    }
}
