import { RouterStore } from 'mobx-react-router';
import { NotesStore } from './stores/NotesStore'


const routingStore = new RouterStore();


const stores = {
    routing: routingStore,
    notesStore: new NotesStore(),
}

export default stores;
