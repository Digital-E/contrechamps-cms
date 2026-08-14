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
      title: 'Slides',
      name: 'slides',
      type: 'array',
      of: [
        {
          name: 'slide',
          type: 'object',
          fields: [
              {
                  name: 'label',
                  type: 'string',
                  initialValue: 'Slide',
                  readOnly: true
              },
              {
                title: 'URL',
                name: 'url',
                type: 'string',
                description: 'Optional. Makes the slide clickable. Use a full URL (https://...) for an external link, or a relative path (e.g. /fr/saison) for an internal page.'
              },
              {
                  title: 'Video',
                  name: 'videoMp4',
                  type: 'file'
              },
              {
                title: 'Image',
                name: 'image',
                type: 'image'
              },
              {
                  title: 'Video (mobile)',
                  name: 'videoMp4Mobile',
                  type: 'file',
                  description: 'Optional. Replaces the video on mobile if provided.'
              },
              {
                title: 'Image (mobile)',
                name: 'imageMobile',
                type: 'image',
                description: 'Optional. Replaces the image on mobile if provided.'
              }
          ]
        },
      ]
    },    
    // {
    //   title: 'Circles',
    //   name: 'circles',
    //   type: 'array',
    //   of: [
    //     {
    //       name: 'circle',
    //       type: 'object',
    //       fields: [
    //           {
    //               name: 'label',
    //               type: 'richText' 
    //           },
    //           {
    //               name: 'videoMp4',
    //               type: 'file' 
    //           },
    //           {
    //             name: 'videoWebm',
    //             type: 'file' 
    //           }
    //       ]
    //     },
    //   ]
    // },
  ]
}