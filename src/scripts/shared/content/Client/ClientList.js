import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import _map from 'lodash/map';

/**
 * @class ClientList
 * @extends React/Component
 */
class ClientList extends Component {

    /**
     * @method _composeClientList
     * @return {JSX}
     */
    _composeClientList() {
        return _map(this.props.clients, (client, index) => {
            const singleClientLink = `/clients/${client.id}`;

            return (
                <li key={ index }>
                    <h2>
                        <Link to={ singleClientLink }>{ client.name }</Link>
                    </h2>
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
