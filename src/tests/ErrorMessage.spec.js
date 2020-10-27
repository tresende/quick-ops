/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import ErrorMessage from '../components/ErrorMessage';
import setup from './setupTests';
import Layout from '../layout';

setup();

describe('Teste de renderização do componente <ErrorMessage>', () => {
    it('Deve retornar nulo caso a propriedade opened seja false', () => {
        const wrapper = shallow(
            <ErrorMessage opened={false} text="" />
        );
        expect(wrapper.type()).toEqual(null)
    });
    it('Deve retornar o <ErrorMessage> caso a propriedade opened seja true', () => {
        const wrapper = shallow(
            <Layout>
                <ErrorMessage opened={true} text="" />
            </Layout>
        );
        expect(wrapper.find('div')).toHaveLength(1);
    });
    it('Deve imprimir o text dentro da div', () => {
        const wrapper = shallow(
            <Layout>
                <ErrorMessage opened={true} text="TEXT" />
            </Layout>
        );
        //console.log(wrapper.find('ErrorMessage').dive().debug());
        expect(wrapper.find('ErrorMessage').dive().text()).toMatch(/TEXT/)
    });
});
