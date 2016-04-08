import ava from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import ProjectTypeContainer from '../../../../src/scripts/shared/container/projectType/ProjectTypeContainer';

const props = {};

ava('ProjectTypeContainer component renders in DOM', t => {
    const Component = React.createElement(ProjectTypeContainer, props);
    const instance = shallow(Component);

    t.ok(instance);
    t.ok(instance.find('div'));
});
