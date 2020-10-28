import React from 'react';
import { shallow } from 'enzyme';
import Value from '../components/RequestInfo/Value';
import setup from './setupTests';

setup();

const shallowWrapper = (request) => shallow(
    <Value request={request} />
);

describe('Component rendering test <Value>', () => {
    it('Should render null component when parameter "amountTotal" is null', () => {
        const wrapper = shallowWrapper({});
        expect(wrapper.type()).toEqual(null)
    });
    it('Should render <Info> when parameter "notes" has value', () => {
        const wrapper = shallowWrapper({ amountTotal: '10', currencyCode: 'BRL' });
        expect(wrapper.find('Info')).toHaveLength(1);
    });
});
