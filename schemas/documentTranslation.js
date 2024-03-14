import { languages, baseLanguage } from './languages'

// This is configuration for whole-document translations via sanity-intl plugin
// See https://github.com/LiamMartens/sanity-plugin-intl-input/blob/master/docs/general-configuration.md
export const i18n = {
  base: baseLanguage.name,
  languages,
  idStructure: "subpath",
  referenceBehavior: 'weak',
  fieldNames: {
    lang: '_lang',
    references: '_langRefs'
  }
}