import t from 'tcomb';
import { BaseStateType } from '../../baseTypes/BaseTypes';

/**
 * @type SessionRequestType
 * @return {SessionRequestType}
 */
export const SessionRequestType = t.struct({
    email: t.String,
    password: t.String
}, 'SessionRequestType');

/**
 * @type SessionResponseType
 * @return {SessionResponseType}
 */
export const SessionResponseType = t.struct({
    user_id: t.Number,
    email: t.String,
    username: t.String,
    access_token: t.String,
    token_type: t.String
}, 'SessionResponseType');

/**
 * @type SessionStateType
 * @return {SessionStateType}
 */
export const SessionStateType = BaseStateType.extend({
    payload: t.maybe(SessionResponseType)
}, 'SessionStateType');
