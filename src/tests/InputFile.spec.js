import React from 'react';
import { mount } from 'enzyme';
import InputFile from '../components/RequestForm/InputFile';
import setup from './setupTests';

setup();
const wrapper = mount(
    <InputFile onChange={() => { }} />
);

describe('Component rendering test <InputFile>', () => {
    it('Should initialize file component wihthout file name', () => {
        expect(wrapper.find('[data-test="file-name"] span').length).toEqual(0);
    });
    it('Should initialize file component with file name', () => {
        const file = new File([""], "file.png", {type: 'image/png'})
        wrapper.find('input').simulate('change', { target: { files: [file] } });
        expect(wrapper.find('[data-test="file-name"] span').length).toEqual(1);
    });
});
