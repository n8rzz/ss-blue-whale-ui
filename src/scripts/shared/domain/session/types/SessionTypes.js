// import t from 'tcomb';
// import { BaseStateType } from '../../BaseTypes';
//
// /**
//  * @type {RegistrationRequestType}
//  * @return {RegistrationRequestType}
//  */
// export const RegistrationRequestType = t.struct({
//     email: t.String,
//     username: t.String,
//     password: t.String,
//     password_confirmation: t.String
// }, 'RegistrationRequestType');
//
// /**
//  * @type {RegistrationResponseType}
//  * @return {RegistrationResponseType}
//  */
// export const RegistrationResponseType = t.struct({
//     user_id: t.Number,
//     email: t.String,
//     username: t.String,
//     access_token: t.String,
//     token_type: t.String
// }, 'RegistrationResponseType');
//
// /**
//  * @type {RegistrationStateType}
//  * @return {RegistrationStateType}
//  */
// export const RegistrationStateType = BaseStateType.extend({
//     payload: t.maybe(RegistrationResponseType)
// }, 'RegistrationStateType');
