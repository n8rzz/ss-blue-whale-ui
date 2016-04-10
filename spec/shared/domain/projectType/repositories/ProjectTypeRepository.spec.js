import ava from 'ava';
import nock from 'nock';

import { VALID_PROJECT_TYPE_LIST_API_RESPONSE } from '../../../../specHelper/mocks/projectType/projectTypeMocks';
import { ProjectTypeListType } from '../../../../../src/scripts/shared/domain/projectType/types/ProjectTypeTypes';

import ProjectTypeRepository from '../../../../../src/scripts/shared/domain/projectType/repositories/ProjectTypeRepository';

ava('getProjectTypeList returns a ProjectTypeListType', async t => {
    const getProjectTypeList = nock(global.NOCK_SCOPE)
        .get('/project_types')
        .reply(200, VALID_PROJECT_TYPE_LIST_API_RESPONSE);

    const response = await ProjectTypeRepository.getProjectTypeList();

    t.ok(getProjectTypeList.isDone());
    t.ok(response);
    t.ok(ProjectTypeListType.is(response));
});

ava('getProjectTypeList completes request if there is a network error', async t => {
    const errorToThrow = new Error();
    const getProjectTypeList = nock(global.NOCK_SCOPE)
        .get('/project_types')
        .reply(500, errorToThrow);

    const error = await ProjectTypeRepository.getProjectTypeList()
        .then(() => false)
        .catch(response => response.status === 500);

    t.ok(getProjectTypeList.isDone());
    t.ok(error);
});
