import React, { Component } from 'react';
import { Link } from 'react-router';

/**
 * @class Navigation
 * @extends React/Component
 */
export default class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <ul>
                    <li className="navigation-item">
                        <Link className="navigation-item-link" to="/clients">Clients</Link>
                        <ul>
                            <li className="navigation-item">
                                <Link className="navigation-item-link" to="/clients/create">Create Client</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="navigation-item">
                        <Link className="navigation-item-link" to="/projects">Projects</Link>
                        <ul>
                            <li className="navigation-item">
                                <Link className="navigation-item-link" to="/projectTypes">Project Types</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="navigation-item">
                        <Link className="navigation-item-link" to="/taskItems">Tasks</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

/**
 * @property displayName
 * @type {String}
 * @static
 */
Navigation.displayName = 'Navigation';
