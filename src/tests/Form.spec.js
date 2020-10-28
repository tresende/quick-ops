import React from 'react';
import { mount } from 'enzyme';
import Form from '../components/RequestForm/Form';
import setup from './setupTests';

setup();
const wrapper = mount(
    <Form onChange={() => { }} />
);

describe('Component rendering test <Form>', () => {
    it('Deve renderizar 4 Editores ao abrir vazio', () => {
        expect(wrapper.find('Editor')).toHaveLength(4);
    });
    it('Deve renderizar 6 Editores ao setar o campo moeda', () => {
        const editor = wrapper.find('select').at(1);
        editor.simulate('change', { target: { value: 'BRL' } });
        expect(wrapper.find('Editor')).toHaveLength(6);
    });
});
