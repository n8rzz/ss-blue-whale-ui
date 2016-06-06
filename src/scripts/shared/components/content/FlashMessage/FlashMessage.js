import React, { Component, PropTypes } from 'React';
import classNames from 'classNames';

/**
 * @class FlashMessage
 * @extends React/Component
 */
export default class FlashMessage extends Component {
    /**
     * @for FlashMessage
     * @method _composeFlashContent
     * @return {JSX}
     */
    _composeFlashContent() {
        return (
            <div>
                { this.props.content }
            </div>
        );
    }

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
        if (this.props.content.length === 0 || this.props.type === '') {
            console.warn('DEPRECATION WARNING: The FlashMessage component will require both `type` and `content` props in v0.8.0. Please update the calling component');
            return null;
        }

        return (
            <div className={ this.buildClassNames() }>
                { this._composeFlashContent() }
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
    type: PropTypes.oneOf(['success', 'error', 'warning']),

    /**
     * @property content
     * @type{String|Object|Array}
     * @required
     */
    // content: PropTypes.oneOf([PropTypes.string, PropTypes.object, PropTypes.array]).isRequired
    content: PropTypes.any
};

/**
 * @property defaultProps
 * @type {Object}
 * @static
 */
FlashMessage.defaultProps = {
    type: 'error',
    content: []
};
