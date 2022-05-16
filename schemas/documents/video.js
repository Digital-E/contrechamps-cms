import { i18n } from '../documentTranslation'

export default {
  title: 'Video',
  name: 'video',
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
      options: {
        // source: (doc) => `${doc._lang}__${doc._type}__${doc.title}`,
        source: (doc) => `${doc._lang}__media__videos__${doc.title}`,
      },
    },
    {
        title: 'Image',
        name: 'image',
        type: 'image'
        },
    {
    title: 'Video',
    name: 'video',
    description: "Vimeo Video ID: https://vimeo.com/[ID]",
    type: 'string'
    },
    {
        title: 'Text',
        name: 'text',
        type: 'richText'
    },
  ]
}