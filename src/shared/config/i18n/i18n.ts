import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`../../../../public/locales/${language}/${namespace}.json`),
    ),
  )
  .init({
    lng: 'ru',
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false,
    },
  })

export { i18n }
