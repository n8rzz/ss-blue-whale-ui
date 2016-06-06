import React, { Component, PropTypes } from 'React';
import classNames from 'classNames';

/**
 * @class FlashMessage
 * @extends React/Component
 */
export default class FlashMessage extends Component {
    /**
     * @for FlashMessage
     * @method buildClassNames
     * @return {Object}
     */
    buildClassNames() {
        return classNames({
            alert: true,
            'alert-success': this.props.type === 'success',
            'alert-warning': this.props.type === 'warning',
            'alert-error': this.props.type === 'error'
        });
    }

    /**
     * @for FlashMessage
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <div className={ this.buildClassNames() }>
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
FlashMessage.propTypes = {
    /**
     * @property type
     * @type {String}
     */
    type: PropTypes.oneOf(['success', 'error', 'warning'])


};

/**
 * @property defaultProps
 * @type {Object}
 * @static
 */
FlashMessage.defaultProps = {
    type: 'error'
};
