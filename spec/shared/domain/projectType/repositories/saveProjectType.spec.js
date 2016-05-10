import ava from 'ava';
import nock from 'nock';
import {
    VALID_PROJECT_TYPE_API_RESPONSE
} from '../../../../specHelper/mocks/projectType/projectTypeMocks';

import {
    ProjectTypeType
} from '../../../../../src/scripts/shared/domain/projectType/types/ProjectTypeTypes';

import ProjectTypeRepository from '../../../../../src/scripts/shared/domain/projectType/repositories/ProjectTypeRepository';

const PROJECT_TYPE_ID = 2;

ava('saveProjectType returns a ProjectTypeType', async t => {
    const saveProjectType = nock(global.NOCK_SCOPE)
        .put('/projectTypes/2')
        .reply(200, VALID_PROJECT_TYPE_API_RESPONSE);

    const response = await ProjectTypeRepository.saveProjectType(PROJECT_TYPE_ID, VALID_PROJECT_TYPE_API_RESPONSE);

    t.ok(saveProjectType.isDone());
    t.ok(response);
    t.ok(ProjectTypeType.is(response));
});

ava('saveProjectType completes request if there is a network error', async t => {
    const errorToThrow = new Error();
    const saveProjectType = nock(global.NOCK_SCOPE)
        .put('/projectTypes/2')
        .reply(500, errorToThrow);

    const error = await ProjectTypeRepository.saveProjectType(PROJECT_TYPE_ID, VALID_PROJECT_TYPE_API_RESPONSE)
        .then(() => false)
        .catch(response => response.status === 500);

    t.ok(saveProjectType.isDone());
    t.ok(error);
});
