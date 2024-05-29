import { i18n } from '../documentTranslation'

export default {
  title: 'Event',
  name: 'post',
  type: 'document',
  initialValue: () => ({
    _lang: 'fr',
  }),
  // The next property enables full-document translation for this document
  // via the sanity-intl plugin. You can of course modify this object should you
  // need to on a document-to-document bassis.
  i18n,
  orderings: [
    {
      title: 'Release Date, New',
      name: 'releaseDateDesc',
      by: [
        {field: 'startdate', direction: 'desc'}
      ]
    },
    // {
    //   title: 'Release Date, Old',
    //   name: 'releaseDateAsc',
    //   by: [
    //     {field: 'startdate', direction: 'asc'}
    //   ]
    // }
  ],
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
        type: 'datetime',
        validation: (Rule) => Rule.required(),
        initialValue: () => (new Date()).toISOString()
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
      title: 'Occurences',
      name: 'occurences',
      type: 'array',
      of: [
        {
          name: 'occurence',
          type: 'object',
          initialValue: {
            startdate: null,
            starttime: null,
            enddate: null,
            endtime: null
          },
          fields: [           
              {
                title: 'Start Date',
                name: 'startdate',
                type: 'date'
              },
              {
                title: 'Start Time',
                name: 'starttime',
                type: 'datetime'
              },
              {
                title: 'End Date',
                name: 'enddate',
                type: 'date'
              },
              {
                title: 'End Time',
                name: 'endtime',
                type: 'datetime'
              },
          ]
        }
      ]
    },
    {
        title: 'Location',
        name: 'location',
        type: 'richText'
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [
        {
          name: 'Tag',
          type: 'object',
          fields: [
              {
                  name: 'label',
                  type: 'string' 
              },
          ]
        },
      ]
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
      name: 'videoMp4',
      type: 'file' 
    },
    {
    name: 'videoWebm',
    type: 'file' 
    },
    {
      name: 'label',
      type: 'richText' 
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
        title: 'Ticket Link Two',
        name: 'ticketLinkTwo',
        type: 'url'
    },
    {
        title: 'Ticket Link Label Two',
        name: 'ticketLinkLabelTwo',
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