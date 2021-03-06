/* eslint new-cap: 0 */
import ava from 'ava';

import {
    ProjectCreationRequestType,
    ProjectPreviewType,
    ProjectType,
    ProjectListType,
    ProjectStateType,
    ProjectListStateType
} from '../../../../../src/scripts/shared/domain/project/types/ProjectTypes';

import {
    VALID_PROJECT_CREATION_REQUEST,
    VALID_PROJECT_RESPONSE,
    VALID_PROJECT_LIST_RESPONSE
} from '../../../../specHelper/mocks/project/projectMocks';

import {
    ValidProjectCreationRequestType,
    ValidProjectPreviewType,
    ValidProjectType,
    ValidProjectListType,
    ValidProjectStateType,
    ValidProjectListStateType
} from '../../../../specHelper/fixtures/project/ProjectFixtures';

ava('ProjectCreationRequestType', t => {
    t.throws(() => new ProjectCreationRequestType(''));

    t.notThrows(() => new ProjectCreationRequestType(VALID_PROJECT_CREATION_REQUEST));
    t.truthy(ProjectCreationRequestType.is(ValidProjectCreationRequestType));
});

ava('ProjectPreviewType', t => {
    t.throws(() => new ProjectPreviewType(''));

    t.notThrows(() => new ProjectPreviewType(VALID_PROJECT_RESPONSE));
    t.truthy(ProjectPreviewType.is(ValidProjectPreviewType));
});

ava('ProjectType', t => {
    t.throws(() => new ProjectType(''));

    t.notThrows(() => new ProjectType(VALID_PROJECT_RESPONSE));
    t.truthy(ProjectType.is(ValidProjectType));
});

ava('ProjectListType', t => {
    t.throws(() => new ProjectListType(''));

    t.notThrows(() => new ProjectListType(VALID_PROJECT_LIST_RESPONSE));
    t.truthy(ProjectListType.is(ValidProjectListType));
});

ava('ProjectStateType', t => {
    t.throws(() => ProjectStateType(''));

    t.truthy(ProjectStateType.is(ValidProjectStateType));
});

ava('ProjectListStateType', t => {
    t.throws(() => ProjectListStateType(''));

    t.truthy(ProjectListStateType.is(ValidProjectListStateType));
});
