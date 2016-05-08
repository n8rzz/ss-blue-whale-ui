import ava from 'ava';
import nock from 'nock';
// import {
//     ProjectTypeType
// } from '../../../../../src/scripts/shared/domain/projectType/types/ProjectTypeTypes';

import ProjectTypeRepository from '../../../../../src/scripts/shared/domain/projectType/repositories/ProjectTypeRepository';

const PROJECT_TYPE_ID = 1;

ava('removeProjectType returns a ProjectTypeType', async t => {
    const removeProjectType = nock(global.NOCK_SCOPE)
        .delete('/projectTypes/1')
        .reply(204);

    const response = await ProjectTypeRepository.removeProjectType(PROJECT_TYPE_ID);

    t.ok(removeProjectType.isDone());
    t.ok(response);
});

ava('removeProjectType completes request if there is a network error', async t => {
    const errorToThrow = new Error();
    const removeProjectType = nock(global.NOCK_SCOPE)
        .delete('/projectTypes/1')
        .reply(500, errorToThrow);

    const error = await ProjectTypeRepository.removeProjectType(PROJECT_TYPE_ID)
        .then(() => false)
        .catch(response => response.status === 500);

    t.ok(removeProjectType.isDone());
    t.ok(error);
});
