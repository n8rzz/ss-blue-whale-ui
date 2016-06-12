import {
    SessionRequestType,
    SessionResponseType,
    SessionStateType
} from '../../../../src/scripts/shared/domain/session/types/SessionTypes';

import {
    VALID_SESSION_CREATION_REQUEST,
    VALID_SESSION_RESPONSE
} from '../../../specHelper/mocks/session/SessionMocks';

import {
    VALID_BASE_STATE_TYPE
} from '../../mocks/baseTypes/BaseTypes';

export const ValidSessionRequestType = new SessionRequestType(VALID_SESSION_CREATION_REQUEST);

export const ValidSessionResponseType = new SessionResponseType(VALID_SESSION_RESPONSE);

export const ValidSessionStateType = new SessionStateType({
    ... VALID_BASE_STATE_TYPE,
    payload: ValidSessionResponseType
});
