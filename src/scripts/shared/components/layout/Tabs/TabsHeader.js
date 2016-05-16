import React, { Component, PropTypes } from 'react';

/**
 * @class TabsHead
 * @extends React/Component
 */
export default class TabsHead extends Component {
    /**
     * @for TabsHead
     * @param {Object} props
     * @constructor
     */
    constructor(props) {
        super(props);
    }

    /**
     * @for TabsHead
     * @method render
     * @return {JSX}
     */
    render() {
        // TODO: implement classnames pkg here
        const headerClassnames = this.props.isSelected ?
            'tab-hd-item tab-hd-item_isSelected' :
            'tab-hd-item';

        return (
            <li className={ headerClassnames }>
                <a href="#" onClick={ this.onClick }>
                    { this.props.title }
                </a>
            </li>
        );
    }

    /**
     * @for TabsHead
     * @method onClick
     * @param  {Reac.SyntheticEvent|Object} event
     * @return {Function}
     */
    onClick = event => {
        this.props.onRequestToChangeTab(event, this.props.index);
    };
}

/**
 * @property displayName
 * @type {String}
 * @static
 */
TabsHead.displayName = 'TabsHead';

/**
 * @property propTypes
 * @type {String}
 * @static
 */
TabsHead.propTypes = {

    /**
     * @property index
     * @type {Number}
     * @required
     */
    index: PropTypes.number.isRequired,

    /**
     * @property title
     * @type {String}
     * @required
     */
    title: PropTypes.string.isRequired,

    /**
     * @property iSselected
     * @type {Boolean}
     */
    isSelected: PropTypes.bool,

    /**
     * @property onRequestToChangeTab
     * @type {Function}
     */
    onRequestToChangeTab: PropTypes.func
};
