import {
    VALID_PROJECT_TYPE_CREATION_REQUEST,
    VALID_PROJECT_TYPE_API_RESPONSE,
    VALID_PROJECT_TYPE_LIST_API_RESPONSE
} from '../../mocks/projectType/projectTypeMocks';

import {
    VALID_BASE_STATE_TYPE
} from '../../mocks/baseTypes/BaseTypes';

import {
    ProjectTypeCreationType,
    ProjectTypeType,
    ProjectTypeListType,
    ProjectTypeListStateType,
    ProjectTypeStateType
} from '../../../../src/scripts/shared/domain/projectType/types/ProjectTypeTypes';

export const ValidProjectTypeCreationType = new ProjectTypeCreationType(VALID_PROJECT_TYPE_CREATION_REQUEST);

export const ValidProjectTypeType = new ProjectTypeType(VALID_PROJECT_TYPE_API_RESPONSE);

export const ValidProjectTypeListType = new ProjectTypeListType(VALID_PROJECT_TYPE_LIST_API_RESPONSE);

export const ValidProjectTypeListStateType = new ProjectTypeListStateType({
    ...VALID_BASE_STATE_TYPE,
    payload: ValidProjectTypeListType
});

export const ValidProjectTypeStateType = new ProjectTypeStateType({
    ...VALID_BASE_STATE_TYPE,
    payload: ValidProjectTypeType
});
