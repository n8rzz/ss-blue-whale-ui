import ava from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import ProjectContainer from '../../../../src/scripts/shared/container/project/ProjectContainer';

const props = {};

ava('ProjectContainer component renders in DOM', t => {
    const Component = React.createElement(ProjectContainer, props);
    const instance = shallow(Component);

    t.ok(instance);
    t.ok(instance.find('div'));
});
