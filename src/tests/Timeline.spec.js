import React from 'react';
import { mount } from 'enzyme';
import Timeline from '../pages/Home/Timeline';
import setup from './setupTests';

const store = setup({
    timelineReducer: {
        timeline: [{
            id: 1,
        },{
            id: 2,
        }],
    },
});

const wrapper = mount(
    <Timeline store={store} />
);

describe('Component rendering test <Timeline>', () => {
    it('Should render only fragment when no data', () => {
        expect(wrapper.find('RequestInfo')).toHaveLength(2);
    });
});
