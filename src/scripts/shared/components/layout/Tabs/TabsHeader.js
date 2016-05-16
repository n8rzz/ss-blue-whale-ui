import React, { Component, PropTypes } from 'react';
import _map from 'lodash/map';

/**
 * @class TabsHeader
 * @extends React/Component
 */
export default class TabsHeader extends Component {
    /**
     * @for TabsHeader
     * @constructor
     */
    constructor() {
        super(props);
    }

    /**
     * TODO: abstract to Tabs.header (TabHeader)
     *
     * @for TabHeader
     * @method _composeTabHeader
     * @return {JSX}
     */
    _composeTabHeader() {
        const headerItems = _map(this.props., (child, index) => {
            const headerClassnames = this.state.selectedTabId === index ?
                'tab-hd-item tab-hd-item_isSelected' :
                'tab-hd-item';

            return (
                <li className={ headerClassnames } key={ index }>
                    <a href="#" onClick={ (event) => this.onChangeActiveTab(event, index) }>
                        { child.title }
                    </a>
                </li>
            );
        });

        return (
            <ul className="tab-hd">
                { headerItems }
            </ul>
        );
    }

    /**
     * @for TabsHeader
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <ul>
                { this._composeTabHeader() }
            </ul>
        );
    }
}

/**
 * @property displayName
 * @type {String}
 * @static
 */
TabsHeader.displayName = 'TabsHeader';

/**
 * @property propTypes
 * @type {String}
 * @static
 */
TabsHeader.propTypes = {};
