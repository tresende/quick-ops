import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../components/Loading';
import setup from './setupTests';

const shallowWrapper = (store) => shallow(
    <Loading store={store} />
);

describe('Component rendering test <Loading>', () => {

    it('should render the structure with <FaReceipt>', () => {
        const store = setup({
            loadingReducer: {
                loadingStack: ['1']
            }
        });
        const wrapper = shallowWrapper(store);
        const element = wrapper.dive().dive();
        expect(element.find('div img')).toHaveLength(1);
    });

    it('Should initialize null component', () => {
        const store = setup();
        const wrapper = shallowWrapper(store);
        const element = wrapper.dive().dive();
        expect(element).toEqual({})
    });
});
