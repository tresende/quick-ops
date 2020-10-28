import React from 'react';
import { shallow } from 'enzyme';
import RequestForm from '../components/RequestForm';
import setup from './setupTests';
import RequestService from '../services/RequestService';

const store = setup();

describe('Teste de renderização do componente <RequestForm>', () => {
    it('Não deve aparecer se não enviar o parametro show', () => {
        const wrapper = shallow(
            <RequestForm store={store} onCancel={() => { }} />
        );
        expect(wrapper.dive().type()).toEqual(null);
    });

    it('Não deve aparecer se enviar o parametro show=false', () => {
        const wrapper = shallow(
            <RequestForm store={store} onCancel={() => { }} />
        );
        expect(wrapper.dive().type()).toEqual(null);
    });
    it('Deve montrar uma estrutura com 4 div se show=true', () => {
        const wrapper = shallow(
            <RequestForm show store={store} onCancel={() => { }} />
        );
        expect(wrapper.dive().find('div')).toHaveLength(4);
    });

    it('Deve chamar o callback se clicar em cancelar', () => {
        const onCancel = jest.fn();
        const wrapper = shallow(
            <RequestForm show store={store} onCancel={onCancel} />
        );
        wrapper.dive().find('[data-test="cancel"]').simulate('click');
        expect(onCancel).toHaveBeenCalledTimes(1);
    });

    it('Deve chamar o service.save se clicar em salvar com o resultado válido', () => {
        RequestService.validate = jest.fn();
        RequestService.validate.mockReturnValueOnce(true);
        const wrapper = shallow(
            <RequestForm show store={store} onCancel={() => { }} />
        );
        wrapper.dive().find('[data-test="save"]').simulate('click');
        expect(RequestService.validate).toHaveBeenCalledTimes(1);
    });
});
