import i18n from 'i18next';

i18n.init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation: {
        "addBtnText": "Add",
        "newTitlePlaceholder": "Note Title",
        "pageNotFound": 'page does not exist',
        "commonErrorMessage": 'An error has occurred',
        "formTitle": 'Notes'
      }
    },
    ru: {
      translation: {
        "addBtnText": "Добавить",
        "newTitlePlaceholder": "Заголовок заметки",
        "pageNotFound": 'Cтраница не найдена',
        "commonErrorMessage": 'Произошла ошибка',
        "formTitle": 'Заметки'
      }
    }
  }
})

export default i18n;