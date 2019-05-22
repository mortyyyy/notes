import * as React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';


interface ValidationErrorMessageProps extends WithTranslation {
    error: string
}

const validationErrorMessage: React.FC<ValidationErrorMessageProps> = ({ error, t }) => {
    return <div className="text-danger error-message">
        {error && <small> {t(error)}</small>}
    </div>
}

export const ValidationErrorMessage = withTranslation()(validationErrorMessage)