import React, { Component, PropTypes } from 'react';

/**
 * @class TabsBody
 * @extends React/Component
 */
export default class TabsBody extends Component {
    /**
     * @for TabsBody
     * @constructor
     */
    constructor() {
        super(props);
    }

    /**
     * @for TabsBody
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <div>BodyItem</div>
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
TabsBody.propTypes = {};
