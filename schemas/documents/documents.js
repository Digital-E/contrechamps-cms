import { i18n } from '../documentTranslation'


export default {
  title: 'Documents',
  name: 'documents',
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
        title: 'Documents',
        name: 'documents',
        type: 'array',
        of: [
            {
            title: 'Document',
            name: 'document',
            type: 'file',
            options: {
                storeOriginalFilename: true
            }
            }            
        ]
    }
  ]
}