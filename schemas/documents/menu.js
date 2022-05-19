import { i18n } from '../documentTranslation'


export default {
  title: 'Menu',
  name: 'menu',
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
        title: 'Menu Items',
        name: 'menuItems',
        type: 'array',
        of: [
          {
            name: 'menuItem',
            type: 'object',
            fields: [
                {
                    name: 'label',
                    type: 'string' 
                },
                {
                    name: 'url',
                    type: 'string' 
                }
            ]
          },
        ]
      },
      {
        title: 'Cookie Text',
        name: 'cookietext',
        type: 'richText'
      },
      {
        title: 'Cookie Accept',
        name: 'cookieaccept',
        type: 'string'
      },
      {
        title: 'Cookie Refuse',
        name: 'cookierefuse',
        type: 'string'
      }
  ]
}