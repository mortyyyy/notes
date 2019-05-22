import * as React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';

const languageSwitcher: React.FC<WithTranslation> = ({ i18n }) => {
    return (
        <select
            className="form-control"
            value={i18n.language}
            onChange={e => i18n.changeLanguage(e.target.value)} >
            <option value="en">EN</option>
            <option value="ru">RU</option>
        </select>
    )
}

export const LanguageSwitcher = withTranslation()(languageSwitcher);
