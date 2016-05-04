/* eslint-disable */
import ava from 'ava';

import {
    ClientCreationType,
    ClientType,
    ClientListType,
    ClientListStateType
} from '../../../../../src/scripts/shared/domain/client/types/ClientTypes';

import {
    VALID_CLIENT_CREATION_REQUEST,
    VALID_CLIENT_API_RESPONSE,
    VALID_CLIENT_LIST_API_RESPONSE
} from '../../../../specHelper/mocks/client/clientMocks';

import {
    ValidClientCreationType,
    ValidClient,
    ValidClientList,
    ValidClientListStateType
} from '../../../../specHelper/fixtures/client/ClientTypes';

ava('ClientCreationType', t => {
    t.notThrows(() => ClientCreationType(VALID_CLIENT_CREATION_REQUEST));
    t.throws(() => ClientCreationType(''));
    t.ok(ClientCreationType.is(ValidClientCreationType) === true);
});

ava('ClientType', t => {
    t.notThrows(() => ClientType(VALID_CLIENT_API_RESPONSE));
    t.throws(() => ClientType(''));
    t.ok(ClientType.is(ValidClient) === true);
});

ava('ClientListType', t => {
    t.notThrows(() => ClientListType(VALID_CLIENT_LIST_API_RESPONSE));
    t.throws(() => ClientListType(''));
    t.ok(ClientListType.is(ValidClientList) === true);
});

ava('ValidClientListStateType', t => {
    t.notThrows(() => ClientListStateType.is(ValidClientListStateType));
    t.throws(() => ClientListStateType(''));
});
