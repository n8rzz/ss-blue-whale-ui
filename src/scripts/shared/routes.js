import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './content';

import ClientRoot from './content/Client/ClientRoot';
import ClientListContainer from './container/client/ClientListContainer';
import ClientCreateContainer from './container/client/ClientCreateContainer';
import ClientSingleContainer from './container/client/ClientSingleContainer';
import { getSingleClient } from './domain/client/actions/ClientSingleActions';

import ProjectContainer from './container/project/ProjectContainer';
import ProjectTypeContainer from './container/projectType/ProjectTypeContainer';
import TaskItemContainer from './container/taskItem/TaskItemContainer';

export default function(store) {
    return (
        <Route component={ App } path="/">

            <Route path="clients" component={ ClientRoot }>
                <IndexRoute component={ ClientListContainer } />
                <Route path="create"
                    component={ ClientCreateContainer } />
                <Route path=":id"
                    component={ ClientSingleContainer }
                    onEnter={ (nextState) => store.dispatch(getSingleClient(nextState.params.id)) }/>
            </Route>

            <Route component={ ProjectContainer } path="projects" />
            <Route component={ ProjectTypeContainer } path="projectTypes" />
            <Route component={ TaskItemContainer } path="taskItems" />
        </Route>
    );
}
