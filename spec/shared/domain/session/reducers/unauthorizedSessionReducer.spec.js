import ava from 'ava';

import { UNAUTHORIZED_SESSION } from '../../../../../src/scripts/shared/domain/session/actions/SessionActions';
import reducer from '../../../../../src/scripts/shared/domain/session/reducers/sessionReducer';

const errorToThrow = { data: {}, status: 401, statusText: 'Unauthorized' };

ava('unauthorizedSession reducer sets errors as `errors`', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: UNAUTHORIZED_SESSION,
            errors: errorToThrow
        });
    });

    const reducerState = reducer(undefined, {
        type: UNAUTHORIZED_SESSION,
        errors: errorToThrow
    });

    t.is(reducerState.errors, errorToThrow);
});
