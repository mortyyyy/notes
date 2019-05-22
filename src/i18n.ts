import i18n from 'i18next';

i18n.init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation: {
        "test": "hello world"
      }
    }
  }
})

export default i18n;