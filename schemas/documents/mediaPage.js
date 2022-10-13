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
    },
    {
      title: 'Type',
      name: 'type',
      type: 'string',
      options: {
        list: [
          { title: "Presse", value: "presse"},
          { title: "Vidéos", value: "video"},
          { title: "Disques", value: "disque"},
          { title: "Photos", value: "photo"},
        ]
      }
    },
    {
      title: 'Text',
      name: 'text',
      type: 'richText'
  },
  ]
}