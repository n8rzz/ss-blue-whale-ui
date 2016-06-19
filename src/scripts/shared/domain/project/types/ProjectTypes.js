import t from 'tcomb';

import { reduceListToIdNameEnumeration } from '../../../lib/formHelpers/reduceListToIdNameEnumeration';

import { BaseStateType } from '../../baseTypes/BaseTypes';
import { ClientPreviewType } from '../../client/types/ClientTypes';
import {
    ProjectTypeType,
    ProjectTypeListType
} from '../../projectType/types/ProjectTypeTypes';
import { NoteType } from '../../note/types/NoteTypes';

/**
 * @function buildProjectCreationFormType
 * @param {ProjectTypeListType} projectTypeList
 * @return {ProjectCreationFormType}
 */
export const buildProjectCreationFormType = projectTypeList => {
    if (!ProjectTypeListType.is(projectTypeList)) {
        throw new TypeError('Invalid parameter. Expected projectTypeList to be a ProjectTypeListType.');
    }

    // TODO: the enum declaration may need to move to the helper file
    const projectTypeFormEnum = reduceListToIdNameEnumeration(projectTypeList);

    return t.struct({
        client_id: t.Number,
        project_type_id: t.enums(projectTypeFormEnum),
        startDate: t.String,
        endDate: t.maybe(t.String),
        completedDate: t.maybe(t.String)
    }, 'ProjectCreationFormType');
};

/**
 * @property ProjectCreationRequestType
 * @type {ProjectCreationRequestType}
 * @return {ProjectCreationRequestType}
 */
export const ProjectCreationRequestType = t.struct({
    client_id: t.Number,
    project_type_id: t.Number,
    startDate: t.String,
    endDate: t.maybe(t.String),
    completedDate: t.maybe(t.String)
}, 'ProjectCreationRequestType');

/**
 * @property ProjectPreviewType
 * @type {ProjectPreviewType}
 * @return {ProjectPreviewType}
 */
export const ProjectPreviewType = t.struct({
    id: t.Number,
    startDate: t.String,
    completedDate: t.maybe(t.String),
    dueDate: t.maybe(t.String),
    client: ClientPreviewType,
    project_type: ProjectTypeType
}, 'ProjectPreviewType');

/**
 * @property ProjectType
 * @type {ProjectType}
 * @return {ProjectType}
 */
export const ProjectType = t.struct({
    id: t.Number,
    startDate: t.String,
    completedDate: t.maybe(t.String),
    dueDate: t.maybe(t.String),
    client: ClientPreviewType,
    project_type: ProjectTypeType,
    // time_entries: t.maybe(.tlist(TimeEntry)),
    notes: t.list(t.maybe(NoteType))
}, 'ProjectType');

/**
* @property ProjectListType
* @type {ProjectListType}
* @return {ProjectListType}
 */
export const ProjectListType = t.list(ProjectPreviewType, 'ProjectListType');

/**
 * @property ProjectStateType
 * @type {ProjectStateType}
 * @return {ProjectStateType}
 */
export const ProjectStateType = BaseStateType.extend({
    payload: t.maybe(ProjectType)
}, 'ProjectStateType');

/**
 * @property ProjectListStateType
 * @type {ProjectListStateType}
 * @return {ProjectListStateType}
 */
export const ProjectListStateType = BaseStateType.extend({
    payload: t.maybe(ProjectListType)
}, 'ProjectListStateType');
