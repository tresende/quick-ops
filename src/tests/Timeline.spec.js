/* eslint-disable */
import React from 'react';
import { mount, shallow } from 'enzyme';
import Timeline from '../pages/Home/Timeline';
import TimelineService from '../services/TimelineService';
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
jest.mock('../services/TimelineService');
TimelineService.getTimelineData.mockImplementation((data, dispatch) => {
    dispatch({ type: "GET_TIMELINE_DATA", payload: [{}] });
});

const wrapper = mount(
    <Timeline store={store} />
);

describe('Teste de renderização do componente <Timeline>', () => {
    it('Deve apenas um Fragment caso não tenha dados', () => {
        expect(wrapper.find('RequestInfo')).toHaveLength(2);
    });
});
