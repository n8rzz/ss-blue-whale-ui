import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { destroySession } from '../domain/session/actions/SessionActions';
import Sidebar from './content/Sidebar/Sidebar';

/**
 * React entry component
 * All other components will inherit from this component
 *
 * @class  App
 */
export default class App extends Component {
    /**
     * @method  render
     * @return {JSX}
     */
    render() {
        return (
            <div className="page">
                <Sidebar
                    onRequestToLogout={ this.props.destroySession }/>

                <div className="page-bd">
                    { this.props.children }
                </div>
            </div>
        );
    }
}

/**
 * @props displayName
 * @type {String}
 * @static
 */
App.displayName = 'App';

/**
 * @property {Object} propTypes
 * @type {Object}
 * @static
 */
App.propTypes = {
    /**
     * @property children
     * @type Object
     */
    children: PropTypes.object,

    /**
     * @property sessionErrors
     * @type {Object}
     */
    sessionErrors: PropTypes.object,

    /**
     * @property destroySession
     * @type {Function}
     */
    destroySession: PropTypes.func
};

/**
 * @method mapStoreToProps
 * @param  {Object} state
 * @return {Function}
 */
const mapStoreToProps = state => ({
    sessionErrors: state.session.errors
});

/**
 * @method mapDispatchToProps
 * @param  {Function} dispatch
 * @return {Function}
 */
const mapDispatchToProps = dispatch => ({
    destroySession: () => dispatch(destroySession())
});

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(App);
