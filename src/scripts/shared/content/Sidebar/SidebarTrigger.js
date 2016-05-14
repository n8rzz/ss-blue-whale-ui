import React, { Component, PropTypes } from 'react';

/**
 * @class SidebarTrigger
 * @extends React/Component
 */
export default class SidebarTrigger extends Component {
    /**
     * @for SidebarTrigger
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <div className="sidebar-trigger">
                <button onClick={ this.props.onToggleSidebar }>TRIGGER</button>
            </div>
        );
    }
}

/**
 * @property displayName
 * @type {Object}
 * @static
 */
SidebarTrigger.displayName = 'SidebarTrigger';

/**
 * @property propTypes
 * @type {Object}
 * @static
 */
SidebarTrigger.propTypes = {
    /**
     * @property onToggleSidebar
     * @type {Function}
     * @required
     */
    onToggleSidebar: PropTypes.func.isRequired
};
