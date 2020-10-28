import React from 'react';
import { shallow } from 'enzyme';
import Info from '../components/RequestInfo/Info';
import setup from './setupTests';

setup();

const shallowWrapper = (request) => shallow(
    <Info request={request} />
);

describe('Teste de renderização do componente <Info>', () => {
    it('Deve renderizar null com parametro amountTotal nulo', () => {
        const wrapper = shallowWrapper({});
        expect(wrapper.type()).toEqual(null)
    });
    it('Deve renderizar <Info> com parametro notes com valor', () => {
        const wrapper = shallowWrapper({ amountTotal: '10', currencyCode: 'BRL' });
        expect(wrapper.find('Info')).toHaveLength(1);
    });
});
