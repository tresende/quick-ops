import React from 'react';
import { shallow } from 'enzyme';
import AddRequestButton from '../pages/Home/AddRequestButton';
import setup from './setupTests';

const store = setup();
const wrapper = shallow(
    <AddRequestButton onClick={()=>{}} store={store} />
);

describe('Teste de renderização do componente <AddRequestButton>', () => {
    it('Deve renderizar a estrutura com o <span>', () => {
        expect(wrapper.find('span')).toHaveLength(1);
    });
    it('Deve renderizar a estrutura com o <FaReceipt>', () => {
        expect(wrapper.find('FaReceipt')).toHaveLength(1);
    });
});
