import React, { Component, PropTypes } from 'react';
import _map from 'lodash/map';

const PROPS = [
    {
        title: 'one',
        content: 'one content'
    },
    {
        title: 'two',
        content: 'two content'
    },
    {
        title: 'three',
        content: 'three content'
    },
    {
        title: 'four',
        content: 'four content'
    }
];

/**
 * @class Tabs
 * @extends React/Component
 */
export default class Tabs extends Component {
    /**
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
     * TODO: abstract to Tabs.header (TabHeader)
     *
     * @method _composeTabHeader
     * @return {JSX}
     */
    _composeTabHeader() {
        const headerItems = _map(PROPS, (child, index) => {
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
     * // TODO: abstract to Tabs.body (TabBody)
     *
     * @method _composeTabBody
     * @param {Number} selectedTabId
     * @return {JSX}
     */
    _composeTabBody(selectedTabId) {
        const bodyItems = _map(PROPS, (child, index) => {
            return (
                <li key={ index }>
                    <div>
                        { child.content }
                    </div>
                </li>
            );
        });

        return (
            <ul className="tab-bd">
                { bodyItems[selectedTabId] }
            </ul>
        );
    }

    /**
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

        console.log('selected: ', nextSelectedTabId);
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
Tabs.propTypes = {};
