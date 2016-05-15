import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components';

import ClientRoot from './components/content/Client/ClientRoot';
import ClientListContainer from './components/container/client/ClientListContainer';
import ClientCreateContainer from './components/container/client/ClientCreateContainer';
import ClientSingleContainer from './components/container/client/ClientSingleContainer';
import { getSingleClient } from './domain/client/actions/ClientSingleActions';

import ProjectContainer from './components/container/project/ProjectContainer';

import ProjectTypeRoot from './components/content//ProjectType/ProjectTypeRoot';
import ProjectTypeContainer from './components/container/projectType/ProjectTypeContainer';
import ProjectTypeCreateContainer from './components/container/projectType/ProjectTypeCreateContainer';
import ProjectTypeSingleContainer from './components/container/projectType/ProjectTypeSingleContainer';
import { getProjectType } from './domain/projectType/actions/ProjectTypeActions';

import TaskItemContainer from './components/container/taskItem/TaskItemContainer';

export default function(store) {
    return (
        <Route component={ App } path="/">

            <Route path="clients" component={ ClientRoot }>
                <IndexRoute component={ ClientListContainer } />
                <Route path="create"
                    component={ ClientCreateContainer } />
                <Route path=":id"
                    component={ ClientSingleContainer }
                    onEnter={ nextState => store.dispatch(getSingleClient(nextState.params.id)) }/>
            </Route>

            <Route component={ ProjectContainer } path="projects" />

            <Route component={ ProjectTypeRoot } path="projectTypes">
                <IndexRoute component={ ProjectTypeContainer } />
                <Route path="create"
                    component={ ProjectTypeCreateContainer } />
                <Route path=":id"
                    component={ ProjectTypeSingleContainer }
                    onEnter={ nextState => store.dispatch(getProjectType(nextState.params.id)) } />
            </Route>

            <Route component={ TaskItemContainer } path="taskItems" />
        </Route>
    );
}
