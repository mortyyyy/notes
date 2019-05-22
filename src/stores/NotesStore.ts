import { observable, action } from 'mobx';
import { getNotes, createNote, removeNote, editNote } from '../services/notesService';
import autobind from 'autobind-decorator';

export default interface Note {
    id: number,

    title: string
}

export class NotesStore {

    @observable
    public notes: Note[] = [];

    @observable
    public loading: boolean = false;


    @action.bound
    public async getNotesList() {
        try {
            this.notes = await getNotes();
        } catch (e) {
            console.error(e)
        }
    }

    @action.bound
    public async createNote(title: string) {
        try {
            const newNote = await createNote(title);
            if (newNote) {
                this.notes = [...this.notes, newNote];
            }
        } catch (e) {
            console.error(e)
        }
    }

    @autobind
    public async removeNote(id: number) {
        try {
            await removeNote(id);
            this.notes = this.notes.filter(note => note.id !== id);
        } catch (e) {
            console.error(e)
        }
    }

    @autobind
    public async editNote(note: Note) {
        try {
            await editNote(note);
        } catch (e) {
            console.log(e);
        }
    }
}