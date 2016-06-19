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
 * @class ClientProjects
 */
export default class ClientProjects extends Component {
    /**
     * @for ClientProjects
     * @method Render
     * @return {JSX}
     */
    render() {
        const FORM_TYPE = buildProjectCreationFormType(this.props.projectTypes);

        return (
            <div>
                <Form
                    options={ FORM_OPTIONS }
                    type={ FORM_TYPE } />

                <Button>Cancel</Button>
                <Button isSubmit={ true }>Add new project</Button>
            </div>
        );
    }
}

/**
 * @property displayNames
 * @type {string}
 * @static
 */
ClientProjects.displayName = 'ClientProjects';

/**
 * @property propTypes
 * @type {Object}
 * @static
 */
ClientProjects.propTypes = {
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
    projectTypes: PropTypes.array.isRequired
};
