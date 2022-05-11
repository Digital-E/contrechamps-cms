import S from '@sanity/desk-tool/structure-builder'
import * as I18nS from 'sanity-plugin-intl-input/lib/structure';
import { i18n } from './schemas/documentTranslation'

import {
  GrDocumentText as FieldIcon,
  GrMultiple as DocumentIcon,
  GrTextAlignLeft as PostIcon,
  GrUser as AuthorIcon,
  GrArticle as ArticleIcon
} from 'react-icons/gr'

export const getDefaultDocumentNode = (props) => {
  if (props.schemaType === 'post') {
    return S.document().views(I18nS.getDocumentNodeViewsForSchemaType(props.schemaType));
  }

  if (props.schemaType === 'home') {
    return S.document().views(I18nS.getDocumentNodeViewsForSchemaType(props.schemaType));
  }

  return S.document();
};

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home')
        .icon(DocumentIcon)      
        .child(
            S.document()
            .id('home')
            .schemaType('home')
            .views(I18nS.getDocumentNodeViewsForSchemaType('home'))
        ),  
      S.listItem()
        .title('Events')
        .icon(DocumentIcon)
        .child(
          S.list()
            .id('events')
            .title('Events')
            .items([
              S.listItem()
                .title('Event')
                .id('post-docs')
                .icon(PostIcon)
                .schemaType('post')
                .child(
                  S.documentList()
                    .id('post')
                    .title('Posts')
                    // Use a GROQ filter to get documents.
                    .filter('_type == "post" && (!defined(_lang) || _lang == $baseLang)')
                    .params({ baseLang: i18n.base })
                    .canHandleIntent((_name, params, _context) => {
                      // Assume we can handle all intents (actions) regarding post documents
                      return params.type === 'post'
                    })
                )
            ]
            )
        ),
    ])