import * as React from 'react';
import { NotesList } from '../NotesList';
import { mount } from 'enzyme';
import Note from '../../../services/dto/note';
import { NotesListItem } from '../NotesListItem';

const noteList: Note[] = [{
    id: 1,
    title: 'abc'
}, {
    id: 2,
    title: 'bca'
}
]

describe('<NotesList />', () => {
    let wrapper: any;
    beforeEach(() => {
        //@ts-ignore
        wrapper = mount(<NotesList notes={noteList} />)
    })

    it('should render notesform', () => {
        expect(wrapper.find('.container').length).toBe(1)
    })

    it('should render notes', () => {
        expect(wrapper.find(NotesListItem).length).toBe(2)
    })
})