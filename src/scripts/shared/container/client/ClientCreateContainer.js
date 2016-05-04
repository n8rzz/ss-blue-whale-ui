import React, { Component, PropTypes } from 'react';
import ClientCreate from '../../content/Client/Create/ClientCreate';

/**
 * @class ClientCreateContainer
 * @extends React/Component
 */
class ClientCreateContainer extends Component {
    render() {
        return (
            <div>
                ClientCreateContainer
                <ClientCreate />
            </div>
        );
    }
}

/**
 * @props displayName
 * @type {String}
 */
ClientCreateContainer.displayName = 'ClientCreateContainer';


export default ClientCreateContainer;
