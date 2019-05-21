import * as React from 'react'
import { TextInput } from '../../components/TextInput';
import { NotesList } from '../../components/NotesList';
import { getNotes } from '../../services/notesService';
import { observer, inject } from 'mobx-react';
import { NotesStore } from '../../stores/NotesStore';


interface NotesFormProps {
    notesStore: NotesStore
}

@observer
@inject('notesStore')
export class NotesForm extends React.Component<NotesFormProps> {

    async componentDidMount() {
       console.log(this.props.notesStore.loading)
    }

    public render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col">
                        <TextInput />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <NotesList />
                    </div>
                </div>
            </div>
        )
    }
}