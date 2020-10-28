import React from 'react';
import { shallow } from 'enzyme';
import AddRequestButton from '../pages/Home/AddRequestButton';
import setup from './setupTests';

const store = setup();
const wrapper = shallow(
    <AddRequestButton onClick={()=>{}} store={store} />
);

describe('Component rendering test <AddRequestButton>', () => {
    it('should render structure with <span>', () => {
        expect(wrapper.find('span')).toHaveLength(1);
    });
    it('should render structure with <FaReceipt>', () => {
        expect(wrapper.find('FaReceipt')).toHaveLength(1);
    });
});
