import * as React from 'react'
import { AddTextInput } from '../../components/AddTextInput';
import { NotesList } from '../../components/NotesList';
import { observer, inject } from 'mobx-react';
import { NotesStore } from '../../stores/NotesStore';
import autobind from 'autobind-decorator';
import Note from '../../services/dto/note';
import { ValidationErrorMessage } from '../../components/ValidationErrorMessage';


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
                <div className="row justify-content-center">
                    <h1>Notes</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-7">
                        <AddTextInput onSubmit={this.addNewNote} />
                        <ValidationErrorMessage error={this.props.notesStore.error ? 'commonErrorMessage' : null} />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-7">
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
        return this.props.notesStore.createNote(title);
    }

    @autobind
    private removeNote(id: number) {
        return this.props.notesStore.removeNote(id)
    }

    @autobind
    private editNote(note: Note) {
        return this.props.notesStore.editNote(note)
    }
}