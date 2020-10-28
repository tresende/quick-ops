import React from 'react';
import { mount } from 'enzyme';
import InputFile from '../components/RequestForm/InputFile';
import setup from './setupTests';

setup();
const wrapper = mount(
    <InputFile onChange={() => { }} />
);

describe('Teste de renderização do componente <InputFile>', () => {
    it('Inicializar sem do nome do arquivo', () => {
        expect(wrapper.find('[data-test="file-name"] span').length).toEqual(0);
    });
    it('Inicializar com nome do arquivo', () => {
        const file = new File([""], "file.png", {type: 'image/png'})
        wrapper.find('input').simulate('change', { target: { files: [file] } });
        expect(wrapper.find('[data-test="file-name"] span').length).toEqual(1);
    });
});
