import t from 'tcomb';

const REGEX = {
    UUID: /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/
};

export const Positive = t.refinement(t.Number, v => v > 0, 'Positive');

export const UUID = t.refinement(t.String, s =>
    REGEX.UUID.test(s), 'UUID'
);

/**
 * @property ErrorType
 * @type ErrorType
 * @return {ErrorType}
 */
export const ErrorType = t.struct({
    data: t.Object,
    status: t.Number,
    statusText: t.String
}, 'ErrorType');

/**
 * @property BaseStateType
 * @type BaseStateType
 * @return {BaseStateType}
 */
export const BaseStateType = t.struct({
    isLoading: t.Boolean,
    errors: t.maybe(t.Object)
}, 'BaseStateType');
