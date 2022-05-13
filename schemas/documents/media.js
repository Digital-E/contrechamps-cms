import { i18n } from '../documentTranslation'

export default {
  title: 'Media',
  name: 'media',
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
        source: (doc) => `${doc._lang}__saison__${doc.title}`,
      },
    },
    {
        title: 'Start Date',
        name: 'startdate',
        type: 'date'
    },
    {
        title: 'End Date',
        name: 'enddate',
        type: 'date'
    },
    {
        title: 'Start Time',
        name: 'starttime',
        type: 'datetime'
    },
    {
        title: 'End Time',
        name: 'endtime',
        type: 'datetime'
    },
    {
        title: 'Location',
        name: 'location',
        type: 'richText'
    },
    {
      title: 'Image',
      name: 'image',
      type: 'captionImage',
      options: {
        hotspot: true
      },
    },
    {
        title: 'Ticket Link',
        name: 'ticketLink',
        type: 'url'
    },
    {
        title: 'Ticket Link Label',
        name: 'ticketLinkLabel',
        type: 'string'
    },          
    {
        title: 'Information',
        name: 'information',
        type: 'richText'
    },
    {
      title: 'Slices',
      name: 'slices',
      type: 'array',
      of: [
        {
          title: 'Image',
          name: 'image',
          type: 'image'
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
  preview: {
    select: {
      title: 'title',
      media: 'image'
    }
  }
}