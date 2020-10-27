/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import Home from '../pages/Home';
import setup from './setupTests';

const store = setup();
const wrapper = shallow(
    <Home store={store} />
);

describe('Teste de renderização do componente <Home>', () => {
    it('Deve renderizar a estrutura com o <Sidebar>', () => {
        expect(wrapper.find('Connect(Sidebar)')).toHaveLength(1);
    });
    it('Deve renderizar a estrutura com o <RequestHeader>', () => {
        expect(wrapper.find('Connect(RequestHeader)')).toHaveLength(1);
    });
    it('Deve renderizar a estrutura com o <AddRequestButton>', () => {
        expect(wrapper.find('AddRequestButton')).toHaveLength(1);
    });
    it('Deve renderizar a estrutura com o <RequestForm>', () => {
        expect(wrapper.find('Connect(RequestForm)')).toHaveLength(1);
    });
    it('Deve renderizar a estrutura com o <Timeline>', () => {
        expect(wrapper.find('Connect(Timeline)')).toHaveLength(1);
    });
    it('RequestForm deve ser incializado fechado', () => {
        expect(wrapper.find('Connect(RequestForm)').props().show).toBe(false);
    });
});
