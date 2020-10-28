import React from 'react';
import { shallow } from 'enzyme';
import Value from '../components/RequestInfo/Value';
import setup from './setupTests';

setup();

const shallowWrapper = (request) => shallow(
    <Value request={request} />
);

describe('Teste de renderização do componente <Value>', () => {
    it('Deve renderizar null com parametro amountTotal nulo', () => {
        const wrapper = shallowWrapper({});
        expect(wrapper.type()).toEqual(null)
    });
    it('Deve renderizar <Info> com parametro notes com valor', () => {
        const wrapper = shallowWrapper({ amountTotal: '10', currencyCode: 'BRL' });
        expect(wrapper.find('Info')).toHaveLength(1);
    });
});
