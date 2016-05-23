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
        ICON: <span className="entypo-list-add"></span>
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

    /**
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <div className="navigation">
                <ul>
                    <li className="navigation-item">
                        <Link
                            to="/clients"
                            className="navigation-item-link"
                            activeClassName="navigation-item-link_isActive">
                            { this._composeTextOrIcon('CLIENTS') }
                        </Link>
                        <ul>
                            <li className="navigation-item">
                                <Link
                                    className="navigation-item-link"
                                    to="/clients/create"
                                    activeClassName="navigation-item-link_isActive">
                                    { this._composeTextOrIcon('CREATE_CLIENT') }
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="navigation-item">
                        <Link
                            to="/projects"
                            className="navigation-item-link"
                            activeClassName="navigation-item-link_isActive">
                            { this._composeTextOrIcon('PROJECTS') }
                        </Link>
                    </li>
                    <li className="navigation-item">
                        <Link
                            to="/projectTypes"
                            className="navigation-item-link"
                            activeClassName="navigation-item-link_isActive">
                            { this._composeTextOrIcon('PROJECT_TYPES') }
                        </Link>
                    </li>
                    <li className="navigation-item">
                        <Link
                            to="/taskItems"
                            className="navigation-item-link"
                            activeClassName="navigation-item-link_isActive">
                            { this._composeTextOrIcon('TASK_ITEMS') }
                        </Link>
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
