import t from 'tcomb';
import { BaseStateType } from '../../BaseTypes';

/**
 * ProjectTypeType definition
 *
 * @type ProjectTypeType
 * @return {ProjectTypeType}
 */
export const ProjectTypeType = t.struct({
    id: t.Number,
    name: t.String,
    description: t.String,
    dueDate: t.maybe(t.String),
    task_items: t.maybe(t.list(t.String))
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
