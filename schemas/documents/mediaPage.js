import { i18n } from '../documentTranslation'

export default {
  title: 'Media Page',
  name: 'mediaPage',
  type: 'document',
  initialValue: () => ({
    _lang: 'fr',
  }),
  // The next property enables full-document translation for this document
  // via the sanity-intl plugin. You can of course modify this object should you
  // need to on a document-to-document bassis.
  i18n,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      // options: {
      //   // source: (doc) => `${doc._lang}__${doc._type}__${doc.title}`,
      //   source: (doc) => `${doc._lang}__${doc.title}`,
      // },
    },
    {
      title: 'Text',
      name: 'text',
      type: 'richText'
  },
  ]
}