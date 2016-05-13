import React, { Component, PropTypes } from 'react';
import Navigation from './Navigation/Navigation';

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
                <div className="page-hd">
                    <Navigation />
                    </div>
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
