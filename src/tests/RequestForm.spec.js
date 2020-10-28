import React from 'react';
import { shallow } from 'enzyme';
import RequestForm from '../components/RequestForm';
import setup from './setupTests';
import RequestService from '../services/RequestService';

const store = setup();

describe('Component rendering test <RequestForm>', () => {
    it('Should render null component when parameter "show" is null', () => {
        const wrapper = shallow(
            <RequestForm store={store} onCancel={() => { }} />
        );
        expect(wrapper.dive().type()).toEqual(null);
    });

    it('Should render null component when parameter "show" is false', () => {
        const wrapper = shallow(
            <RequestForm store={store} onCancel={() => { }} />
        );
        expect(wrapper.dive().type()).toEqual(null);
    });
    it('Should render 4 divs in component when parameter "show" is true', () => {
        const wrapper = shallow(
            <RequestForm show store={store} onCancel={() => { }} />
        );
        expect(wrapper.dive().find('div')).toHaveLength(4);
    });

    it('Should call callback null when click in cancel button', () => {
        const onCancel = jest.fn();
        const wrapper = shallow(
            <RequestForm show store={store} onCancel={onCancel} />
        );
        wrapper.dive().find('[data-test="cancel"]').simulate('click');
        expect(onCancel).toHaveBeenCalledTimes(1);
    });

    it('Should call o service.save when click in save button with a valid form', () => {
        RequestService.validate = jest.fn();
        RequestService.validate.mockReturnValueOnce(true);
        const wrapper = shallow(
            <RequestForm show store={store} onCancel={() => { }} />
        );
        wrapper.dive().find('[data-test="save"]').simulate('click');
        expect(RequestService.validate).toHaveBeenCalledTimes(1);
    });
});
