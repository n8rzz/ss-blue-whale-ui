/* eslint new-cap: 0 */
import ava from 'ava';

import {
    ProjectCreationType,
    ProjectType,
    ProjectStateType,
    ProjectListStateType
} from '../../../../../src/scripts/shared/domain/project/types/ProjectTypes';

import {
    VALID_PROJECT_CREATION_REQUEST,
    VALID_PROJECT_RESPONSE
} from '../../../../specHelper/mocks/project/ProjectMocks';

import {
    ValidProjectCreationRequest,
    ValidProjectType,
    ValidProjectStateType,
    ValidProjectListStateType
} from '../../../../specHelper/fixtures/project/ProjectFixtures';

ava('ProjectCreationType', t => {
    t.throws(() => new ProjectCreationType(''));

    t.notThrows(() => new ProjectCreationType(VALID_PROJECT_CREATION_REQUEST));
    t.truthy(ProjectCreationType.is(ValidProjectCreationRequest));
});

ava('ProjectType', t => {
    t.throws(() => new ProjectType(''));

    t.notThrows(() => new ProjectType(VALID_PROJECT_RESPONSE));
    t.truthy(ProjectType.is(ValidProjectType));
});

ava('ProjectStateType', t => {
    t.throws(() => ProjectStateType(''));

    t.truthy(ProjectStateType.is(ValidProjectStateType));
});

ava('ProjectListStateType', t => {
    t.throws(() => ProjectListStateType(''));

    t.truthy(ProjectListStateType.is(ValidProjectListStateType));
});
