import i18n from 'i18next';

i18n.init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation: {
        "addBtnText": "Add",
        "newTitlePlaceholder": "Note Title",
        "pageNotFound": 'page does not exist'
      }
    },
    ru: {
      translation: {
        "addBtnText": "Добавить",
        "newTitlePlaceholder": "Заголовок заметки",
        "pageNotFound": 'страница не найдена'
      }
    }
  }
})

export default i18n;