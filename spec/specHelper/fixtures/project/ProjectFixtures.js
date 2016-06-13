import {
    ProjectCreationType,
    ProjectType,
    ProjectStateType,
    ProjectListStateType
} from '../../../../src/scripts/shared/domain/project/types/ProjectTypes';

import {
    VALID_BASE_STATE_TYPE
} from '../../mocks/baseTypes/BaseTypes';


import {
    VALID_PROJECT_CREATION_REQUEST,
    VALID_PROJECT_RESPONSE
} from '../../mocks/project/ProjectMocks';

export const ValidProjectCreationRequest = new ProjectCreationType(VALID_PROJECT_CREATION_REQUEST);

export const ValidProjectType = new ProjectType(VALID_PROJECT_RESPONSE);

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
