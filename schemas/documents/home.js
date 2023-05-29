import { i18n } from '../documentTranslation'


export default {
  title: 'Home',
  name: 'home',
  type: 'document',
  initialValue: () => ({
    _lang: 'fr',
  }),
  // __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
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
        source: (doc) => `${doc._lang}`,
      },
    },
    {
      title: 'Circles',
      name: 'circles',
      type: 'array',
      of: [
        {
          name: 'circle',
          type: 'object',
          fields: [
              {
                  name: 'label',
                  type: 'richText' 
              },
              {
                  name: 'videoMp4',
                  type: 'file' 
              },
              {
                name: 'videoWebm',
                type: 'file' 
              }
          ]
        },
      ]
    },
  ]
}