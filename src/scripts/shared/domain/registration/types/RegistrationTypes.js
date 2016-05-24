import t from 'tcomb';
import { BaseStateType } from '../../BaseTypes';

/**
 * @type {RegistrationRequestType}
 * @return {RegistrationRequestType}
 */
export const RegistrationRequestType = t.struct({}, 'RegistrationRequestType');

/**
 * @type {RegistrationResponseType}
 * @return {RegistrationResponseType}
 */
export const RegistrationResponseType = t.struct({}, 'RegistrationResponseType');

/**
 * @type {RegistrationStateType}
 * @return {RegistrationStateType}
 */
export const RegistrationStateType = BaseStateType.extend({
    payload: t.maybe(RegistrationResponseType)
}, 'RegistrationStateType');
