import * as React from 'react';
import Note from '../../../stores/NotesStore';
import { RemoveIcon } from '../../RemoveIcon';
import autobind from 'autobind-decorator';

export interface NotesListItemProps {
    note: Note,
    removeNote: (id: number) => void,
}

export class NotesListItem extends React.PureComponent<NotesListItemProps> {
    render() {
        return (
            <div className="col-4 note-list-item">
                <RemoveIcon onClick={this.handleRemoveItemClick} />
                <div className="note-list-item-content">
                    {this.props.note.title}
                </div>
            </div>
        )
    }

    @autobind
    private handleRemoveItemClick() {
        const { removeNote, note: { id } } = this.props;
        removeNote(id);
    }
}