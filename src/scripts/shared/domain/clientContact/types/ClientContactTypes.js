import t from 'tcomb';
import { BaseStateType } from '../../baseTypes/BaseTypes';

/**
 * @type ClientContactCreationType
 * @return {ClientContactCreationType}
 */
export const ClientContactCreationType = t.struct({
    name: t.String,
    position: t.maybe(t.String),
    businessPhone: t.maybe(t.String),
    mobilePhone: t.maybe(t.String),
    email: t.maybe(t.String),
    client_id: t.maybe(t.Number)
}, 'ClientContactCreationType');

/**
 * Allow for a prototype method to call .update on a ClientContactCreationType instance.
 *
 * @method updateClientId
 * @param  {ClientContactCreationType} current
 * @param  {Number} clientId
 * @return {ClientContactCreationType}
 */
const updateClientId = (current, clientId) => ClientContactCreationType.update(
    current,
    {
        $merge: {
            client_id: clientId
        }
    }
);


/**
 * Add a client_id to an existing ClientContactCreationType
 *
 * @method addClientIdToContact
 * @param {Number} client_id
 * @return {ClientContactCreationType}
 */
ClientContactCreationType.prototype.addClientIdToContact = function clientContactCreationTypeAddClientIdToContact(clientId) {
    // We need access to the .update method of tcomb struct. This provides a way to encapsulate the update logic
    // inside of an instance's own prototype.
    return updateClientId(this, clientId);
};

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
