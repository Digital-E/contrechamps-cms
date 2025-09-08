import { i18n } from '../documentTranslation'

export default {
  title: "Les Musiciens",
  name: 'lesMusiciens',
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
        source: (doc) => `${doc._lang}__a-propos__les-musiciens__${doc.title}`,
      },
    },
    {
      title: 'Slices',
      name: 'slices',
      type: 'array',
      of: [
        {
          title: 'Image',
          name: 'image',
          type: 'captionImage'
        },
        {
          name: 'video',
          type: 'object',
          initialValue: {
            label: "Video"
          },
          fields: [
              {
                  name: 'label',
                  type: 'string',
                  readOnly: true
              },             
              {
                  name: 'video',
                  description: "Vimeo Video ID: https://vimeo.com/[ID]",
                  type: 'string' 
              },
              {
                name: 'caption',
                type: 'string',
                title: 'Caption',
                options: {
                  isHighlighted: true
                }
              }               
          ]
        },
        {
          title: 'Text',
          name: 'Text',
          type: 'object',
          initialValue: {
            label: "Text"
          },
          fields: [
              {
                  name: 'label',
                  type: 'string',
                  readOnly: true
              },           
              {
                title: 'Text',
                name: 'text',
                type: 'richText'
              },
              {
                title: 'Double Column',
                name: 'doubleColumn',
                type: 'boolean',
                initialValue: false
              }
          ]
        }
      ]
    }
  ],
}