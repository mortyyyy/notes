import * as React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import autobind from 'autobind-decorator';
import { withTranslation, WithTranslation } from 'react-i18next';
export interface AddTextInputProps extends WithTranslation {
    onSubmit: (value: string) => void,
}

@observer
class AddTextInput2 extends React.Component<AddTextInputProps> {

    @observable
    private noteTitle: string = '';

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" required onChange={this.handleInputChange} value={this.noteTitle} placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div className="input-group-append ">
                        <button className="btn btn-success" type="submit">
                            {this.props.t('test')}
                        </button>
                    </div>
                </div>
            </form>
        )
    }

    @autobind
    private handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.noteTitle = e.currentTarget.value;
    }

    @autobind
    private onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        this.props.onSubmit(this.noteTitle);
        this.noteTitle = '';
    }
}

export const AddTextInput = withTranslation()(AddTextInput2);
