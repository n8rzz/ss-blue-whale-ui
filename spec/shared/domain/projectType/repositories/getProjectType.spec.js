import ava from 'ava';
import nock from 'nock';

import {
    VALID_PROJECT_TYPE_API_RESPONSE
} from '../../../../specHelper/mocks/projectType/projectTypeMocks';
import {
    ProjectTypeType
} from '../../../../../src/scripts/shared/domain/projectType/types/ProjectTypeTypes';

import ProjectTypeRepository from '../../../../../src/scripts/shared/domain/projectType/repositories/ProjectTypeRepository';

const PROJECT_TYPE_ID = VALID_PROJECT_TYPE_API_RESPONSE.id;

ava('getProjectType returns a ProjectTypeType', async t => {
    const getProjectType = nock(global.NOCK_SCOPE)
        .get('/projectTypes/2')
        .reply(200, VALID_PROJECT_TYPE_API_RESPONSE);

    const response = await ProjectTypeRepository.getProjectType(PROJECT_TYPE_ID);

    t.ok(getProjectType.isDone());
    t.ok(response);
    t.ok(ProjectTypeType.is(response));
});

ava('getProjectType completes request if there is a network error', async t => {
    const errorToThrow = new Error();
    const getProjectType = nock(global.NOCK_SCOPE)
        .get('/projectTypes/2')
        .reply(500, errorToThrow);

    const error = await ProjectTypeRepository.getProjectType(PROJECT_TYPE_ID)
        .then(() => false)
        .catch(response => response.status === 500);

    t.ok(getProjectType.isDone());
    t.ok(error);
});
