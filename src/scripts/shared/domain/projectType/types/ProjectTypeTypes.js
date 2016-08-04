import t from 'tcomb';
import { BaseStateType } from '../../baseTypes/BaseTypes';

/**
 *
 * @property ProjectTypeScheduleEnum
 * @return {ProjectTypeScheduleEnum}
 */
const ProjectTypeScheduleEnum = t.enums.of([
    'Weekly',
    'Monthly',
    'Quarterly',
    'Yearly'
], 'ProjectTypeScheduleEnum');

/**
 * @type ProjectTypeCreationType
 * @return {ProjectTypeCreationType}
 */
export const ProjectTypeCreationType = t.struct({
    name: t.String,
    description: t.String,
    repeatWhenComplete: t.Boolean,
    recurringSchedule: t.maybe(ProjectTypeScheduleEnum),
    nextRecurringDate: t.maybe(t.String),
    dueDate: t.maybe(t.String)
    // TODO: update to reference TaskItemType
    // task_items: t.maybe(t.list(t.String))
}, 'ProjectTypeCreationType');

/**
 * ProjectTypeType definition
 *
 * @type ProjectTypeType
 * @return {ProjectTypeType}
 */
export const ProjectTypeType = ProjectTypeCreationType.extend({
    id: t.Number
}, 'ProjectTypeType');

/**
 * ProjectTypeListType definition
 *
 * @type ProjectTypeListType
 * @return {ProjectTypeListType}
 */
export const ProjectTypeListType = t.list(ProjectTypeType, 'ProjectTypeListType');

/**
 * ProjectTypeListStateType used in the `ProjectTypeListReducer`
 *
 * @extends BaseStateType
 * @return {ProjectTypeListStateType}
 */
export const ProjectTypeListStateType = BaseStateType.extend({
    payload: t.maybe(ProjectTypeListType)
}, 'ProjectTypeListStateType');

/**
 * ProjectTypeStateType used in the `ProjectTypeReducer`
 *
 * @extends BaseStateType
 * @return {ProjectTypeStateType}
 */
export const ProjectTypeStateType = BaseStateType.extend({
    payload: t.maybe(ProjectTypeType)
}, 'ProjectTypeStateType');
