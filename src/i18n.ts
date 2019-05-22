import i18n from 'i18next';

i18n.init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation: {
        "addBtnText": "Add",
        "newTitlePlaceholder": "Note Title"
      }
    },
    ru: {
      translation: {
        "addBtnText": "Добавить",
        "newTitlePlaceholder": "Заголовок заметки"
      }
    }
  }
})

export default i18n;