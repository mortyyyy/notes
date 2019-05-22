import * as React from 'react';
import { NotesForm } from '../NotesForm';
import { shallow, mount } from 'enzyme';
import { NotesStore } from '../../../stores/NotesStore';

describe('<NotesForm>', () => {
    let store: any = {}
    beforeEach(() => {
        store = {
            loading: false,
            getNotesList: jest.fn()
        };
    })

    it('should render notesform', () => {
        //@ts-ignore
        const wrapper = shallow(<NotesForm notesStore={this.store} />)

    })
})