const languages = {
  en: 'English',
  es: 'Español',
  fr: 'Française',
  ht: 'Haiti Creole',
  nl: 'Nederlands',
  fj: 'iTaukei/Fijian',
  pap: 'Papiamento'
}

let resourceObj = {}

Object.keys(languages).forEach(code => {
  resourceObj[code] = {
    translation: require(`./${code}.json`)
  }
})

export const resources = resourceObj

export const languageNames = Object.keys(languages).map(code => {
  return { code, name: languages[code] }
})
