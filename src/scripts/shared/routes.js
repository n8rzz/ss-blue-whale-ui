import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './content';
import ClientContainer from './container/client/ClientContainer';
import ProjectContainer from './container/project/ProjectContainer';
import ProjectTypeContainer from './container/projectType/ProjectTypeContainer';
import TaskItemContainer from './container/taskItem/TaskItemContainer';

export default function(store) {
    return (
        <Route component={ App } path="/">
            <IndexRoute component={ App } />

            <Route component={ ClientContainer } path="clients" />
            <Route component={ ProjectContainer } path="projects" />
            <Route component={ ProjectTypeContainer } path="projectTypes" />
            <Route component={ TaskItemContainer } path="taskItems" />

        </Route>
    );
}
