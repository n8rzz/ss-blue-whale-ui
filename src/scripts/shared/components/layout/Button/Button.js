import React, { Component, PropTypes } from 'react';

/**
 * @class Button
 * @extends React/Component
 */
export default class Button extends Component {

    /**
     * @for Button
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <button className="btn"
                type="submit"
                onClick={ this.onRequestClick }>
                { this.props.children }
            </button>
        );
    }

    /**
     * @for Button
     * @method onRequestClick
     * @callback
     */
    onRequestClick= event => {
        if (!this.props.onClick) {
            return;
        }

        this.props.onClick(event);
    }
}

/**
 * @property displayName
 * @type {Object}
 * @static
 */
Button.displayName = 'Button';

/**
 * @property propTypes
 * @type {Object}
 * @static
 */
Button.propTypes = {
    /**
     * @property isSubmit
     * @type {String}
     */
    isSubmit: PropTypes.bool,

    /**
     * @property children
     * @type {node}
     * @required
     */
    children: PropTypes.node.isRequired,

    /**
     * @property onClick
     * @type {Function}
     */
    onClick: PropTypes.func
};
