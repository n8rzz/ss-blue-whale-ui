import React, { Component, PropTypes } from 'react';
import t from 'tcomb-form';
import VerticalRhythm from '../../../repeater/VerticalRhythm/VerticalRhythm';
import Button from '../../../layout/Button/Button';
import { ProjectTypeCreationType } from '../../../../domain/projectType/types/ProjectTypeTypes';

const Form = t.form.Form;

/**
 * @class ProjectTypeCreate
 * @extends React/Component
 */
export default class ProjectTypeCreate extends Component {
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
                        ref="createProjectTypeForm"
                        type={ ProjectTypeCreationType } />
                </VerticalRhythm>

                <Button isSubmit onClick={ this.onSubmit }>Save Project Type</Button>
            </div>
        );
    }

    /**
     * @for onSubmit
     * @method onSubmit
     * @return {Function}
     * @callback
     */
    onSubmit = () => {
        const createProjectTypeFormValues = this.refs.createProjectTypeForm.getValue();

        if (!t.Nil.is(createProjectTypeFormValues)) {
            this.props.onCreateProjectType(createProjectTypeFormValues);
        }
    }
}

/**
 * @property displayName
 * @type {String}
 * @static
 */
ProjectTypeCreate.displayName = 'ProjectTypeCreate';

/**
 * @property propTypes
 * @type {String}
 * @static
 */
ProjectTypeCreate.propTypes = {
    /**
     * @property onCreateProjectType
     * @type {Function}
     * @required
     */
    onCreateProjectType: PropTypes.func.isRequired
};
