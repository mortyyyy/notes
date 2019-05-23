import * as React from 'react'
import { AddTextInput } from '../../components/AddTextInput';
import { NotesList } from '../../components/NotesList';
import { observer, inject } from 'mobx-react';
import { NotesStore } from '../../stores/NotesStore';
import { ValidationErrorMessage } from '../../components/ValidationErrorMessage';
import { FormTitle } from './FormTitle';


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

        const { notesStore: { createNote, editNote, removeNote, notes, error } } = this.props;

        return (
            <div className='container'>
                <div className="row justify-content-center">
                    <FormTitle title="formTitle" />
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-7">
                        <AddTextInput onSubmit={createNote} />
                        <ValidationErrorMessage error={error ? 'commonErrorMessage' : null} />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-7">
                        <NotesList
                            editNote={editNote}
                            removeNote={removeNote}
                            notes={notes}
                        />
                    </div>
                </div>
            </div>
        )
    }
}