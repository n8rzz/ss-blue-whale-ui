import t from 'tcomb';
import { BaseStateType } from '../../BaseTypes';

/**
 * ClientType definition
 *
 * @type ClientType
 * @return {Client}
 */
export const ClientType = t.struct({
    id: t.Number,
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
