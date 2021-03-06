
import {
    VALID_BASE_STATE_TYPE
} from '../../mocks/baseTypes/BaseTypes';

import {
    VALID_CLIENT_CONTACT_CREATION_TYPE,
    VALID_CLIENT_CONTACT_API_RESPONSE,
    VALID_CLIENT_CONTACT_LIST_API_RESPONSE
} from '../../mocks/clientContact/clientContactMocks';

import {
    ClientContactCreationType,
    ClientContactType,
    ClientContactListType,
    ClientContactListStateType,
    ClientContactStateType
} from '../../../../src/scripts/shared/domain/clientContact/types/ClientContactTypes';

export const ValidClientContactCreationType = new ClientContactCreationType(VALID_CLIENT_CONTACT_CREATION_TYPE);

export const ValidClientContactType = new ClientContactType(VALID_CLIENT_CONTACT_API_RESPONSE);

export const ValidClientContactListType = new ClientContactListType(VALID_CLIENT_CONTACT_LIST_API_RESPONSE);

export const ValidClientContactListStateType = new ClientContactListStateType({
    ...VALID_BASE_STATE_TYPE,
    payload: ValidClientContactListType
});

export const ValidClientContactStateType = new ClientContactStateType({
    ...VALID_BASE_STATE_TYPE,
    payload: VALID_CLIENT_CONTACT_API_RESPONSE
});
