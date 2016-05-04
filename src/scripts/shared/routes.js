import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './content';
import ClientRoot from './content/Client/ClientRoot';
import ClientListContainer from './container/client/ClientListContainer';
import ClientCreateContainer from './container/client/ClientCreateContainer';
import ClientSingleContainer from './container/client/ClientSingleContainer';

import ProjectContainer from './container/project/ProjectContainer';
import ProjectTypeContainer from './container/projectType/ProjectTypeContainer';
import TaskItemContainer from './container/taskItem/TaskItemContainer';

export default function(store) {
    return (
        <Route component={ App } path="/">

            <Route component={ ClientRoot } path="clients">
                <IndexRoute component={ ClientListContainer } />
                <Route component={ ClientCreateContainer } path="create" />
                <Route component={ ClientSingleContainer } path=":id" />
            </Route>

            <Route component={ ProjectContainer } path="projects" />
            <Route component={ ProjectTypeContainer } path="projectTypes" />
            <Route component={ TaskItemContainer } path="taskItems" />
        </Route>
    );
}
