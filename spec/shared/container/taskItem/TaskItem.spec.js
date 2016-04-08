import ava from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import TaskItemContainer from '../../../../src/scripts/shared/container/taskItem/TaskItemContainer';

const props = {};

ava('TaskItemContainer component renders in DOM', t => {
    const Component = React.createElement(TaskItemContainer, props);
    const instance = shallow(Component);

    t.ok(instance);
    t.ok(instance.find('div'));
});
