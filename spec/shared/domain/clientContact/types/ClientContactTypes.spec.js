/* eslint-disable */
import ava from 'ava';

import {
    ClientContactCreationType,
    ClientContactCreationRequestType,
    ClientContactType,
    ClientContactListType,
    ClientContactListStateType,
    ClientContactStateType
} from '../../../../../src/scripts/shared/domain/clientContact/types/ClientContactTypes';

import {
    VALID_CLIENT_CONTACT_CREATION_TYPE,
    VALID_CLIENT_CONTACT_CREATION_REQUEST_TYPE,
    VALID_CLIENT_CONTACT_API_RESPONSE,
    VALID_CLIENT_CONTACT_REQUEST,
    VALID_CLIENT_CONTACT_LIST_API_RESPONSE,
} from '../../../../specHelper/mocks/clientContact/clientContactMocks';

import {
    ValidClientContactCreationType,
    ValidClientContactCreationRequestType,
    ValidClientContactType,
    ValidClientContactListType,
    ValidClientContactListStateType,
    ValidClientContactStateType
} from '../../../../specHelper/fixtures/clientContact/ClientContactFixtures';

ava('ClientContactCreationType', t => {
    t.throws(() => ClientContactCreationType(''));
    t.notThrows(() => ClientContactCreationType(VALID_CLIENT_CONTACT_CREATION_TYPE));
    t.ok(ClientContactCreationType.is(ValidClientContactCreationType) === true);
});

ava('ClientContactCreationType #buildRequestParams returns correct type', t => {
    const CLIENT_ID = 1;
    const result = ClientContactCreationType.buildRequestParams(CLIENT_ID, ValidClientContactCreationType);

    t.ok(result.client_id === CLIENT_ID);
    t.ok(ClientContactCreationRequestType.is(result) === true);
});

ava('ClientContactCreationType #buildRequestParams throws if a param is missing', t => {
    t.throws(() => ClientContactCreationType.buildRequestParams(''));
});

ava('ClientContactCreationType #buildRequestParams throws if `clientContact` is the wrong type', t => {
    const CLIENT_ID = 1;

    t.throws(() => ClientContactCreationType.buildRequestParams(CLIENT_ID, ValidClientContactType));
});

ava('ClientContactCreationRequestType', t => {
    t.throws(() => ClientContactCreationRequestType(''));
    t.notThrows(() => ClientContactCreationRequestType(VALID_CLIENT_CONTACT_CREATION_REQUEST_TYPE));
    t.ok(ClientContactCreationRequestType.is(ValidClientContactCreationRequestType) === true);
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
