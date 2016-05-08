import t from 'tcomb';
import { BaseStateType } from '../../BaseTypes';

/**
 * @type ClientContactCreationType
 * @return {ClientContactCreationType}
 */
export const ClientContactCreationType = t.struct({
    name: t.String,
    position: t.maybe(t.String),
    businessPhone: t.maybe(t.String),
    mobilePhone: t.maybe(t.String),
    email: t.maybe(t.String)
}, 'ClientContactCreationType');

/**
 * @type ClientContactType
 * @return {ClientContactType}
 */
export const ClientContactType = ClientContactCreationType.extend({
    id: t.Number
}, 'ClientContactType');

/**
 * @type ClientContactListType
 * @return {ClientContactListType}
 */
export const ClientContactListType = t.list(ClientContactType, 'ClientContactListType');

/**
 * @type ClientContactListStateType
 * @return {ClientContactListStateType}
 */
export const ClientContactListStateType = BaseStateType.extend({
    payload: t.maybe(ClientContactListType)
}, 'ClientContactListStateType');

/**
 * @type ClientContactStateType
 * @return {ClientContactStateType}
 */
export const ClientContactStateType = BaseStateType.extend({
    payload: t.maybe(ClientContactType)
}, 'ClientContactStateType');
