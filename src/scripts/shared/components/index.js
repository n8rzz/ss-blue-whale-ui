import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { destroySession } from '../domain/session/actions/SessionActions';
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
                <Sidebar />

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
     * @props children
     * @type Object
     */
    children: PropTypes.object
};
