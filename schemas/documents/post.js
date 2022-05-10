import { i18n } from '../documentTranslation'

export default {
  title: 'Post',
  name: 'post',
  type: 'document',
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
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: (doc) => `${doc._lang}__${doc._type}__${doc.title}`,
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
      title: 'Body',
      name: 'body',
      type: 'richText'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    }
  }
}