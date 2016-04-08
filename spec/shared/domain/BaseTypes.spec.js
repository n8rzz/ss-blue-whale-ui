/* eslint-disable */
import ava from 'ava';
import t from 'tcomb';

import {
    VALID_POSITIVE,
    INVALID_POSITIVE
} from '../../specHelper/mocks/BaseTypes';

import { Positive } from '../../../src/scripts/shared/domain/BaseTypes';

ava('Positive refinement is a number greater than 0', t => {
    t.is(Positive(13), 13);

    t.notThrows(() => Positive(VALID_POSITIVE));
    t.throws(() => Positive(INVALID_POSITIVE));
});
