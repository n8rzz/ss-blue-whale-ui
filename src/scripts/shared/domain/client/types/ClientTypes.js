import t from 'tcomb';
import { BaseStateType } from '../../BaseTypes';
import { ClientContactType } from '../../clientContact/types/ClientContactTypes';
import { NoteType } from '../../note/types/NoteTypes';

/**
 * @type ClientCreationType
 * @return {ClientCreationType}
 */
export const ClientCreationType = t.struct({
    name: t.String,
    // TODO: replace with enum
    status: t.String,
    address_1: t.maybe(t.String),
    address_2: t.maybe(t.String),
    city: t.maybe(t.String),
    state: t.maybe(t.String),
    zip: t.maybe(t.String),
    // TODO: create refinement for phone number
    fax: t.maybe(t.String),
    phone: t.maybe(t.String),
    // TODO: create refinement for email address
    email: t.maybe(t.String),
    // TODO create refinement for urls
    website: t.maybe(t.String)
}, 'ClientCreationType');

export const ClientPreviewType = ClientCreationType.extend({
    id: t.Number
}, 'ClientPreviewType');

/**
 * ClientType definition
 *
 * @type ClientType
 * @extends ClientCreationType
 * @return {ClientType}
 */
export const ClientType = ClientCreationType.extend({
    id: t.Number,
    client_contacts: t.list(t.maybe(ClientContactType)),
    notes: t.list(t.maybe(NoteType))
}, 'ClientType');

/**
 * ClientListType definition
 *
 * @type ClientListType
 * @return {ClientListType}
 */
export const ClientListType = t.list(ClientPreviewType, 'ClientListType');

/**
 * ClientListStateType used in the `ClientListReducer`
 *
 * @extends BaseStateType
 * @return {ClientListStateType}
 */
export const ClientListStateType = BaseStateType.extend({
    payload: t.maybe(ClientListType)
}, 'ClientListStateType');

/**
 * ClientType used in the `ClientSingleReducer`
 *
 * @extends BaseStateType
 * @return {ClientType}
 */
export const ClientStateType = BaseStateType.extend({
    payload: t.maybe(ClientType)
}, 'ClienStateType');
