import React, { Component, PropTypes } from 'react';
import t from 'tcomb-form';
import {
    buildProjectCreationFormType,
    ProjectCreationRequestType
} from '../../../../domain/project/types/ProjectTypes';
import Button from '../../../layout/Button/Button';

const Form = t.form.Form;

const FORM_OPTIONS = {
    fields: {
        client_id: {
            type: 'hidden'
        },
        // project_type_id: {
        //     factory: t.form.Select,
        //     options: [] // declared here as empty so it can be filled in with actual data once it becomes available
        // },
        startDate: {
            type: 'date'
        },
        endDate: {
            type: 'date'
        },
        completedDate: {
            type: 'date'
        }
    }
};

/**
 * @class ProjectCreate
 * @extend React/Component
 */
export default class ProjectCreate extends Component {
    /**
     * @for ProjectCreate
     * @constructor
     */
    constructor(props) {
        super(props);

        this.state = {
            createProjectFormValues: {
                client_id: props.client.id
            }
        };
    }

    /**
     * @for ProjectCreate
     * @method Render
     * @return {JSX}
     */
    render() {
        const FORM_TYPE = buildProjectCreationFormType(this.props.projectTypes);

        return (
            <div>
                <Form
                    ref="createProjectForm"
                    value={ this.state.createProjectFormValues }
                    options={ FORM_OPTIONS }
                    type={ FORM_TYPE } />

                <Button
                    onClick={ this.props.onRequestToCancel }>
                    Cancel
                </Button>
                <Button
                    isSubmit={ true }
                    onClick={ this.onSubmit }>
                    Add new project
                </Button>
            </div>
        );
    }

    /**
     * @for ProjectCreate
     * @method onSubmit
     * @param {React.SyntheticEvent} event
     * @callback
     */
    onSubmit = event => {
        event.preventDefault();

        let createProjectFormValues = this.refs.createProjectForm.getValue();

        if (!t.Nil.is(createProjectFormValues)) {
            // TODO: this is grossly incorrect. For some reason, number values are getting coerced into a
            // string value which causes the type check to fail.
            //
            // Temporary hack until solution/root cause can be found
            if (typeof createProjectFormValues.project_type_id !== 'number') {
                const coercedProjectTypeId = parseInt(createProjectFormValues.project_type_id, 10);

                createProjectFormValues = ProjectCreationRequestType.update(createProjectFormValues, {
                    $merge: {
                        project_type_id: coercedProjectTypeId
                    }
                });
            }

            const projectCreationRequest = new ProjectCreationRequestType(createProjectFormValues);
            this.props.onCreateProject(projectCreationRequest);
        }
    }
}

/**
 * @property displayNames
 * @type {string}
 * @static
 */
ProjectCreate.displayName = 'ProjectCreate';

/**
 * @property propTypes
 * @type {Object}
 * @static
 */
ProjectCreate.propTypes = {
    /**
     * @property client
     * @type {ClientType}
     * @required
     */
    client: PropTypes.object.isRequired,

    /**
     * @property projectTypes
     * @type {ProjectTypeList}
     * @required
     */
    projectTypes: PropTypes.array.isRequired,

    /**
     * @property onCreateProject
     * @type {Function}
     * @required
     */
    onCreateProject: PropTypes.func.isRequired,

    /**
     * @property onRequestToCancel
     * @type {Function}
     * @required
     */
    onRequestToCancel: PropTypes.func.isRequired
};
