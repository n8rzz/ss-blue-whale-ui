import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createClient } from '../../domain/client/actions/ClientSingleActions';
import ClientCreate from '../../content/Client/Create/ClientCreate';

/**
 * @class ClientCreateContainer
 * @extends React/Component
 */
class ClientCreateContainer extends Component {
    /**
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <div>
                <ClientCreate
                    onCreateClient={ this.onCreateClient }/>
            </div>
        );
    }

    /**
     * @method onCreateClient
     * @param {ClientCreateionType} formValues
     * @callback
     */
    onCreateClient = (formValues) => {
        this.props.createClient(formValues)
    }
}

/**
 * @props displayName
 * @type {String}
 */
ClientCreateContainer.displayName = 'ClientCreateContainer';

/**
 * @property propTypes
 * @type {Object}
 * @static
 */
ClientCreateContainer.propTypes = {
    /**
     * @property createClient
     * @type {Function}
     */
    createClient: PropTypes.func
};

/**
 * @function mapStoreToProps
 * @return {Object}
 */
const mapStoreToProps = () => ({});

/**
 * @function mapDispatchToProps
 * @return {Object}
 */
const mapDispatchToProps = (dispatch) => {
    return {
        createClient: (formValues) => dispatch(createClient(formValues))
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(ClientCreateContainer);
