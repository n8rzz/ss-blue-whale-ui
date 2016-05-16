import React, { Component, PropTypes } from 'react';
import Tab from './Tab';
import TabsHeader from './TabsHeader';
import TabsBody from './TabsBody';

import _map from 'lodash/map';

/**
 * @class Tabs
 * @extends React/Component
 */
export default class Tabs extends Component {

    /**
     * @property Tab
     * @static
     */
    static Tab = Tab;

    /**
     * @for Tabs
     * @constructor
     * @param {Object} props
     */
    constructor(props) {
        super(props);

        this.state = {
            selectedTabId: 0
        };
    }

    /**
     * @for Tabs
     * @method _composeTabHeader
     * @return {JSX}
     */
    _composeTabHeader() {
        const headerItems = _map(this.props.children, ({ props }, index) => {
            return (
                <TabsHeader
                    key={ index }
                    index={ index }
                    title={ props.title }
                    isSelected={ this.state.selectedTabId === index }
                    onRequestToChangeTab={ (event) => this.onChangeActiveTab(event, index) } />
            );
        });

        return (
            <ul className="tab-hd">
                { headerItems }
            </ul>
        );
    }

    /**
     * @for Tabs
     * @method _composeTabBody
     * @param {Number} selectedTabId
     * @return {JSX}
     */
    _composeTabBody(selectedTabId) {
        const bodyItems = _map(this.props.children, ({ props }, index) => {
            return (
                <TabsBody id={ index } key={ index }>
                    { props.children }
                </TabsBody>
            );
        });

        return (
            <ul className="tab-bd">
                { bodyItems[selectedTabId] }
            </ul>
        );
    }

    /**
     * @for Tabs
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <div className="tab">
                { this._composeTabHeader() }
                { this._composeTabBody(this.state.selectedTabId) }
            </div>
        );
    }

    /**
     * @for Tabs
     * @method onChangeActiveTab
     * @param {React.SyntheticEvent|Object} event
     * @param {Number} nextSelectedTabId
     * @callback
     */
    onChangeActiveTab = (event, nextSelectedTabId) => {
        event.preventDefault();

        if (nextSelectedTabId === this.state.selectedTabId) {
            return;
        }

        this.setState({ selectedTabId: nextSelectedTabId });
    };
}

/**
 * @property displayName
 * @type {String}
 * @static
 */
Tabs.displayName = 'Tabs';

/**
 * @property propTypes
 * @type {String}
 * @static
 */
Tabs.propTypes = {

    /**
     * @property children
     * @type {node}
     */
    children: PropTypes.node
};
