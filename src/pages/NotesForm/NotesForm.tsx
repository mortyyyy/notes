import * as React from 'react'
import { AddTextInput } from '../../components/AddTextInput';
import { NotesList } from '../../components/NotesList';
import { observer, inject } from 'mobx-react';
import { NotesStore } from '../../stores/NotesStore';
import autobind from 'autobind-decorator';
import Note from '../../services/dto/note';


interface NotesFormProps {
    notesStore: NotesStore,
}

@inject('notesStore')
@observer
export class NotesForm extends React.Component<NotesFormProps> {

    async componentDidMount() {
        this.props.notesStore.getNotesList();
    }

    public render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-md-6">
                        <AddTextInput onSubmit={this.addNewNote} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <NotesList
                            editNote={this.editNote}
                            removeNote={this.removeNote}
                            notes={this.props.notesStore.notes}
                        />
                    </div>
                </div>
            </div>
        )
    }

    @autobind
    private addNewNote(title: string) {
        this.props.notesStore.createNote(title);
    }

    @autobind
    private removeNote(id: number) {
        this.props.notesStore.removeNote(id)
    }

    @autobind
    private editNote(note: Note) {
        this.props.notesStore.editNote(note)
    }
}