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
  return S.document().views(I18nS.getDocumentNodeViewsForSchemaType(props.schemaType));
  if (
      props.schemaType === 'post'
      ||
      props.schemaType === 'home'
      ||
      props.schemaType === 'media'
      ||
      props.schemaType === 'lEnsemble'
      ||
      props.schemaType === 'menu'
      ||
      props.schemaType === 'footer'
      ) {
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
            .title('Home')
            .id('home')
            .schemaType('home')
            .views(I18nS.getDocumentNodeViewsForSchemaType('home'))
        ),
      S.listItem()
        .title('Saison')
        .icon(DocumentIcon)      
        .child(
            S.document()
            .title('Saison')
            .id('saison')
            .schemaType('saison')
            .views(I18nS.getDocumentNodeViewsForSchemaType('saison'))
        ), 
      S.listItem()
        .title('Événements')
        .icon(DocumentIcon)
        .child(
          S.list()
            .id('events')
            .title('Events')
            .items([
              S.listItem()
                .title('Événements')
                .id('post-docs')
                .icon(PostIcon)
                .schemaType('post')
                .child(
                  S.documentList()
                    .id('post')
                    .title('Événements')
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
      S.listItem()
        .title("L'ensemble")
        .icon(DocumentIcon)
        .child(
          S.list()
            .id('lEnsemble')
            .title("L'ensemble")
            .items([
              S.listItem()
              .title('Menu')
              .icon(DocumentIcon)      
              .child(
                  S.document()
                  .title('Menu')
                  .id('lEnsembleMenu')
                  .schemaType('lEnsembleMenu')
                  .views(I18nS.getDocumentNodeViewsForSchemaType('lEnsembleMenu'))
              ),
              S.listItem()
                .title("L'ensemble")
                .id('lEnsemble')
                .icon(PostIcon)
                .schemaType('lEnsemble')
                .child(
                  S.documentList()
                    .id('lEnsemble')
                    .title("L'ensemble")
                    // Use a GROQ filter to get documents.
                    .filter('_type == "lEnsemble" && (!defined(_lang) || _lang == $baseLang)')
                    .params({ baseLang: i18n.base })
                    .canHandleIntent((_name, params, _context) => {
                      // Assume we can handle all intents (actions) regarding post documents
                      return params.type === 'lEnsemble'
                    })
                )
            ]
            )
        ),        
      S.listItem()
        .title('Media')
        .icon(DocumentIcon)
        .child(        
          S.list()
            .id('media')
            .title('Media')
            .items([
              S.listItem()
                .title('Page Presse')
                .icon(DocumentIcon)
                .schemaType('mediaPage')
                .child(
                  S.document()
                  .title('Page Presse')
                  .id('pressePage')
                  .schemaType('mediaPage')
                  .views(I18nS.getDocumentNodeViewsForSchemaType('mediaPage'))
                ),
              S.listItem()
                .title('Presse')
                .id('presse')
                .icon(PostIcon)
                .schemaType('presse')
                .child(
                  S.documentList()
                    .id('presse')
                    .title('Presse')
                    // Use a GROQ filter to get documents.
                    .filter('_type == "presse" && (!defined(_lang) || _lang == $baseLang)')
                    .params({ baseLang: i18n.base })
                    .canHandleIntent((_name, params, _context) => {
                      // Assume we can handle all intents (actions) regarding post documents
                      return params.type === 'presse'
                    })
                ),
                S.listItem()
                .title('Page Videos')
                .icon(DocumentIcon)
                .schemaType('mediaPage')
                .child(
                  S.document()
                  .title('Page Videos')
                  .id('videosPage')
                  .schemaType('mediaPage')
                  .views(I18nS.getDocumentNodeViewsForSchemaType('mediaPage'))
                ),                
              S.listItem()
                .title('Vidéos')
                .id('videos')
                .icon(PostIcon)
                .schemaType('video')
                .child(
                  S.documentList()
                    .id('videos')
                    .title('Vidéos')
                    // Use a GROQ filter to get documents.
                    .filter('_type == "video" && (!defined(_lang) || _lang == $baseLang)')
                    .params({ baseLang: i18n.base })
                    .canHandleIntent((_name, params, _context) => {
                      // Assume we can handle all intents (actions) regarding post documents
                      return params.type === 'video'
                    })
                ),
                S.listItem()
                .title('Page Disques')
                .icon(DocumentIcon)
                .schemaType('mediaPage')
                .child(
                  S.document()
                  .title('Page Disques')
                  .id('disquesPage')
                  .schemaType('mediaPage')
                  .views(I18nS.getDocumentNodeViewsForSchemaType('mediaPage'))
                ),                   
              S.listItem()
                .title('Disques')
                .id('disques')
                .icon(PostIcon)
                .schemaType('disque')
                .child(
                  S.documentList()
                    .id('disque')
                    .title('Disques')
                    // Use a GROQ filter to get documents.
                    .filter('_type == "disque" && (!defined(_lang) || _lang == $baseLang)')
                    .params({ baseLang: i18n.base })
                    .canHandleIntent((_name, params, _context) => {
                      // Assume we can handle all intents (actions) regarding post documents
                      return params.type === 'disque'
                    })
                )                                  
            ]
            )
        ),                         
      S.listItem()
        .title('Menu')
        .icon(DocumentIcon)      
        .child(
            S.document()
            .title('Menu')
            .id('menu')
            .schemaType('menu')
            .views(I18nS.getDocumentNodeViewsForSchemaType('menu'))
        ),
      S.listItem()
        .title('Footer')
        .icon(DocumentIcon)      
        .child(
            S.document()
            .title('Footer')
            .id('footer')
            .schemaType('footer')
            .views(I18nS.getDocumentNodeViewsForSchemaType('footer'))
        ),                     
    ])