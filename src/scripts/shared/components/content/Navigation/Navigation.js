import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

/**
 * Enumeration for naviagtion link content.
 *
 * Should render test when the sidebar is expanded and icons when it is collapsed.
 *
 * @property LINK_CONTENT
 * @type {Object}
 * @final
 */
const LINK_CONTENT = {
    CLIENTS: {
        TEXT: 'Clients',
        ICON: <span className="entypo-users"></span>
    },
    CREATE_CLIENT: {
        TEXT: 'Create Client',
        ICON: <span className="entypo-user-add"></span>
    },
    PROJECTS: {
        TEXT: 'Projects',
        ICON: <span className="entypo-flow-cascade"></span>
    },
    PROJECT_TYPES: {
        TEXT: 'Project Types',
        ICON: <span className="entypo-book-open"></span>
    },
    TASK_ITEMS: {
        TEXT: 'Task Items',
        ICON: <span className="entypo-list"></span>
    },
    DASHBOARD: {
        TEXT: 'Dashboard',
        ICON: <span className="entypo-cog"></span>
    },
    LOGOUT: {
        TEXT: 'Logout',
        ICON: <span className="entypo-logout"></span>
    }
};

/**
 * @class Navigation
 * @extends React/Component
 */
export default class Navigation extends Component {
    /**
     * @method _composeTextOrIcon
     * @param  {String} linkName
     * @return {String|JSX}
     */
    _composeTextOrIcon(linkName) {
        return this.props.isCollapsed
            ? LINK_CONTENT[linkName].ICON
            : LINK_CONTENT[linkName].TEXT;
    }

    // TODO: abstract out to new component
    _composeNavigationItemLink(url, linkItem) {
        return (
            <Link
                to={ `/${url}` }
                className="navigation-item-link"
                activeClassName="navigation-item-link_isActive">
                { this._composeTextOrIcon(linkItem) }
            </Link>
        );
    }

    /**
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <div className="navigation">
                <ul>
                    <li className="navigation-item">
                        { this._composeNavigationItemLink('clients', 'CLIENTS') }
                        <ul>
                            <li className="navigation-item">
                                { this._composeNavigationItemLink('clients/create', 'CREATE_CLIENT') }
                            </li>
                        </ul>
                    </li>
                    <li className="navigation-item">
                        { this._composeNavigationItemLink('projects', 'PROJECTS') }
                    </li>
                    <li className="navigation-item">
                        { this._composeNavigationItemLink('projectTypes', 'PROJECT_TYPES') }
                    </li>
                    <li className="navigation-item">
                        { this._composeNavigationItemLink('taskItems', 'TASK_ITEMS') }
                    </li>
                    <li className="navigation-item">
                        {/* TODO: change link to 'dashboard' */}
                        { this._composeNavigationItemLink('login', 'DASHBOARD') }
                    </li>
                    <li className="navigation-item">
                        <a
                            className="navigation-item-link"
                            onClick={ this.onRequestToLogout }>
                            { this._composeTextOrIcon('LOGOUT') }
                        </a>
                    </li>
                </ul>
            </div>
        );
    }

    /**
     * @method onRequestToLogout
     * @param {React.SyntheticEvent} event
     * @return {Function}
     * @callback
     */
    onRequestToLogout = event => {
        event.preventDefault();

        console.log('onRequestToLogout');
    }
}

/**
 * @property displayName
 * @type {String}
 * @static
 */
Navigation.displayName = 'Navigation';

/**
 * @property propTypes
 * @type {Object}
 * @static
 */
Navigation.propTypes = {
    /**
     * FIXME: This boolean is getting coerced into a string somewhere
     *
     * @property isCollapsed
     * @type {Boolean}
     */
    isCollapsed: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};
