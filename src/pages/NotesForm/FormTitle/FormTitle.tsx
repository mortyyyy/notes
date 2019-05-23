import * as React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';


interface FormTitleProps extends WithTranslation {
    title: string
}


const formTitle: React.FC<FormTitleProps> = ({ title, t }) => {
    return (
        <h1>{t(title)}</h1>
    )
}

export const FormTitle = withTranslation()(formTitle)