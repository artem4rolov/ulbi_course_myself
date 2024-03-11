import i18next from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'

const newInstance = i18next.createInstance()
newInstance
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
    resources: {},
  })

export { newInstance as i18nForTests }
