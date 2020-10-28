import React from 'react';
import { shallow } from 'enzyme';
import Summary from '../components/RequestInfo/Summary';
import setup from './setupTests';

setup();

const shallowWrapper = (request) => shallow(
    <Summary request={request} />
);

describe('Component rendering test <Summary>', () => {
    it('Should render null component when parameter "cardType" is null', () => {
        const wrapper = shallowWrapper({});
        expect(wrapper.type()).toEqual(null)
    });
    it('Should render 4 divs in component when parameter "cardType" has value', () => {
        const wrapper = shallowWrapper({ cardType: 'EXPENSE' });
        expect(wrapper.find('div')).toHaveLength(4);
    });
});
