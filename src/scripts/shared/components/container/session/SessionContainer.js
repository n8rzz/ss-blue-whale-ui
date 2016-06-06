import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import t from 'tcomb';
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
     * @method _composeErrors
     * @return {JSX}
     */
    _composeErrors() {
        if (t.Nil.is(this.props.sessionErrors)) {
            return null;
        }

        return (
            <FlashMessage
                type="error"
                content={ this.props.sessionErrors.statusText }/>
        );
    }

    /**
     * @for SessionContainer
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <div className="wrapper">
                { this._composeErrors() }

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
     * Any errors encountered while creating a new session
     *
     * @property sessionErrors
     * @type {Object}
     */
    sessionErrors: PropTypes.object,

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
