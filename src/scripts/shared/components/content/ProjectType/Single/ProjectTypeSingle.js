import React, { Component, PropTypes } from 'react';
import t from 'tcomb-form';
import VerticalRhythm from '../../../repeater/VerticalRhythm/VerticalRhythm';
import Button from '../../../layout/Button/Button';
import { ProjectTypeType } from '../../../../domain/projectType/types/ProjectTypeTypes';

const Form = t.form.Form;

const FORM_OPTIONS = {
    fields: {
        id: {
            type: 'hidden'
        },
        dueDate: {
            type: 'date'
        }
    }
};

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
            <div className="wrapper">
                <VerticalRhythm increment={ 1 }>
                    <Form
                        ref="saveProjectTypeForm"
                        options={ FORM_OPTIONS }
                        type={ ProjectTypeType }
                        value={ this.state.saveProjectTypeFormValues }
                        onChange={ this.onChange } />
                </VerticalRhythm>

                <VerticalRhythm increment={ 1 }>
                    <div>
                        [[ SELECT TASK ITEMS ]]
                    </div>
                </VerticalRhythm>

                <Button onClick={ this.onRemoveProjectType }>Remove Project Type</Button>
                <Button isSubmit onClick={ this.onSubmit }>Save Project Type</Button>
            </div>
        );
    }

    /**
     * @for ProjectTypeSingle
     * @method onChange
     * @param {Object} formValues
     * @callback
     */
    // TODO: is this needed?
    onChange = (formValues) => {
        this.setState({
            saveProjectTypeFormValues: formValues
        });
    }

    /**
     * @for ProjectTypeSingle
     * @method onRemoveProjectType
     * @param {Object} event
     * @return {Function}
     * @callback
     */
    onRemoveProjectType = event => {
        event.preventDefault();

        this.props.onRemoveProjectType(this.props.projectType.id);
    }

    /**
     * @for ProjectTypeSingle
     * @method onSubmit
     * @param {Object} event
     * @return {Function}
     * @callback
     */
    onSubmit = event => {
        event.preventDefault();

        const saveProjectTypeFormValues = this.refs.saveProjectTypeForm.getValue();

        if (!t.Nil.is(saveProjectTypeFormValues)) {
            this.props.onSaveProjectType(this.props.projectType.id, saveProjectTypeFormValues);
        }
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
     * @property projectType
     * @type {Object}
     */
    projectType: PropTypes.object,
    /**
     * @property onSaveProjectType
     * @type {Function}
     * @required
     */
    onSaveProjectType: PropTypes.func.isRequired,

    /**
     * @property onRemoveProjectType
     * @type {Function}
     * @required
     */
    onRemoveProjectType: PropTypes.func.isRequired
};
