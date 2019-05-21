import * as React from 'react'
import { TextInput } from '../../components/TextInput';
import { NotesList } from '../../components/NotesList';

export class NotesForm extends React.Component {
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