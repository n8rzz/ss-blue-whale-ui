import ava from 'ava';
import nock from 'nock';

import {
    VALID_PROJECT_TYPE_CREATION_REQUEST,
    VALID_PROJECT_TYPE_API_RESPONSE
} from '../../../../specHelper/mocks/projectType/projectTypeMocks';
import {
    ProjectTypeType
} from '../../../../../src/scripts/shared/domain/projectType/types/ProjectTypeTypes';

import ProjectTypeRepository from '../../../../../src/scripts/shared/domain/projectType/repositories/ProjectTypeRepository';

ava('createProjectType returns a ProjectTypeType', async t => {
    const createProjectType = nock(global.NOCK_SCOPE)
        .post('/projectTypes')
        .reply(200, VALID_PROJECT_TYPE_API_RESPONSE);

    const response = await ProjectTypeRepository.createProjectType(VALID_PROJECT_TYPE_CREATION_REQUEST);

    t.truthy(createProjectType.isDone());
    t.truthy(response);
    t.truthy(ProjectTypeType.is(response));
});

ava('createProjectType completes request if there is a network error', async t => {
    const errorToThrow = new Error();
    const createProjectType = nock(global.NOCK_SCOPE)
        .post('/projectTypes')
        .reply(500, errorToThrow);

    const error = await ProjectTypeRepository.createProjectType(VALID_PROJECT_TYPE_CREATION_REQUEST)
        .then(() => false)
        .catch(response => response.status === 500);

    t.truthy(createProjectType.isDone());
    t.truthy(error);
});
