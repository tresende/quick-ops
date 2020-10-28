import React from 'react';
import { shallow } from 'enzyme';
import Home from '../pages/Home';
import setup from './setupTests';

const store = setup();
const wrapper = shallow(
    <Home store={store} />
);

describe('Component rendering test <Home>', () => {
    it('Should render structure with <Sidebar>', () => {
        expect(wrapper.find('Connect(Sidebar)')).toHaveLength(1);
    });
    it('Should render structure with <RequestHeader>', () => {
        expect(wrapper.find('Connect(RequestHeader)')).toHaveLength(1);
    });
    it('Should render structure with <AddRequestButton>', () => {
        expect(wrapper.find('AddRequestButton')).toHaveLength(1);
    });
    it('Should render structure with <RequestForm>', () => {
        expect(wrapper.find('Connect(RequestForm)')).toHaveLength(1);
    });
    it('Should render structure with <Timeline>', () => {
        expect(wrapper.find('Connect(Timeline)')).toHaveLength(1);
    });
    it('Should initlialize RequestForm closed', () => {
        expect(wrapper.find('Connect(RequestForm)').props().show).toBe(false);
    });
});
