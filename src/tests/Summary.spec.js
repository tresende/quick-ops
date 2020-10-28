import React from 'react';
import { shallow } from 'enzyme';
import Summary from '../components/RequestInfo/Summary';
import setup from './setupTests';

setup();

const shallowWrapper = (request) => shallow(
    <Summary request={request} />
);

describe('Teste de renderização do componente <Summary>', () => {
    it('Deve renderizar null com parametro cardType nulo', () => {
        const wrapper = shallowWrapper({});
        expect(wrapper.type()).toEqual(null)
    });
    it('Deve renderizar quarto 4 divs com parametro notes com valor', () => {
        const wrapper = shallowWrapper({ cardType: 'EXPENSE' });
        expect(wrapper.find('div')).toHaveLength(4);
    });
});
