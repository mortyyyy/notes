import * as React from 'react';
import Note from '../../services/dto/note';
import { NotesListItem } from './NotesListItem';

export interface NotesListProps {
    notes: Note[],
    removeNote: (id: number) => Promise<void>,

    editNote: (note: Note) => Promise<void>
}

export class NotesList extends React.Component<NotesListProps> {
    render() {

        const { notes } = this.props;
        if (!notes || !notes.length) {
            return null;
        }

        return (
            <div className="container">
                <div className="row">
                    {notes.map((note: Note) => <NotesListItem
                        editNote={this.props.editNote}
                        removeNote={this.props.removeNote}
                        key={note.id} note={note} />)}
                </div>
            </div>
        )
    }
}