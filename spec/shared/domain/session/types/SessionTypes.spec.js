// /* eslint-disable */
// import ava from 'ava';
//
// import {
//     RegistrationRequestType,
//     RegistrationResponseType,
//     RegistrationStateType
// } from '../../../../../src/scripts/shared/domain/registration/types/RegistrationTypes';
//
// import {
//     ValidRegistrationRequestType,
//     ValidRegistrationResponseType,
//     ValidRegistrationStateType
// } from '../../../../specHelper/fixtures/registration/RegistrationFixtures';
//
// import {
//     VALID_REGISTRATION_REQUEST,
//     VALID_REGISTRATION_RESPONSE
// } from '../../../../specHelper/mocks/registration/RegistrationMocks';
//
// ava('RegistrationRequestType', t => {
//     t.throws(() => RegistrationRequestType(''));
//     t.notThrows(() => RegistrationRequestType(VALID_REGISTRATION_REQUEST));
//     t.notThrows(() => RegistrationRequestType.is(ValidRegistrationRequestType));
// });
//
// ava('RegistrationResponseType', t => {
//     t.throws(() => RegistrationResponseType(''));
//     t.notThrows(() => RegistrationResponseType(VALID_REGISTRATION_RESPONSE));
//     t.notThrows(() => RegistrationResponseType.is(ValidRegistrationResponseType));
// });
//
// ava('ValidRegistrationStateType', t => {
//     t.throws(() => RegistrationStateType(''));
//     t.notThrows(() => RegistrationStateType.is(ValidRegistrationStateType));
// });
