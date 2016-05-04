import t from 'tcomb';
import { BaseStateType } from '../../BaseTypes';

/**
 * @type ClientCreationType
 * @return {ClientCreationType}
 */
export const ClientCreationType = t.struct({
    name: t.String,
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

/**
 * ClientType definition
 *
 * @type ClientType
 * @return {Client}
 */
export const ClientType = ClientCreationType.extend({
    id: t.Number
}, 'ClientType');

/**
 * ClientListType definition
 *
 * @type ClientListType
 * @return {ClientListType}
 */
export const ClientListType = t.list(ClientType, 'ClientListType');

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
