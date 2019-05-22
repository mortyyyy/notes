import * as React from 'react';
import { RemoveIcon } from '../../RemoveIcon';
import autobind from 'autobind-decorator';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { Loader } from '../../Loader';
import Note from '../../../services/dto/note';

export interface NotesListItemProps {
    note: Note,
    removeNote: (id: number) => void,

    editNote?: (note: Note) => void
}

@observer
export class NotesListItem extends React.Component<NotesListItemProps> {

    @observable
    private editMode: boolean = false;

    @observable
    private loading: boolean = false;

    @observable
    private newTitle: string = null;

    render() {
        return (
            <div className="col-4 note-list-item">
                <RemoveIcon onClick={this.handleRemoveItemClick} />
                <div className="note-list-item-content">
                    {this.renderContent()}
                    {this.loading && <Loader />}
                </div>
            </div>
        )
    }

    @autobind
    private startEdit() {
        this.editMode = true;
        this.newTitle = this.props.note.title;
    }

    @autobind
    private finishEdit() {
        this.editMode = false;
        this.newTitle = null;
    }

    @autobind
    private renderContent() {
        if (!this.editMode) {
            return <div className="note-list-item-title-container" onClick={this.startEdit}>
                {this.props.note.title}
            </div>
        }
        return (<>
            <textarea
                className="form-control edit-note-input"
                onBlur={this.finishEdit}
                onKeyPress={this.textAreaOnInputPress}
                onChange={this.handleTitleChange}
                value={this.newTitle}
                autoFocus
            />
        </>)
    }

    @autobind
    private async handleRemoveItemClick() {
        const { removeNote, note: { id } } = this.props;
        this.loading = true;
        await removeNote(id);
    }

    @autobind
    private async editNote() {
        this.loading = true;
        await this.props.editNote({
            id: this.props.note.id,
            title: this.newTitle,
        });
        this.loading = false;
    }

    @autobind
    private textAreaOnInputPress(e: React.KeyboardEvent<HTMLTextAreaElement>) {
        if (e.charCode === 13 && !e.shiftKey) {
            e.preventDefault();
            this.editNote();
            this.finishEdit();
        }
    }

    @autobind
    private handleTitleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        this.newTitle = e.currentTarget.value;
    }
}