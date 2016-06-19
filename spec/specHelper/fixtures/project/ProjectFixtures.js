import {
    ProjectCreationRequestType,
    ProjectPreviewType,
    ProjectType,
    ProjectListType,
    ProjectStateType,
    ProjectListStateType
} from '../../../../src/scripts/shared/domain/project/types/ProjectTypes';

import {
    VALID_BASE_STATE_TYPE
} from '../../mocks/baseTypes/BaseTypes';


import {
    VALID_PROJECT_CREATION_REQUEST,
    VALID_PROJECT_RESPONSE,
    VALID_PROJECT_LIST_RESPONSE
} from '../../mocks/project/ProjectMocks';

export const ValidProjectCreationRequestType = new ProjectCreationRequestType(VALID_PROJECT_CREATION_REQUEST);

export const ValidProjectPreviewType = new ProjectPreviewType(VALID_PROJECT_RESPONSE);

export const ValidProjectType = new ProjectType(VALID_PROJECT_RESPONSE);

export const ValidProjectListType = new ProjectListType(VALID_PROJECT_LIST_RESPONSE);

export const ValidProjectStateType = new ProjectStateType({
    ...VALID_BASE_STATE_TYPE,
    payload: ValidProjectType
});

export const ValidProjectListStateType = new ProjectListStateType({
    ...VALID_BASE_STATE_TYPE,
    payload: [
        ValidProjectType,
        ValidProjectType
    ]
});
