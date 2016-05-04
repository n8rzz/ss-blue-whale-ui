import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getClientList } from '../../domain/client/actions/ClientListActions';
import ClientList from '../../content/Client/ClientList';

/**
 * React entry component
 * All other components will inherit from this component
 *
 * @class ClientListContainer
 */
export class ClientListContainer extends Component {
    /**
     * @method  render
     * @return {JSX}
     */
    render() {
        return (
            <div>
                <ClientList clients={ this.props.clients } />
            </div>
        );
    }
}

/**
 * @props displayName
 * @type {String}
 */
ClientListContainer.displayName = 'ClientListContainer';

/**
 * @property {Object} propTypes
 * @type {Object}
 * @static
 */
ClientListContainer.propTypes = {
    /**
     * @props clients
     * @type {ClientListType|Array}
     */
    clients: PropTypes.array
};

/**
 * @method mapStateToProps
 * @param {Object} state
 * @return {Object}
 */
function mapStateToProps(state) {
    return {
        clients: state.clients.payload
    };
}

/**
 * @method mapDispatchToProps
 * @param {Object} dispatch
 * @return {Object}
 */
function mapDispatchToProps(dispatch) {
    return {
        clients: dispatch(getClientList())
    };
}

/**
 * @method mergeProps
 * @param {Object} state
 * @param {Object} dispatch
 * @param {Object} ownProps
 * @return {Object}
 */
function mergeProps(state, dispatch, ownProps) {
    return Object.assign({}, state, ownProps);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(ClientListContainer);
