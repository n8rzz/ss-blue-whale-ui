/* eslint-disable */
import ava from 'ava';

import {
    ProjectTypeType,
    ProjectTypeListType,
    ProjectTypeListStateType
} from '../../../../../src/scripts/shared/domain/projectType/types/ProjectTypeTypes';

import {
    VALID_PROJECT_TYPE_API_RESPONSE,
    VALID_PROJECT_TYPE_LIST_API_RESPONSE
} from '../../../../specHelper/mocks/projectType/projectTypeMocks';

import { ValidProjectTypeListStateType } from '../../../../specHelper/fixtures/projectType/ProjectTypeTypes';

ava('ProjectTypeType', t => {
    t.notThrows(() => ProjectTypeType(VALID_PROJECT_TYPE_API_RESPONSE));
    t.throws(() => ProjectTypeType(''));
});

ava('ProjectTypeListType', t => {
    t.notThrows(() => ProjectTypeListType(VALID_PROJECT_TYPE_LIST_API_RESPONSE));
    t.throws(() => ProjectTypeListType(''));
});

ava('ValidProjectTypeListStateType', t => {
    t.notThrows(() => ProjectTypeListStateType.is(ValidProjectTypeListStateType));
    t.throws(() => ProjectTypeListStateType(''));
});
