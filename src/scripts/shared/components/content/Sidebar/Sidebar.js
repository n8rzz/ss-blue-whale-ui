import React, { Component, PropTypes } from 'react';
import SidebarTrigger from './SidebarTrigger';
import Navigation from '../../content/Navigation/Navigation';

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

        this.state = {
            isCollapsed: false
        };
    }

    /**
     * @for Sidebar
     * @method render
     * @return {JSX}
     */
    render() {
        const sidebarClassnames = this.state.isCollapsed ? 'sidebar mix-sidebar_collapsed' : 'sidebar';

        return (
            <div className={ sidebarClassnames }>
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
