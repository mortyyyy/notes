import * as React from 'react'
import { withTranslation, WithTranslation } from 'react-i18next';

export const NotFound: React.FC<WithTranslation> = ({ t }) => {
    return (<div className="container">
        <div className="row justify-content-center">
            <h1>{t('pageNotFound')}</h1>
        </div>
    </div>
    )
}

export default withTranslation()(NotFound);
