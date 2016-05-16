import React, { Component, PropTypes } from 'react';

/**
 * @class TabsBody
 * @extends React/Component
 */
export default class TabsBody extends Component {
    /**
     * @for TabsBody
     * @constructor
     * @param {Object} props
     */
    constructor(props) {
        super(props);
    }

    /**
     * @for TabsBody
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <li>
                { this.props.children }
            </li>
        );
    }
}

/**
 * @property displayName
 * @type {String}
 * @static
 */
TabsBody.displayName = 'TabsBody';

/**
 * @property propTypes
 * @type {String}
 * @static
 */
TabsBody.propTypes = {
    /**
     * @property id
     * @type {Number}
     * @required
     */
    id: PropTypes.number.isRequired,

    /**
     * @property children
     * @type {node}
     * @required
     */
    children: PropTypes.node
};
