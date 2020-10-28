import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../components/Loading';
import setup from './setupTests';

const shallowWrapper = (store) => shallow(
    <Loading store={store} />
);

describe('Teste de renderização do componente <Loading>', () => {

    it('Deve renderizar a estrutura com o <FaReceipt>', () => {
        const store = setup({
            loadingReducer: {
                loadingStack: ['1']
            }
        });
        const wrapper = shallowWrapper(store);
        const element = wrapper.dive().dive();
        expect(element.find('div img')).toHaveLength(1);
    });

    it('Não Deve renderizar o loading sem nada na pilja', () => {
        const store = setup();
        const wrapper = shallowWrapper(store);
        const element = wrapper.dive().dive();
        expect(element).toEqual({})
    });
});
