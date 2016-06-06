import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../../domain/registration/actions/RegistrationActions';
import CreateUser from '../../content/Registration/CreateUser';

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
                <CreateUser
                    userErrors={ this.props.userErrors }
                    onCreateUser={ this.props.createUser }/>
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
     * @property userErrors
     * @type {Object}
     */
    userErrors: PropTypes.object,

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
const mapStoreToProps = state => ({
    userErrors: state.createUser.errors
});

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
