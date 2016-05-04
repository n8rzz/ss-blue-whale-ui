import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

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
            <div>
                <ul>
                    <li>
                        <Link to="/clients">Clients</Link>
                        <ul>
                            <li>
                                <Link to="/clients/create">Create Client</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/projectTypes">Project Types</Link>
                    </li>
                    <li>
                        <Link to="/taskItems">Task Items</Link>
                    </li>
                </ul>
                { this.props.children }
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
