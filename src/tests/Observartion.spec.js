import React from 'react';
import { shallow } from 'enzyme';
import Observation from '../components/RequestInfo/Observation';
import setup from './setupTests';

setup();

const shallowWrapper = (request) => shallow(
    <Observation request={request} />
);

describe('Component rendering test <Observation>', () => {
    it('Should render null component when parameter "notes" is null', () => {
        const wrapper = shallowWrapper({});
        expect(wrapper.type()).toEqual(null)
    });
    it('Should <Info> render when parameter "notes" as value', () => {
        const wrapper = shallowWrapper({notes: 'a'});
        expect(wrapper.find('Info')).toHaveLength(1);
    });
});
