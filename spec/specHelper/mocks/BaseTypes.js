import faker from 'faker';

export const VALID_POSITIVE = 12345;
export const INVALID_POSITIVE = -345;

export const VALID_UUID = faker.random.uuid();
export const INVALID_UUID = faker.random.number();

export const VALID_BASE_STATE_TYPE = {
    isLoading: true,
    errors: null
};

export const INVALID_BASE_STATE_TYPE = {
    isLoading: 'true',
    errors: false
};
