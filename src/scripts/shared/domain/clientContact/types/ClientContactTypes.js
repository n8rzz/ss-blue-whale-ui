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
 * @type ClientContactCreationRequestType
 * @return {ClientContactCreationRequestType}
 */
export const ClientContactCreationRequestType = ClientContactCreationType.extend({
    client_id: t.Number
}, 'ClientContactCreationRequestType');

/**
 * @method buildRequestParams
 * @extends ClientContactCreationType
 * @param  {Number} clientId
 * @param  {ClientContactCreationType} clientContact
 * @return {ClientContactCreationRequestType}
 */
ClientContactCreationType.buildRequestParams = (clientId, clientContact) => {
    if (t.Nil.is(clientId)) {
        throw new TypeError('Missing ClientId.  Invalid parameters.');
    }

    if (t.Nil.is(clientContact) || !ClientContactCreationType.is(clientContact)) {
        throw new TypeError('ClientContact must be a `ClientContactCreationType`');
    }

    const creationRequest = Object.assign(
        { ...clientContact },
        {
            client_id: clientId
        }
    );

    return new ClientContactCreationRequestType(creationRequest);
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
