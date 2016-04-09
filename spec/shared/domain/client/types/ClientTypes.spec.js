/* eslint-disable */
import ava from 'ava';

import {
    ClientType,
    ClientListType,
    ClientListStateType
} from '../../../../../src/scripts/shared/domain/client/types/ClientTypes';

import {
    VALID_CLIENT_API_RESPONSE,
    VALID_CLIENT_LIST_API_RESPONSE
} from '../../../../specHelper/mocks/client/clientMocks';

import { ValidClientListStateType } from '../../../../specHelper/fixtures/client/ClientTypes';

ava('ClientType', t => {
    t.notThrows(() => ClientType(VALID_CLIENT_API_RESPONSE));
    t.throws(() => ClientType(''));
});

ava('ClientListType', t => {
    t.notThrows(() => ClientListType(VALID_CLIENT_LIST_API_RESPONSE));
    t.throws(() => ClientListType(''));
});

ava('ValidClientListStateType', t => {
    t.notThrows(() => ClientListStateType.is(ValidClientListStateType));
    t.throws(() => ClientListStateType(''));
});
