import ava from 'ava';

import {
    buildProjectCreationFormType
} from '../../../../../src/scripts/shared/domain/project/types/ProjectTypes';

import {
    ValidProjectTypeListType
} from '../../../../specHelper/fixtures/projectType/ProjectTypeTypes';

ava('buildProjectCreationFormType throws with invalid params', t => {
    t.throws(() => buildProjectCreationFormType());
    t.throws(() => buildProjectCreationFormType(''));
});

ava('buildProjectCreationFormType accepts a ProjectTypeListType as its only param', t => {
    t.notThrows(() => buildProjectCreationFormType(ValidProjectTypeListType));
});

ava('buildProjectCreationFormType returns a tcomb struct', t => {
    const result = buildProjectCreationFormType(ValidProjectTypeListType);

    t.truthy(typeof result === 'function');
    t.truthy(result.meta.kind === 'struct');
});
