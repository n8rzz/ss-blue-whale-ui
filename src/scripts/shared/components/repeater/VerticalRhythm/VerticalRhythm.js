import React, { Component, PropTypes } from 'react';

/**
 * @class VerticalRhythm
 */
export default class VerticalRhythm extends Component {
    /**
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <div className={ `vr_${this.props.increment}x` }>
                { this.props.children }
            </div>
        );
    }
}

/**
 * @property displayName
 * @type {String}
 */
VerticalRhythm.displayName = 'VerticalRhythm';

/**
 * @property propTypes
 * @type {Object}
 */
VerticalRhythm.propTypes = {
    /**
     * @property increment
     * @type {Number}
     * @required
     */
    increment: PropTypes.oneOf([1, 2, 3, 4]).isRequired,

    /**
     * @property children
     * @type {node}
     * @static
     */
    children: PropTypes.node
};
