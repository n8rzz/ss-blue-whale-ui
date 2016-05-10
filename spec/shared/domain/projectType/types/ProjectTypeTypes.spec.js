/* eslint-disable */
import ava from 'ava';

import {
    ProjectTypeType,
    ProjectTypeListType,
    ProjectTypeListStateType,
    ProjectTypeStateType
} from '../../../../../src/scripts/shared/domain/projectType/types/ProjectTypeTypes';

import {
    VALID_PROJECT_TYPE_API_RESPONSE,
    VALID_PROJECT_TYPE_LIST_API_RESPONSE
} from '../../../../specHelper/mocks/projectType/projectTypeMocks';

import {
    ValidProjectTypeListStateType,
    ValidProjectTypeStateType
} from '../../../../specHelper/fixtures/projectType/ProjectTypeTypes';

ava('ProjectTypeType', t => {
    t.notThrows(() => ProjectTypeType(VALID_PROJECT_TYPE_API_RESPONSE));
    t.throws(() => ProjectTypeType(''));
});

ava('ProjectTypeListType', t => {
    t.notThrows(() => ProjectTypeListType(VALID_PROJECT_TYPE_LIST_API_RESPONSE));
    t.throws(() => ProjectTypeListType(''));
});

ava('ProjectTypeListStateType', t => {
    t.notThrows(() => ProjectTypeListStateType.is(ValidProjectTypeListStateType));
    t.throws(() => ProjectTypeListStateType(''));
});

ava('ProjectTypeStateType', t => {
    t.notThrows(() => ProjectTypeStateType.is(ValidProjectTypeStateType));
    t.throws(() => ProjectTypeListStateType(''));
});
