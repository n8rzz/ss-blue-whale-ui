import ava from 'ava';
import nock from 'nock';

import {
    VALID_PROJECT_CREATION_REQUEST,
    VALID_PROJECT_RESPONSE
} from '../../../../specHelper/mocks/project/projectMocks';
import {
    // ClientCreationType,
    ProjectType
} from '../../../../../src/scripts/shared/domain/project/types/ProjectTypes';

import ProjectRepository from '../../../../../src/scripts/shared/domain/project/repositories/ProjectRepository';

ava('createProject returns a ProjectType', async t => {
    const createProject = nock(global.NOCK_SCOPE)
        .post('/projects')
        .reply(200, VALID_PROJECT_RESPONSE);

    const response = await ProjectRepository.createProject(VALID_PROJECT_CREATION_REQUEST);

    t.truthy(createProject.isDone());
    t.truthy(ProjectType.is(response));
});

ava('createProject completes request if there is a network error', async t => {
    const errorToThrow = new Error();
    const createProject = nock(global.NOCK_SCOPE)
        .post('/projects')
        .reply(500, errorToThrow);

    const error = await ProjectRepository.createProject(VALID_PROJECT_CREATION_REQUEST)
        .then(() => false)
        .catch(response => response.status === 500);

    t.truthy(createProject.isDone());
    t.truthy(error);
});
