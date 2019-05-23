import * as React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import autobind from 'autobind-decorator';
import { withTranslation, WithTranslation } from 'react-i18next';

export interface AddTextInputProps extends WithTranslation {
    onSubmit: (value: string) => Promise<void>,
}

@observer
class TextInput extends React.Component<AddTextInputProps> {

    @observable
    private noteTitle: string = '';

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="input-group">
                    <input type="text"
                        className="form-control"
                        required
                        onChange={this.handleInputChange}
                        value={this.noteTitle}
                        placeholder={this.props.t('newTitlePlaceholder')}
                    />
                    <div className="input-group-append ">
                        <button className="btn btn-success" type="submit">
                            {this.props.t('addBtnText')}
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

export const AddTextInput = withTranslation()(TextInput);
