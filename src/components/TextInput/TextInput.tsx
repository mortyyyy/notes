import * as React from 'React';

export interface TextInputProps {
    placeholder?: string,

    onChange?: (value: string) => void,

    value?: string
}

export const TextInput: React.FC<TextInputProps> = ({ }) => {
    return (
        <input className="form-control" type="text" name="name" />
    )
}