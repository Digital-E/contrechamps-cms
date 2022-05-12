import { i18n } from '../documentTranslation'


export default {
  title: 'Footer',
  name: 'footer',
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
          title: 'Text Field One',
          name: 'textFieldOne',
          type: 'richText'
      },
      {
          title: 'Text Field Two',
          name: 'textFieldTwo',
          type: 'richText'
      },
      {
          title: 'Text Field Three',
          name: 'textFieldThree',
          type: 'richText'
      },
      {
          title: 'Email Placeholder',
          name: 'emailPlaceholder',
          type: 'string'
      },
      {
          title: 'Email Submit Button Text',
          name: 'submitButtonText',
          type: 'string'
      },                         
      {
        title: 'Socials',
        name: 'socialItems',
        type: 'array',
        of: [
          {
            name: 'socialItem',
            type: 'object',
            fields: [
                {
                    name: 'label',
                    type: 'string' 
                },
                {
                    name: 'url',
                    type: 'url' 
                }
            ]
          },
        ]
      }
  ]
}