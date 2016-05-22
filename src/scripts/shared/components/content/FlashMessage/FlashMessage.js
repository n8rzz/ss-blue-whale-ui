import React, { Component, PropTypes } from 'React';

/**
 * @class FlashMessage
 */
export default class FlashMessage extends Component {
    /**
     * @for FlashMessage
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <div className="alert">
                [  ALERT / FLASH MESSAGE ]
            </div>
        );
    }
}

/**
 * @property displayName
 * @type {String}
 * @static
 */
FlashMessage.displayName = 'FlashMessage';

/**
 * @property propTypes
 * @type {Object}
 * @static
 */
FlashMessage.propTypes = {};
