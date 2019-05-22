import * as React from 'react';
import Note from '../../../stores/NotesStore';
import { RemoveIcon } from '../../RemoveIcon';
import autobind from 'autobind-decorator';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

export interface NotesListItemProps {
    note: Note,
    removeNote: (id: number) => void,
}

@observer
export class NotesListItem extends React.Component<NotesListItemProps> {

    @observable
    private editMode: boolean = false;

    render() {
        return (
            <div className="col-4 note-list-item">
                <RemoveIcon onClick={this.handleRemoveItemClick} />
                <div className="note-list-item-content">
                    {this.renderContent()}
                </div>
            </div>
        )
    }

    @autobind
    private startEdit() {
        this.editMode = true;
    }

    @autobind
    private finishEdit() {
        this.editMode = true;
    }

    @autobind
    private renderContent() {
        if (!this.editMode) {
            return <div onClick={this.startEdit}>
                {this.props.note.title}
            </div>
        }
        return (<div>
            <input className="form-control" onBlur={this.finishEdit} type="text" autoFocus value={this.props.note.title} />
        </div>)
    }

    @autobind
    private handleRemoveItemClick() {
        const { removeNote, note: { id } } = this.props;
        removeNote(id);
    }
}