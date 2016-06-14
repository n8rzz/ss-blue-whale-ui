import t from 'tcomb';

import { BaseStateType } from '../../baseTypes/BaseTypes';
import { ClientPreviewType } from '../../client/types/ClientTypes';
import { ProjectTypeType } from '../../projectType/types/ProjectTypeTypes';
import { NoteType } from '../../note/types/NoteTypes';

/**
 * @property ProjectCreationType
 * @type {ProjectCreationType}
 * @return {ProjectCreationType}
 */
export const ProjectCreationType = t.struct({
    client_id: t.Number,
    project_type_id: t.Number,
    startDate: t.String,
    endDate: t.maybe(t.String),
    completedDate: t.maybe(t.String)
}, 'ProjectCreationType');

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
