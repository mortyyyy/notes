import * as React from 'react';
import Note from '../../../stores/NotesStore';
import { RemoveIcon } from '../../RemoveIcon';
import autobind from 'autobind-decorator';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { Loader } from '../../Loader';

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
    }

    @autobind
    private finishEdit() {
        this.editNote();
        this.editMode = false;
    }

    @autobind
    private renderContent() {
        if (!this.editMode) {
            return <div onClick={this.startEdit}>
                {this.props.note.title}
            </div>
        }
        return (<form onSubmit={this.editNote}>
            <textarea
                className="form-control"
                onBlur={this.finishEdit}
                autoFocus
            />
        </form>)
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
        //await this.props.editNote(this.props.note);
        this.finishEdit();
        this.loading = false;
    }
}