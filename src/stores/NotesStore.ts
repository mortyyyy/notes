import { observable, action } from 'mobx';
import { getNotes } from '../services/notesService';

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
            console.log(this.notes);
        } catch (e) {
            console.error(e)
        }
    }
}