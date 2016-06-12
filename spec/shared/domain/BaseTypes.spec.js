/* eslint-disable */
import ava from 'ava';
import tcomb from 'tcomb';

import {
    Positive,
    ErrorType,
    BaseStateType,
    TypeOrNull
} from '../../../src/scripts/shared/domain/baseTypes/BaseTypes';

import {
    VALID_POSITIVE,
    INVALID_POSITIVE,
    VALID_ERROR_RESPONSE,
    VALID_BASE_STATE_TYPE,
    INVALID_BASE_STATE_TYPE
} from '../../specHelper/mocks/baseTypes/BaseTypes';

ava('Positive refinement is a number greater than 0', t => {
    t.is(Positive(13), 13);

    t.notThrows(() => Positive(VALID_POSITIVE));
    t.throws(() => Positive(INVALID_POSITIVE));
});

ava('ErrorType', t => {
    t.truthy(new ErrorType(VALID_ERROR_RESPONSE));

    t.throws(() => new ErrorType(''));
});

ava('BaseStateType', t => {
    t.truthy(new BaseStateType(VALID_BASE_STATE_TYPE));

    t.throws(() => new BaseStateType(INVALID_BASE_STATE_TYPE));
});
