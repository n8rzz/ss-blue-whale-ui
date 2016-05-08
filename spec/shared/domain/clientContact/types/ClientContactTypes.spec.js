/* eslint-disable */
import ava from 'ava';

import {
    ClientContactCreationType,
    ClientContactType,
    ClientContactListType,
    ClientContactListStateType,
    ClientContactStateType
} from '../../../../../src/scripts/shared/domain/clientContact/types/ClientContactTypes';

import {
    VALID_CLIENT_CONTACT_CREATION_REQUEST,
    VALID_CLIENT_CONTACT_API_RESPONSE,
    VALID_CLIENT_CONTACT_REQUEST,
    VALID_CLIENT_CONTACT_LIST_API_RESPONSE,
} from '../../../../specHelper/mocks/clientContact/clientContactMocks';

import {
    ValidClientContactCreationType,
    ValidClientContactType,
    ValidClientContactListType,
    ValidClientContactListStateType,
    ValidClientContactStateType
} from '../../../../specHelper/fixtures/clientContact/ClientContactTypes';

ava('ClientContactCreationType', t => {
    t.throws(() => ClientContactCreationType(''));
    t.notThrows(() => ClientContactCreationType(VALID_CLIENT_CONTACT_CREATION_REQUEST));
    t.ok(ClientContactCreationType.is(ValidClientContactCreationType) === true);
});

ava('ClientContactType', t => {
    t.throws(() => ClientContactType(''));
    t.notThrows(() => ClientContactType(VALID_CLIENT_CONTACT_API_RESPONSE));
    t.ok(ClientContactType.is(ValidClientContactType) === true);
});

ava('ClientContactListType', t => {
    t.throws(() => ClientContactListType(''));
    t.notThrows(() => ClientContactListType(VALID_CLIENT_CONTACT_LIST_API_RESPONSE));
    t.ok(ClientContactListType.is(ValidClientContactListType) === true);
});

ava('ClientContactListStateType', t => {
    t.notThrows(() => ClientContactListStateType.is(ValidClientContactListStateType));
    t.throws(() => ClientContactListStateType(''));
});
ava('ClientContactStateType', t => {
    t.notThrows(() => ClientContactStateType.is(ValidClientContactStateType));
    t.throws(() => ClientContactStateType(''));
});
