import React, { Component, PropTypes } from 'react';
import t from 'tcomb-form';
import { ProjectTypeType } from '../../../domain/projectType/types/ProjectTypeTypes';

const Form = t.form.Form;

/**
 * @class ProjectTypeSingle
 * @extends React/Component
 */
export default class ProjectTypeSingle extends Component {
    /**
     * @constructor
     */
    constructor(props) {
        super(props);

        this.state = {
            saveProjectTypeFormValues: props.projectType
        };
    }

    /**
     * @method componentWillReceiveProps
     * @param {Object} nextProps
     */
    componentWillReceiveProps(nextProps) {
        this.setState({ saveProjectTypeFormValues: nextProps.projectType });
    }

    /**
     * @for onSubmit
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <div>
                <Form
                    ref="saveProjectTypeForm"
                    type={ ProjectTypeType }
                    value={ this.state.saveProjectTypeFormValues }
                    onChange={ this.onChange } />

                <button type="submit" onClick={ this.onSubmit }>Save Project Type</button>
            </div>
        );
    }

    /**
     * @method onChange
     * @param {Object} formValues
     * @callback
     */
    onChange = (formValues) => {
        this.setState({
            saveProjectTypeFormValues: formValues
        });
    }

    /**
     * @for onSubmit
     * @method onSubmit
     * @return {Function}
     * @callback
     */
    onSubmit = () => {
        const saveProjectTypeFormValues = this.refs.saveProjectTypeForm.getValue();

        this.props.onCreateProjectType(saveProjectTypeFormValues);
    }
}

/**
 * @property displayName
 * @type {String}
 * @static
 */
ProjectTypeSingle.displayName = 'ProjectTypeSingle';

/**
 * @property propTypes
 * @type {String}
 * @static
 */
ProjectTypeSingle.propTypes = {
    /**
     * @property onCreateProjectType
     * @type {Function}
     * @required
     */
    onCreateProjectType: PropTypes.func.isRequired
};
