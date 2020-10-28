import React from 'react';
import { shallow } from 'enzyme';
import Observation from '../components/RequestInfo/Observation';
import setup from './setupTests';

setup();

const shallowWrapper = (request) => shallow(
    <Observation request={request} />
);

describe('Teste de renderização do componente <Observation>', () => {
    it('Deve renderizar null com parametro notes nulo', () => {
        const wrapper = shallowWrapper({});
        expect(wrapper.type()).toEqual(null)
    });
    it('Deve renderizar <Info> com parametro notes com valor', () => {
        const wrapper = shallowWrapper({notes: 'a'});
        expect(wrapper.find('Info')).toHaveLength(1);
    });
});
