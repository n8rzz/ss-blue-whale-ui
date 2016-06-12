import React, { Component, PropTypes } from 'React';
import { connect } from 'react-redux';
import classNames from 'classNames';

/**
 * @class FlashMessage
 * @extends React/Component
 */
class FlashMessage extends Component {
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
            'alert-success': this.props.type === 'SUCCESS',
            'alert-warning': this.props.type === 'WARNING',
            'alert-error': this.props.type === 'ERROR'
        });
    }

    /**
     * @for FlashMessage
     * @method render
     * @return {JSX}
     */
    render() {
        if (!this.props.flashMessage) {
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
    type: PropTypes.string,

    /**
     * @property content
     * @type{String|Object|Array}
     * @required
     */
    content: PropTypes.string,

    /**
     * @property flashMessage
     * @type {FlashMessageType|Object}
     */
    // TODO: remove this prop and make the other two optional
    flashMessage: PropTypes.object
};

/**
 * @property defaultProps
 * @type {Object}
 * @static
 */
FlashMessage.defaultProps = {
    type: '',
    content: ''
};

/**
 * @function mapStoreToProps
 * @param  {Object} state
 * @return {Object}
 */
const mapStoreToProps = state => ({
    flashMessage: state.flashMessage.payload
});

/**
 *
 * @function
 */
const mapDispatchToProps = () => ({});

/**
 *
 * @function
 */
const mergeProps = (stateProps, dispatchProps, ownProps) => {
    if (!stateProps.flashMessage) {
        return Object.assign({}, ownProps, stateProps, dispatchProps);
    }

    return Object.assign({}, ownProps, stateProps, dispatchProps, stateProps.flashMessage);
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps,
    mergeProps
)(FlashMessage);
