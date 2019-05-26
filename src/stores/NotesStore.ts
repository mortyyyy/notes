import { observable, action } from 'mobx';
import { getNotes, createNote, removeNote, editNote } from '../services/notesService';
import Note from '../services/dto/note';

export class NotesStore {

    @observable
    public notes: Note[] = [];

    @observable
    public error: boolean = false;


    @action.bound
    public async getNotesList() {
        try {
            this.error = false;
            this.notes = await getNotes();
        } catch (e) {
            this.error = true;
            console.error(e)
        }
    }

    @action.bound
    public async createNote(title: string) {
        try {
            this.error = false;
            const newNote = await createNote(title);
            if (newNote) {
                const alreadyExist = this.notes.some(note => note.id === newNote.id);
                if (!alreadyExist) {
                    this.notes = [...this.notes, newNote];
                }
            }
        } catch (e) {
            this.error = true;
            console.error(e)
        }
    }

    @action.bound
    public async removeNote(id: number) {
        try {
            this.error = false;
            await removeNote(id);
            this.notes = this.notes.filter(note => note.id !== id);
        } catch (e) {
            //the delete method always returns CORS error
            // this.error = true;
            this.notes = this.notes.filter(note => note.id !== id);
            console.error(e)
        }
    }

    @action.bound
    public async editNote(newNote: Note) {
        try {
            this.error = false;
            await editNote(newNote);
            this.notes = this.notes.map(note => {
                if (note.id === newNote.id) {
                    return newNote
                }
                return note;
            })
        } catch (e) {
            this.error = true;
            console.log(e);
        }
    }
}