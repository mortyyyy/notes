import * as React from 'react';
import { AddTextInput } from '../AddTextInput';
import { mount } from 'enzyme';

describe('<AddTextInput>', () => {
    let wrapper: any;
    beforeEach(() => {
        wrapper = mount(<AddTextInput onSubmit={() => { }} />)
    })
    it('should render notesform', () => {
        expect(wrapper.find('form').length).toBe(1)
    })
})