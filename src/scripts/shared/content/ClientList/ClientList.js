import React, { Component, PropTypes } from 'react';
import { map as _map } from 'lodash';

/**
 * @class ClientList
 */
class ClientList extends Component {
    /**
     * @method _composeClientList
     * @return {JSX}
     */
    _composeClientList() {
        return _map(this.props.clients, (client, index) => {
            return (
                <li key={index}>
                    <h2>{ client.name }</h2>
                    <div>
                        { client.address_1 }<br />
                        { client.address_2 }<br />
                        { `${client.city}, ${client.state} ${client.zip}` }
                    </div>
                </li>
            );
        });
    }

    /**
     * @method render
     * @return {JSX}
     */
    render() {
        if (this.props.clients.length === 0) {
            return null;
        }

        return (
            <ul>
                { this._composeClientList() }
            </ul>
        );
    }
}

/**
 * @property displayName
 * @type {String}
 * @static
 */
ClientList.displayName = 'ClientList';

/**
 * @property propTypes
 * @type {Object}
 * @static
 */
ClientList.propTypes = {
    /**
     * @props clients
     * @type {ClientListType}
     * @required
     */
    clients: PropTypes.array.isRequired
};

export default ClientList;
