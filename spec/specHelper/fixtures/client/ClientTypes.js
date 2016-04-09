import t from 'tcomb';

import {
    VALID_CLIENT_API_RESPONSE,
    VALID_CLIENT_LIST_API_RESPONSE
} from '../../mocks/client/clientMocks';

import {
    VALID_BASE_STATE_TYPE
} from '../../mocks/BaseTypes';

import {
    ClientType,
    ClientListType,
    ClientListStateType
} from '../../../../src/scripts/shared/domain/client/types/ClientTypes';

export const ValidClient = new ClientType(VALID_CLIENT_API_RESPONSE);

export const ValidClientList = new ClientListType(VALID_CLIENT_LIST_API_RESPONSE);

export const ValidClientListStateType = new ClientListStateType({
    ...VALID_BASE_STATE_TYPE,
    payload: ValidClientList
});
