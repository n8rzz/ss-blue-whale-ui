import t from 'tcomb';

const REGEX = {
    UUID: /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/
};

export const Positive = t.refinement(t.Number, v => v > 0, 'Positive');

export const UUID = t.refinement(t.String, s =>
    REGEX.UUID.test(s), 'UUID'
);
