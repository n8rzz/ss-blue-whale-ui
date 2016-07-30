import ava from 'ava';
import nock from 'nock';

import {
    VALID_REGISTRATION_REQUEST,
    VALID_REGISTRATION_RESPONSE
} from '../../../../specHelper/mocks/registration/registrationMocks';
import {
    RegistrationResponseType
} from '../../../../../src/scripts/shared/domain/registration/types/RegistrationTypes';

import RegistrationRepository from '../../../../../src/scripts/shared/domain/registration/repositories/RegistrationRepository';

ava('createUser returns a RegistrationResponseType', async t => {
    const createUser = nock(global.NOCK_SCOPE)
        .post('/users', VALID_REGISTRATION_REQUEST)
        .reply(200, VALID_REGISTRATION_RESPONSE);

    const response = await RegistrationRepository.createUser(VALID_REGISTRATION_REQUEST);

    t.truthy(createUser.isDone());
    t.truthy(response);
    t.truthy(RegistrationResponseType.is(response));
});

ava('createUser completes request if there is a network error', async t => {
    const errorToThrow = new Error();
    const createUser = nock(global.NOCK_SCOPE)
        .post('/users')
        .reply(500, errorToThrow);

    const error = await RegistrationRepository.createUser(VALID_REGISTRATION_REQUEST)
        .then(() => false)
        .catch(response => response.status === 500);

    t.truthy(createUser.isDone());
    t.truthy(error);
});
