import React, { PropTypes, Component } from 'react';
import t from 'tcomb-form';
import _camelCase from 'lodash/camelCase';

import { reduceListToIdNameEnumeration } from '../../../../lib/formHelpers/reduceListToIdNameEnumeration';

const Form = t.form.Form;

const FORM_OPTIONS = {
    fields: {}
};

/**
 * @class TaskItemSelectionForm
 * @extends React/Component
 */
export default class TaskItemSelectionForm extends Component {

    /**
     * Fascade for tcomb-form's .getValue() method.
     *
     * Provides access to this form from a parent component.
     *
     * @for TaskItemSelectionForm
     * @method getValue
     * @return {Function}
     */
    getValue() {
        return this.refs.taskItemSelectionForm.getValue();
    }

    /**
     * Fascade for tcomb-form's .validate() method.
     *
     * Provides access to this form from a parent component.
     *
     * @for TaskItemSelectionForm
     * @method validate
     * @return {Function}
     */
    validate() {
        return this.refs.taskItemSelectionForm.validate();
    }

    /**
     * @for TaskItemSelectionForm
     * @method _generateFormType
     * @return {Function|Enums}
     */
    _generateFormType() {
        const formType = this.props.taskItems.reduce((sum, task) => {
            const taskName = _camelCase(task.name);

            sum[task.id] = t.Boolean;
            FORM_OPTIONS.fields[task.id] = {
                label: task.name
            };

            return sum;
        }, {});

        return t.struct(formType);
    }

    /**
     * @for TaskItemSelectionForm
     * @method render
     * @return {JSX}
     */
    render() {
        if (!this.props.taskItems || this.props.taskItems.length === 0) {
            return null;
        }

        const taskItemSelectionType = this._generateFormType();

        return (
            <div>
                <h3 className="hdg hdg_2">Add Task Items</h3>
                <Form ref="taskItemSelectionForm"
                    options={ FORM_OPTIONS }
                    type={ taskItemSelectionType } />
            </div>
        );
    }
}

/**
 * @property displayName
 * @type {string}
 * @static
 */
TaskItemSelectionForm.displayName = 'TaskItemSelectionForm';

/**
 * @property propTypes
 * @type {Object}
 * @static
 */
TaskItemSelectionForm.propTypes = {
    /**
     * @property taskItems
     * @type {Array}
     * @required
     */
    taskItems: PropTypes.array.isRequired
};
