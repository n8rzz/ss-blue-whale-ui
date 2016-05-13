import React, { Component } from 'react';
import { Link } from 'react-router';
/**
 * @class Navigation
 */
export default class Navigation extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>Dashboard</li>
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
                        <ul>
                            <li>
                                <Link to="/projectTypes">Project Types</Link>
                                <ul>
                                    <li>
                                        <Link to="/projectTypes/create">Create Project Type</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/taskItems">Task Items</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}
