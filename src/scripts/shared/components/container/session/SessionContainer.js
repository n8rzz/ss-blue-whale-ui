import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSession } from '../../../domain/session/actions/SessionActions';
import FlashMessage from '../../content/FlashMessage/FlashMessage';
import Login from '../../content/Login/Login';

/**
 * @class SessionContainer
 * @extends React/Component
 */
class SessionContainer extends Component {
    /**
     * @for SessionContainer
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <div className="wrapper">
                <FlashMessage />

                <Login onCreateSession={ this.props.createSession }/>
            </div>
        );
    }
}

/**
 * @property displayName
 * @type {String}
 * @static
 */
SessionContainer.displayName = 'SessionContainer';

/**
 * @property propTypes
 * @type {Object}
 * @static
 */
SessionContainer.propTypes = {
    /**
     * @property createSession
     * @type {Function}
     * @required
     */
    createSession: PropTypes.func.isRequired
};

/**
 * @function mapStoreToProps
 * @param  {Object} state
 * @return {Object}
 */
const mapStoreToProps = state => ({
    sessionErrors: state.session.errors
});

/**
 * @function mapDispatchToProps
 * @param {Function} dispatch
 * @return {Object}
 */
const mapDispatchToProps = dispatch => ({
    createSession: sessionRequest => dispatch(createSession(sessionRequest))
});

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(SessionContainer);
