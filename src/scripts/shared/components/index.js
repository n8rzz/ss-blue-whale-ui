import React, { Component, PropTypes } from 'react';
import Sidebar from './content/Sidebar/Sidebar';

/**
 * React entry component
 * All other components will inherit from this component
 *
 * @class  App
 */
export class App extends Component {
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

export default App;
