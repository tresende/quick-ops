import React from 'react';
import { shallow } from 'enzyme';
import Info from '../components/RequestInfo/Info';
import setup from './setupTests';

setup();

const shallowWrapper = (request) => shallow(
    <Info request={request} />
);

describe('Component rendering test <Info>', () => {
    it('Should render Compoenent', () => {
        const wrapper = shallowWrapper({});
        // console.log(wrapper.debug());
        expect(wrapper.find('div')).toHaveLength(5);
    });
});
