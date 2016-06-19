import ava from 'ava';

import {
    reduceListToIdNameEnumeration
} from '../../../../src/scripts/shared/lib/formHelpers/reduceListToIdNameEnumeration';

const INITIAL_ARRAY = [
    {
        id: 1,
        otherId: 1234,
        name: 'First Name',
        value: 'First Value'
    },
    {
        id: 2,
        otherId: 2345,
        name: 'Second Name',
        value: 'Second Value'
    }
];

ava('reduceListToIdNameEnumeration accepts an array of objects as the first paramater', t => {
    t.throws(() => reduceListToIdNameEnumeration(''));
    t.throws(() => reduceListToIdNameEnumeration({}));

    t.notThrows(() => reduceListToIdNameEnumeration([]));
});

ava('reduceListToIdNameEnumeration returns a single object made up of { id: name } from an array of objects', t => {
    const expectedResult = {
        1: 'First Name',
        2: 'Second Name'
    };

    const result = reduceListToIdNameEnumeration(INITIAL_ARRAY);

    t.deepEqual(result, expectedResult);
});

ava('reduceListToIdNameEnumeration returns a single object made up of a key/values passed in as params', t => {
    const expectedResult = {
        1234: 'First Value',
        2345: 'Second Value'
    };

    const result = reduceListToIdNameEnumeration(INITIAL_ARRAY, 'otherId', 'value');

    t.deepEqual(result, expectedResult);
});
