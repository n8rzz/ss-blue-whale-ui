import React, { Component, PropTypes } from 'react';
import classNames  from 'classNames';
import SidebarTrigger from './SidebarTrigger';
import Navigation from '../../content/Navigation/Navigation';

const STORAGE_ITEM = 'sidebar-isCollapsed';

/**
 * @class Siebar
 * @extends React/Component
 */
export default class Sidebar extends Component {
    /**
     * @for Sidebar
     * @constructor
     * @param {Object} props
     */
    constructor(props) {
        super(props);

        const stateUpdates = {};

        stateUpdates.isCollapsed = false;
        if (localStorage.getItem(STORAGE_ITEM)) {
            const storedIsCollapsed = localStorage.getItem(STORAGE_ITEM) === 'true'
                ? true :
                localStorage.getItem(STORAGE_ITEM) === 'false'
                    ? false :
                    null;

            stateUpdates.isCollapsed = storedIsCollapsed;
        }

        this.state = stateUpdates;
    }

    /**
     * @for Sidebar
     * @method buildClassNames
     * @return {Function|String} classNames
     */
    buildClassNames() {
        return classNames({
            sidebar: true,
            'mix-sidebar_collapsed': this.state.isCollapsed
        });
    }

    /**
     * @for Sidebar
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <div className={ this.buildClassNames() }>
                <div className="sidebar-hd">
                    <button>DASHBOARD</button>
                </div>

                <div className="sidebar-bd">
                    <Navigation isCollapsed={ this.state.isCollapsed } />
                </div>

                <div className="sidebar-ft">
                    <SidebarTrigger onToggleSidebar={ this.onToggleSidebar } />
                </div>

            </div>
        );
    }

    /**
     * @for Sidebar
     * @method onToggleSidebar
     * @callback
     */
    onToggleSidebar = () => {
        // FIXME:  ICKY!!
        if (this.state.isCollapsed) {
            localStorage.setItem(STORAGE_ITEM, false);
        } else {
            localStorage.setItem(STORAGE_ITEM, true);
        }

        this.setState({
            isCollapsed: !this.state.isCollapsed
        });
    }
}

/**
 * @property displayName
 * @type {Object}
 * @static
 */
Sidebar.displayName = 'Sidebar';

/**
 * @property propTypes
 * @type {Object}
 * @static
 */
Sidebar.propTypes = {};
