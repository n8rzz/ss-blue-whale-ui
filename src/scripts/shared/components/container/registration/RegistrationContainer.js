import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../../domain/registration/actions/RegistrationActions';

/**
 * @class RegistrationContainer
 * @extends React/Component
 */
class RegistrationContainer extends Component {
    /**
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <div className="wrapper">
                { this.props.children }
            </div>
        );
    }
}

/**
 * @property displayName
 * @type {string}
 * @static
 */
RegistrationContainer.displayName = 'RegistrationContainer';

/**
 * @property propTypes
 * @type {Object}
 * @static
 */
RegistrationContainer.propTypes = {
    /**
     * @property children
     * @type {node}
     */
    children: PropTypes.node,

    /**
     * @property createUser
     * @type {Function}
     * @required
     */
    createUser: PropTypes.func.isRequired
};

/**
 * @method mapStoreToProps
 * @param  state {Object}
 * @return {Function}
 */
const mapStoreToProps = state => ({});

/**
 * @method mapDispatchToProps
 * @param  dispatch {Function}
 * @return {Function}
 */
const mapDispatchToProps = dispatch => ({
    createUser: registrationRequest => dispatch(createUser(registrationRequest))
});

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(RegistrationContainer);
