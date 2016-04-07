/* eslint-disable */
import ava from 'ava';
import t from 'tcomb';
import Fixtures from '../../specHelper/fixtures';

import { Positive, UUID } from '../../../src/scripts/shared/domain/BaseTypes';

ava('UUID accepts only a valid UUID format', test => {
    test.is(
        UUID(Fixtures.baseType.VALID_UUID),
        Fixtures.baseType.VALID_UUID
    );

    test.throws(() => UUID(Fixtures.baseType.INVALID_UUID));
});

ava('Positive refinement is a number greater than 0', test => {
    test.is(Positive(13), 13);

    test.notThrows(() => Positive(Fixtures.baseType.VALID_POSITIVE));

    test.throws(() => Positive(Fixtures.baseType.INVALID_POSITIVE));
});
