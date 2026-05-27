import { i18n } from '../documentTranslation'

export default {
  title: "Ensemble",
  name: 'lEnsemble',
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
        source: (doc) => `${doc._lang}__a-propos__${doc.title}`,
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
        },
        {
          title: 'Grid',
          name: 'Grid',
          type: 'object',
          initialValue: {
            label: "Grid",
            columns: "2"
          },
          fields: [
            {
                name: 'label',
                type: 'string',
                readOnly: true
            },
            {
                name: 'columns',
                type: 'string',
                options: {
                  list: [
                    { title: '2', value: '2' },
                    { title: '3', value: '3' },
                  ],
                }
            },
            {
              title: 'Grid Items',
              name: 'gridItems',
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
                          description: "Vimeo Video ID: https://vimeo.com/[ID] or Youtube ID: https://youtu.be/[ID]",
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
              ]
            }
          ]
        },
        {
          title: 'Logo Grid',
          name: 'LogoGrid',
          type: 'object',
          initialValue: {
            label: "Logo Grid"
          },
          fields: [
            {
              name: 'label',
              type: 'string',
              readOnly: true
            },
            {
              title: 'Logos',
              name: 'logos',
              type: 'array',
              of: [
                {
                  title: 'Logo',
                  name: 'logo',
                  type: 'object',
                  preview: {
                    select: {
                      title: 'url',
                      media: 'image'
                    }
                  },
                  fields: [
                    {
                      title: 'Image',
                      name: 'image',
                      type: 'captionImage'
                    },
                    {
                      title: 'URL',
                      name: 'url',
                      type: 'url',
                      description: 'Lien vers le site externe'
                    }
                  ]
                }
              ]
            }
          ]
        },
      ]
    },
    {
      title: 'Slices Right',
      name: 'slicesRight',
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
        },
        {
          title: 'Grid',
          name: 'Grid',
          type: 'object',
          initialValue: {
            label: "Grid",
            columns: "2"
          },
          fields: [
            {
                name: 'label',
                type: 'string',
                readOnly: true
            },
            {
                name: 'columns',
                type: 'string',
                options: {
                  list: [
                    { title: '2', value: '2' },
                    { title: '3', value: '3' },
                  ],
                }
            },
            {
              title: 'Grid Items',
              name: 'gridItems',
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
                          description: "Vimeo Video ID: https://vimeo.com/[ID] or Youtube ID: https://youtu.be/[ID]",
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
              ]
            }
          ]
        },
        {
          title: 'Logo Grid',
          name: 'LogoGrid',
          type: 'object',
          initialValue: {
            label: "Logo Grid"
          },
          fields: [
            {
              name: 'label',
              type: 'string',
              readOnly: true
            },
            {
              title: 'Logos',
              name: 'logos',
              type: 'array',
              of: [
                {
                  title: 'Logo',
                  name: 'logo',
                  type: 'object',
                  preview: {
                    select: {
                      title: 'url',
                      media: 'image'
                    }
                  },
                  fields: [
                    {
                      title: 'Image',
                      name: 'image',
                      type: 'captionImage'
                    },
                    {
                      title: 'URL',
                      name: 'url',
                      type: 'url',
                      description: 'Lien vers le site externe'
                    }
                  ]
                }
              ]
            }
          ]
        },
      ]
    }
  ],
}