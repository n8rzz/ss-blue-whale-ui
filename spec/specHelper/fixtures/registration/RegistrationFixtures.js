import {
    RegistrationRequestType,
    RegistrationResponseType,
    RegistrationStateType
} from '../../../../src/scripts/shared/domain/registration/types/RegistrationTypes';

import {
    VALID_REGISTRATION_REQUEST,
    VALID_REGISTRATION_RESPONSE
} from '../../../specHelper/mocks/registration/RegistrationMocks';

import {
    VALID_BASE_STATE_TYPE
} from '../../mocks/BaseTypes';

export const ValidRegistrationRequestType = new RegistrationRequestType(VALID_REGISTRATION_REQUEST);

export const ValidRegistrationResponseType = new RegistrationResponseType(VALID_REGISTRATION_RESPONSE);

export const ValidRegistrationStateType = new RegistrationStateType({
    ... VALID_BASE_STATE_TYPE,
    payload: ValidRegistrationResponseType
});
