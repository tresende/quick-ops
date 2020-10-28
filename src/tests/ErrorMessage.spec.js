import React from 'react';
import { shallow } from 'enzyme';
import ErrorMessage from '../components/ErrorMessage';
import setup from './setupTests';
import Layout from '../layout';

setup();

describe('Component rendering test <ErrorMessage>', () => {
    it('Should render null when parameter "opened" is false', () => {
        const wrapper = shallow(
            <ErrorMessage opened={false} text="" />
        );
        expect(wrapper.type()).toEqual(null)
    });
    it('Should render o <ErrorMessage> when "opened" is true', () => {
        const wrapper = shallow(
            <Layout>
                <ErrorMessage opened={true} text="" />
            </Layout>
        );
        expect(wrapper.find('div')).toHaveLength(1);
    });
    it('Should render text insinde in div', () => {
        const wrapper = shallow(
            <Layout>
                <ErrorMessage opened={true} text="TEXT" />
            </Layout>
        );
        expect(wrapper.find('ErrorMessage').dive().text()).toMatch(/TEXT/)
    });
});
